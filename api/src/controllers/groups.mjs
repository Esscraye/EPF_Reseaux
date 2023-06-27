import GroupModel from '../models/group.mjs';

const Group = class Group {
  constructor(app, connect) {
    this.app = app;
    this.GroupModel = connect.model('Group', GroupModel);

    this.run();
  }

  deleteById() {
    this.app.delete('/group/', (req, res) => {
      const idg = req.query.idgroup;
      const nameg = req.query.namegroup;
      if (typeof idg !== 'string' || typeof nameg !== 'string') {
        res.status(400).json({ status: 'error', message: 'Bad request' });
        return;
      }
      try {
        this.GroupModel.findOneAndDelete({ idgroup: idg, namegroup: nameg })
          .then((group) => {
            res.status(200).json(group || {});
          })
          .catch(() => {
            res.status(500).json({
              code: 500,
              message: 'Internal Server error'
            });
          });
      } catch (err) {
        console.error(`[ERROR] groups/:id -> ${err}`);
        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  showById() {
    this.app.get('/group/:id', (req, res) => {
      try {
        this.GroupModel.findById(req.params.id).then((group) => {
          res.status(200).json(group || {});
        }).catch(() => {
          res.status(500).json({
            code: 500,
            message: 'Internal Server error'
          });
        });
      } catch (err) {
        console.error(`[ERROR] groups/:id -> ${err}`);

        res.status(400).json({
          code: 400,
          message: 'Bad request'
        });
      }
    });
  }

  create() {
    this.app.post('/group/', (req, res) => {
      try {
        const groupModel = new this.GroupModel(req.body);

        groupModel.save().then((group) => {
          res.status(200).json(group || {});
        }).catch(() => {
          res.status(200).json({});
        });
      } catch (err) {
        console.error(`[ERROR] group/create -> ${err}`);

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

export default Group;
