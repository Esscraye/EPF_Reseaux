import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: String,
    campus: String,
    image_header: String,
    logo: String,
    description_asso: String,
    description_team: String,
    mail: String,
    phone: String,
    socialNetworks: {
      instagram: String,
      discord: String,
      twitter: String,
      facebook: String,
      linkedin: String
    }
  },
  {
    collection: 'assoc',
    minimize: false,
    versionKey: false
  }
).set('toJSON', {
  transform: (doc, ret) => {
    const retUpdated = ret;
    retUpdated.id = ret._id;

    delete retUpdated._id;

    return retUpdated;
  }
});

export default Schema;
