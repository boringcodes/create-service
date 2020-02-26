import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { isDev } from '@boringcodes/utils/dist';
import { handleNotFound, handleErrors } from '@boringcodes/utils/dist/express';

import routes from './routes';

// initialize app
const app = express();
const dev = isDev();

// plug middleware
app.use(morgan(dev ? 'dev' : 'common'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// plug routes
app.use(routes({ dev }));

// handle errors
app.use(handleNotFound);
app.use(handleErrors);

export default app;
