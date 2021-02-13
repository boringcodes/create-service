import {
  Sequelize,
  Model,
  ModelAttributes,
  ModelOptions,
  ModelCtor,
} from 'sequelize';
import logger from '@boringcodes/utils/logger';

import config from '../config/postgres';

// create sequelize
const sequelize = new Sequelize(config.uri, {
  username: config.user,
  password: config.password,
});

// connect postgres
const connect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();

    // sync all models
    await sequelize.sync({ force: true });

    logger.info('> Postgres connected');
  } catch (err) {
    logger.error('> Postgres failed to connect');

    throw err;
  }
};

// create postgres model
const createModel = <T extends Model, M extends ModelCtor<T>>(
  name: string,
  schema: ModelAttributes<T>,
  options?: ModelOptions,
): M => {
  return sequelize.define<T>(name, schema, options) as M;
};

export default { connect, createModel };
