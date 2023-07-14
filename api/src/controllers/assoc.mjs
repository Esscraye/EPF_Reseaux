import Models from '../models/assoc.mjs';
import authToken from '../hook/auth.mjs';

const { AssocSchema, newsSchema } = Models;

const Assoc = class Assoc {
  constructor(app, connect) {
    this.app = app;
    this.AssocModel = connect.model('Assoc', AssocSchema);
    this.NewsModel = connect.model('News', newsSchema);
    this.run();
  }

  createAssoc() {
    this.app.post('/assoc/', authToken, (req, res) => {
      try {
        const assocModel = new this.AssocModel(req.body);

        assocModel.save().then((assoc) => {
          res.status(200).json(assoc || {});
        }).catch(() => {
          res.status(200).json({ oui: 'test' });
        });
      } catch (err) {
        console.error(`[ERROR] assoc/create -> ${err}`);

        res.status(400).json({
          code: 400,
          message: err
        });
      }
    });
  }

  showAllAssoc() {
    this.app.get('/assoc', (req, res) => {
      try {
        this.AssocModel.find().then((associations) => {
          res.status(200).json(associations || []);
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] /assoc -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showByIDAssoc() {
    this.app.get('/assoc/:id', (req, res) => {
      try {
        this.AssocModel.findById(req.params.id).then((association) => {
          res.status(200).json(association || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] assoc/:id -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  deleteByIdAssoc() {
    this.app.delete('/assoc/:id', (req, res) => {
      try {
        this.AssocModel.findByIdAndDelete(req.params.id).then((association) => {
          res.status(200).json(association || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] assoc/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  updateAssoc() {
    this.app.put('/assoc/:id', authToken, (req, res) => {
      try {
        const { id } = req.params;
        const {
          name, campus, logo, descriptionAsso, descriptionTeam, mail, phone, socialNetworks
        } = req.body;
        if (typeof name !== 'string' || typeof campus !== 'string' || typeof logo !== 'string'
                || typeof descriptionAsso !== 'string' || typeof descriptionTeam !== 'string'
                || typeof mail !== 'string' || typeof phone !== 'string'
                || !Array.isArray(socialNetworks)) {
          res.status(400).json({ status: 400, message: 'Bad type element' });
          return;
        }
        this.AssocModel.findByIdAndUpdate(id, {
          name,
          campus,
          logo,
          descriptionAsso,
          descriptionTeam,
          mail,
          phone,
          socialNetworks
        }).then((assoc) => {
          res.status(200).json(assoc || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] assoc/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  deleteByIdNews() {
    this.app.delete('/news/:id', (req, res) => {
      try {
        this.NewsModel.findByIdAndDelete(req.params.id).then((news) => {
          res.status(200).json(news || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] newss/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showByIdNews() {
    this.app.get('/news/:id', (req, res) => {
      try {
        this.NewsModel.findById(req.params.id).then((news) => {
          res.status(200).json(news || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] newss/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  createNews() {
    this.app.post('/news/', (req, res) => {
      try {
        const newsModel = new this.NewsModel(req.body);

        newsModel.save().then((news) => {
          res.status(200).json(news || {});
        }).catch(() => {
          res.status(200).json({});
        });
      } catch (err) {
        console.error(`[ERROR] newss/create -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  updateNews() {
    this.app.put('/news/:id', (req, res) => {
      try {
        const { id } = req.params;
        const {
          text,
          img,
          title
        } = req.body;
        if (typeof text !== 'string' || typeof img !== 'string' || typeof title !== 'string') {
          res.status(400).json({ status: 400, message: 'Bad type element' });
          return;
        }
        this.NewsModel.findByIdAndUpdate(id, {
          text,
          img,
          title
        }).then((news) => {
          res.status(200).json(news || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] newss/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  recupNews() {
    this.app.get('/news', (req, res) => {
      try {
        this.NewsModel.find().then((newss) => {
          res.status(200).json(newss || []);
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] newss/ -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showAllMessageByConversationId() {
    this.app.get('/message/:conversationId', (req, res) => {
      try {
        this.MessageModel.find().populate({
          path: 'fromDiscussion',
          match: { _id: req.params.conversationId },
          select: 'name'
        }).populate({
          path: 'author',
          select: 'firstname lastname'
        })
          .then((messages) => messages.filter((message) => message.fromDiscussion !== null))
          .then((messages) => {
            res.status(200).json(messages || []);
          })
          .catch(() => {
            res.status(500).json({
              code: 500,
              message: `Internal Server error + ${res}`
            });
          });
      } catch (err) {
        console.error(`[ERROR] message/:conversationId -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  run() {
    this.createAssoc();
    this.showAllAssoc();
    this.showByIDAssoc();
    this.deleteByIdAssoc();
    this.updateAssoc();
    this.createNews();
    this.showByIdNews();
    this.deleteByIdNews();
    this.recupNews();
    this.updateNews();
  }
};

export default Assoc;
