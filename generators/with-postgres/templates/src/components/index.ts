import { Router } from 'express';

import { RouteOptions } from './types';
// TODO: import components
// import things from './things';

const path = '/';

const routes = (_: RouteOptions): Router => {
  const router = Router();

  // TODO: plug components to router
  // router.use(things.path, things.routes(_));

  return router;
};

export default { path, routes };
