import mongoose from 'mongoose';
import mongo from '@boringcodes/utils/dist/mongo';
import errorHandler from '@boringcodes/utils/dist/errorHandler';
import logger from '@boringcodes/utils/dist/logger';

// declare env vars
const host = process.env.HOST || 'localhost';
const port = +process.env.PORT || 9000;

// connect mongo
mongo.connect({
  mongoose,
  options: { timestampsPlugin: true },
  cb: () => {
    // start app
    require('./app').default.listen(port, host, (err: Error) => {
      if (err) {
        throw err;
      }

      logger.info(`> App started at http://${host}:${port}`);
    });
  },
});

// handle unhandled promise
process.on('unhandledRejection', (err: Error) => {
  throw err;
});

// handle uncaught error and gracefully shutdown
process.on('uncaughtException', (err: Error) => {
  errorHandler.handle(err);
});
