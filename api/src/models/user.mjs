import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  image: String,
  password: String,
  email: String,
  description: String,
  role: String,
  assos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assoc'
  },
  {
    roleAssoc: String
  }]
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

const GroupSchema = new mongoose.Schema({
  namegroup: String,
  typegroup: String, // (classe, promo)
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  collection: 'groups',
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

export default { UserSchema, GroupSchema };
