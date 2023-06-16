import MessageModel from '../models/message.mjs';

const Messages = class Messages {
  constructor(app, connect) {
    this.app = app;
    this.MessageModel = connect.model('Message', MessageModel);

    this.run();
  }

  deleteById() {
    this.app.delete('/message/:id', (req, res) => {
      try {
        this.MessageModel.findByIdAndDelete(req.params.id).then((message) => {
          res.status(200).json(message || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] message/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showById() {
    this.app.get('/message/:id', (req, res) => {
      try {
        this.MessageModel.findById(req.params.id).then((message) => {
          res.status(200).json(message || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] message/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  create() {
    this.app.post('/message/', (req, res) => {
      try {
        const messageModel = new this.MessageModel(req.body);

        messageModel.save().then((message) => {
          res.status(200).json(message || {});
        }).catch(() => {
          res.status(200).json({});
        });
      } catch (err) {
        console.error(`[ERROR] message/create -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run() {
    this.create();
    this.showById();
    this.deleteById();
  }
};

export default Messages;
