import mongoose from 'mongoose';

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

export default newsSchema;
