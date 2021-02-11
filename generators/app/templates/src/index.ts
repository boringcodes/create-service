import http from 'http';
import { MyError } from '@boringcodes/utils/error';
import errorHandler from '@boringcodes/utils/errorHandler';
import logger from '@boringcodes/utils/logger';

import app from './app';
import config from './config';

// create server
const server = http.createServer(app);

// start server
server.listen(config.port, config.host, () => {
  logger.info(`> Server started at http://${config.host}:${config.port}`);
});

// handle unhandled promise
process.on('unhandledRejection', (err: MyError) => {
  throw err;
});

// handle uncaught error and gracefully shutdown
process.on('uncaughtException', (err: MyError) => {
  errorHandler.handle(err);
});
