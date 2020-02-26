import mongoose, { Schema, Model as MongooseModel } from 'mongoose';
import { Thing } from './type';
import { CustomMongooseDocument } from '@boringcodes/utils/dist/mongoose';

import { NAME } from './constants';

type Document = CustomMongooseDocument & Thing;
type Model = MongooseModel<Document>;

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

export default mongoose.model<Document, Model>(NAME, schema);
export { Model, Document };
