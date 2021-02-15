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

const dev = isDev();

// create app
const app = express();

// plug middleware
app.use(morgan(dev ? 'dev' : 'common'));
app.use(health());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// plug components
app.use(components.path, components.routes({ dev }));

// handle errors
app.use(handleNotFound);
app.use(handleErrors);

export default app;
