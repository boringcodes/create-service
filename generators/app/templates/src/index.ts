import { MyError } from '@boringcodes/utils/error';
import errorHandler from '@boringcodes/utils/errorHandler';
import logger from '@boringcodes/utils/logger';

import config from './config';
import app from './app';

// start app
app.listen(config.port, config.host, (err: MyError) => {
  if (err !== null && err !== undefined) {
    throw err;
  }

  logger.info(`> App started at http://${config.host}:${config.port}`);
});

// handle unhandled promise
process.on('unhandledRejection', (err: MyError) => {
  throw err;
});

// handle uncaught error and gracefully shutdown
process.on('uncaughtException', (err: MyError) => {
  errorHandler.handle(err);
});
