import { Router } from 'express';

import { Routes } from './components/types';

// TODO: import components for registering to router
// import newComponents from './components/newComponents';

const routes = (props: Routes) => {
  const router = Router();

  // TODO: register components to router
  // router.use(newComponents.path, newComponents.routes(props));

  return router;
};

export default routes;
