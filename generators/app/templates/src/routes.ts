import { Router } from 'express';

import { Routes } from './components/types';

// TODO: import components for registering to router
// import things from './components/things';

const routes = (props: Routes) => {
  const router = Router();

  // TODO: register components to router
  // router.use(things.path, things.routes(props));

  return router;
};

export default routes;
