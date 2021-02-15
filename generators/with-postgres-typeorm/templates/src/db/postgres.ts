import { createConnection } from 'typeorm';
import logger from '@boringcodes/utils/logger';

import config from '../config/postgres';
// TODO: import models
// import Thing from '../components/things/model';

// connect postgres
const connect = async (): Promise<void> => {
  try {
    await createConnection({
      type: 'postgres',
      url: config.url,
      // TODO: register models to connection
      // entities: [Thing],
      synchronize: true,
    });

    logger.info('> Postgres connected');
  } catch (err) {
    logger.error('> Postgres failed to connect');

    throw err;
  }
};

export default { connect };
