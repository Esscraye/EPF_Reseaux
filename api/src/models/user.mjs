import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  image: String,
  password: String,
  email: String,
  description: String,
  promo: String,
  class: String,
  grouptp: String
}, {
  collection: 'users',
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
