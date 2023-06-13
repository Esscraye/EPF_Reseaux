import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  avatar: String,
  age: Number,
  city: String
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
