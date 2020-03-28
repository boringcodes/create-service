import errorHandler from '@boringcodes/utils/errorHandler';
import logger from '@boringcodes/utils/logger';

import app from './app';

// declare env vars
const host =
  process.env.HOST !== null && process.env.HOST !== undefined
    ? process.env.HOST
    : 'localhost';
const port =
  process.env.PORT !== null && process.env.PORT !== undefined
    ? +process.env.PORT
    : 9000;

// start app
app.listen(port, host, (err: Error) => {
  if (err !== null && err !== undefined) {
    throw err;
  }

  logger.info(`> App started at http://${host}:${port}`);
});

// handle unhandled promise
process.on('unhandledRejection', (err: Error) => {
  throw err;
});

// handle uncaught error and gracefully shutdown
process.on('uncaughtException', (err: Error) => {
  errorHandler.handle(err);
});
