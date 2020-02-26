import { Router } from 'express';
// tslint:disable-next-line:max-line-length
import { validateQuery, validateListQuery } from '@boringcodes/utils/dist/express';

import { PLURAL_NAME } from './constants';
import { validateCreate, validateUpdate } from './middleware';
import { list, create, count, getById, get, update, del } from './controller';

import { RoutesProps } from '../types';

const path = `/${PLURAL_NAME}`;

const routes = (_: RoutesProps) => {
  const router = Router();

  router.param('id', getById);

  router.route('/')
    .get(validateListQuery, list)
    .post(validateCreate, create);

  router.route('/count')
    .get(validateListQuery, count);

  router.route('/:id')
    .get(validateQuery, get)
    .put(validateUpdate, update)
    .delete(del);

  return router;
};

export default { path, routes };
