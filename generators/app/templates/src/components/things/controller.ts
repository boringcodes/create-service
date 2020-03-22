import { Request as ExpressRequest, Response, NextFunction } from 'express';
import {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes';
import { HttpError } from '@boringcodes/utils/error';

import { NAME } from './constants';

interface Request extends ExpressRequest {
  readonly [NAME]: any;
}

const list = async (_: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: list things
    const things = [];

    res.send(things);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const count = async (_: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: count things
    const count = 0;

    res.send({ count });
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const create = async (_: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: create thing
    const thing = {};

    res.send(thing);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const getById = async (req: Request, _: Response, next: NextFunction) => {
  if (!req.params.id) {
    next(new HttpError(BAD_REQUEST, 'Invalid resource Id'));

    return;
  }

  try {
    // TODO: get thing
    const thing = {};

    if (!thing) {
      next(new HttpError(NOT_FOUND, 'Resource not found'));

      return;
    }
    // tslint:disable-next-line:no-object-mutation
    Object.assign(req, { [NAME]: thing });

    next();
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

const get = (req: Request, res: Response) => {
  res.send(req[NAME]);
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: update thing
    const thing = req[NAME];

    res.send(thing);
  } catch (err) {
    next(err);
  }
};

const del = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: delete thing
    const thing = req[NAME];

    res.send(thing);
  } catch (err) {
    next(new HttpError(err.code || INTERNAL_SERVER_ERROR, err));
  }
};

export { list, create, count, getById, get, update, del };
