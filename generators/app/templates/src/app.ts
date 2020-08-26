import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { isDev } from '@boringcodes/utils';
import {
  health,
  handleNotFound,
  handleErrors,
} from '@boringcodes/utils/express';

import components from './components';

// initialize app
const app = express();
const dev = isDev();

// plug middleware
app.use(morgan(dev ? 'dev' : 'common'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(health());

// plug components
app.use(components.path, components.routes({ dev }));

// handle errors
app.use(handleNotFound);
app.use(handleErrors);

export default app;
