import { Router } from 'express';

import { Routes } from '../types';
import { PLURAL_NAME } from './constants';
import { list, count, create, getById, get, update, del } from './controller';

const path = `/${PLURAL_NAME}`;

const routes = (_: Routes) => {
  const router = Router();

  router.param('id', getById);

  router
    .route('/')
    .get(list)
    .post(create);

  router
    .route('/count')
    .get(count);

  router
    .route('/:id')
    .get(get)
    .put(update)
    .delete(del);

  return router;
};

export default { path, routes };
