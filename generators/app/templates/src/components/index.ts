import { Router } from 'express';

// TODO: import components
// import things from './things';

interface RouteOptions {
  readonly dev: boolean;
}

const path = '/';

const routes = (_: RouteOptions): Router => {
  const router = Router();

  // TODO: register components to router
  // router.use(things.path, things.routes(_));

  return router;
};

export default { path, routes };
export { RouteOptions };
