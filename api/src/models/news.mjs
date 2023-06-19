import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: String,
  text: String,
  img: {
    format: { type: String, default: 'jpeg' }
  },
  idAsso: String
}, {
  collection: 'news',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    const retUpdated = ret;
    retUpdated.id = ret._id;

    delete retUpdated._id;

    return retUpdated;
  }
});

export default Schema;
