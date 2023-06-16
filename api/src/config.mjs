import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    type: 'development',
    port: 3000,
    mongodb: process.env.MONGODB_URL
  },
  production: {
    type: 'production',
    port: 3000,
    mongodb: process.env.MONGODB_URL
  }
};
