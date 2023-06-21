import ConversationModel from '../models/conversation.mjs';

const Conversations = class Conversations {
  constructor(app, connect) {
    this.app = app;
    this.ConversationModel = connect.model('Conversation', ConversationModel);

    this.run();
  }

  deleteById() {
    this.app.delete('/conversation/:id', (req, res) => {
      try {
        this.ConversationModel.findByIdAndDelete(req.params.id).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showById() {
    this.app.get('/conversation/:id', (req, res) => {
      try {
        this.ConversationModel.findById(req.params.id).then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  create() {
    this.app.post('/conversation/', (req, res) => {
      try {
        const conversationModel = new this.ConversationModel(req.body);

        conversationModel.save().then((conversation) => {
          res.status(200).json(conversation || {});
        }).catch((e) => {
          res.status(500).json({
            code: 500,
            message: e.message
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation/create -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showAll() {
    this.app.get('/conversation', (req, res) => {
      try {
        this.ConversationModel.find().then((conversations) => {
          res.status(200).json(conversations || []);
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] conversation -> ${err}`);
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
    this.showAll();
  }
};

export default Conversations;
