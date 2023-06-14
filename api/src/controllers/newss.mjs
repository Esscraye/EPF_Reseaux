import NewsModel from '../models/news.mjs';

const News = class News {
  constructor(app, connect) {
    this.app = app;
    this.NewsModel = connect.model('News', NewsModel);

    this.run();
  }

  deleteById() {
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

  showById() {
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

  create() {
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

  run() {
    this.create();
    this.showById();
    this.deleteById();
  }
};

export default News;
