import mongoose from 'mongoose';
import logger from '@boringcodes/utils/logger';

import config from '../config/mongo';

// connect mongo
const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(config.uri, {
      user: config.user,
      pass: config.password,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      promiseLibrary: Promise,
    });

    logger.info('> Mongo connected');
  } catch (err) {
    logger.error('> Mongo failed to connect');

    throw err;
  }
};

// create mongo model
const createModel = mongoose.model;

export default { connect, createModel };
