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

  run() {
    this.create();
  }
};

export default Assoc;
