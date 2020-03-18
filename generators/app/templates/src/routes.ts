import { Router } from 'express';

import { Routes } from './components/types';
import things from './components/things';

const routes = (props: Routes) => {
  const router = Router();

  // register components
  router.use(things.path, things.routes(props));

  return router;
};

export default routes;
