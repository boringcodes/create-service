import { Model, ModelCtor, Sequelize } from 'sequelize';
import logger from '@boringcodes/utils/logger';

import config from '../config/postgres';
// TODO: import models
// import Thing from '../components/things/model';

// create sequelize
const sequelize = new Sequelize(config.uri);

// connect postgres
const connect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();

    // TODO: register models to connection
    // sequelize.define(Thing.name, Thing.attributes, Thing.options);

    // sync all models
    await sequelize.sync({ force: true });

    logger.info('> Postgres connected');
  } catch (err) {
    logger.error('> Postgres failed to connect');

    throw err;
  }
};

// get model
const getModel = <T extends Model>({
  name,
}: {
  readonly name: string;
}): ModelCtor<T> => {
  return sequelize.models[name] as ModelCtor<T>;
};

export default { connect, getModel };
