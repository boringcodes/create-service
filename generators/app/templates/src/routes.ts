import { Router } from 'express';

import { RoutesProps } from './components/types';
import things from './components/things';

const routes = (props: RoutesProps) => {
  const router = Router();

  // register components
  router.use(things.path, things.routes(props));

  return router;
};

export default routes;
export { RoutesProps };
