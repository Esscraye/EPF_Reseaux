import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  participants: [{
    email: { type: String, required: true }
  }],
  type: { type: String, required: true },
  name: String,
  icone: String,
  censure: Boolean,
  convId: String
}, {
  collection: 'conversations',
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
