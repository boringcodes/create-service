import mongoose from 'mongoose';
import logger from '@boringcodes/utils/logger';

import config from '../config/mongo';

mongoose.set('bufferCommands', false);

const connect = (): void => {
  mongoose
    .connect(config.uri, {
      user: config.user,
      pass: config.password,
      dbName: config.dbName,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      promiseLibrary: Promise,
    })
    .then(() => {
      logger.info('> Mongo connected');
    })
    .catch((err) => {
      logger.error('> Mongo failed to connect');

      throw err;
    });
};

export default { connect };
