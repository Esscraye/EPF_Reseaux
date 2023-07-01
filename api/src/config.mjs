import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    type: 'development',
    port: 3000,
    mongodb: process.env.MONGODB_URL,
    origin: 'http://127.0.0.1:9090'
  },
  production: {
    type: 'production',
    port: 3000,
    mongodb: process.env.MONGODB_URL,
    origin: 'http://127.0.0.1:9090'
  }
};
