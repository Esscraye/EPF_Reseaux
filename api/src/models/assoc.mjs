import mongoose from 'mongoose';

const AssocSchema = new mongoose.Schema(
  {
    name: String,
    campus: String,
    image_header: String,
    logo: String,
    descriptionAsso: String,
    descriptionTeam: String,
    mail: String,
    phone: String,
    funder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
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

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      format: {
        type: String,
        default: 'jpeg'
      }
    },
    idAsso: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  {
    collection: 'news',
    minimize: false,
    versionKey: false
  }
);

newsSchema.set('toJSON', {
  transform: (doc, ret) => {
    const retUpdated = ret;
    retUpdated.id = ret._id;

    delete retUpdated._id;

    return retUpdated;
  }
});

export default { AssocSchema, newsSchema };
