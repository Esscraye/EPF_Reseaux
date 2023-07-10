// Dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'fs';
import https from 'https';
import http from 'http';
import dotenv from 'dotenv';
import { Server as SocketServer } from 'socket.io';
import rateLimiter from './hook/rateLimiter.mjs';

dotenv.config();

// Core
import config from './config.mjs';
import routes from './controllers/routes.mjs';

const Server = class Server {
  constructor() {
    if (process.env.NODE_ENV === 'production') {
      const ssl_certificate =  fs.readFileSync(process.env.SSL_CERT);
      const ssl_certificate_key =  fs.readFileSync(process.env.SSL_KEY);
      this.credentials = { key: ssl_certificate_key, cert: ssl_certificate };
    }
    this.app = express();
    this.io = new SocketServer();
    if (process.env.NODE_ENV === 'production') {
      this.httpsServer = https.createServer(this.credentials, this.app);
      this.io.attach(this.ttpsServer);
    } else {
      this.httpServer = http.createServer(this.app);
      this.io.attach(this.httpServer);
    }
    this.config = config[process.argv[2]] || config.development;
  }

  async dbConnect() {
    try {
      const host = this.config.mongodb;

      this.connect = await mongoose.createConnection(host, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const close = () => {
        this.connect.close((error) => {
          if (error) {
            console.error('[ERROR] api dbConnect() close() -> mongodb error', error);
          } else {
            console.log('[CLOSE] api dbConnect() -> mongodb closed');
          }
        });
      };

      this.connect.on('error', (err) => {
        setTimeout(() => {
          console.log('[ERROR] api dbConnect() -> mongodb error');
          this.connect = this.dbConnect(host);
        }, 5000);

        console.error(`[ERROR] api dbConnect() -> ${err}`);
      });

      this.connect.on('disconnected', () => {
        setTimeout(() => {
          console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected');
          this.connect = this.dbConnect(host);
        }, 5000);
      });

      process.on('SIGINT', () => {
        close();
        console.log('[API END PROCESS] api dbConnect() -> close mongodb connection');
        process.exit(0);
      });
    } catch (err) {
      console.error(`[ERROR] api dbConnect() -> ${err}`);
    }
  }

  middleware() {
    this.app.use(compression());
    this.app.use(cors({
      credentials: true,
      origin: this.config.origin
    }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(rateLimiter);
  }

  routes() {
    new routes.Users(this.app, this.connect);
    new routes.Assoc(this.app, this.connect);
    new routes.Groups(this.app, this.connect);
    new routes.Conversations(this.app, this.connect);

    this.app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: 'Not Found'
      });
    });
  }

  security() {
    this.app.use(helmet());
    this.app.disable('x-powered-by');
  }

  async run() {
    try {
      await this.dbConnect();
      this.security();
      this.middleware();
      this.routes();
      this.io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      });
      if (process.env.NODE_ENV === 'production') {
        this.httpsServer.listen(this.config.port);
      } else {
        this.httpServer.listen(this.config.port);
      }
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`);
    }
  }
};

export default Server;
