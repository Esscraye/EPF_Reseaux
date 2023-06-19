import AssocModel from '../models/assoc.mjs';
import authToken from '../hook/auth.mjs';

const Assoc = class Assoc {
  constructor(app, connect) {
    this.app = app;
    this.AssocModel = connect.model('Assoc', AssocModel);

    this.run();
  }

  create() {
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

  showAll() {
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

  showByID() {
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

  run() {
    this.create();
    this.showAll();
    this.showByID();
  }
};

export default Assoc;
