import mongoose from 'mongoose';
import logger from '@boringcodes/utils/logger';

import config from '../config/mongo';
// TODO: import models
// import Thing from '../components/things/model';

// connect mongo
const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(config.url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      promiseLibrary: Promise,
    });

    // TODO: register models
    // mongoose.model(Thing.name, Thing.schema);

    logger.info('> Mongo connected');
  } catch (err) {
    logger.error('> Mongo failed to connect');

    throw err;
  }
};

export default { connect };
