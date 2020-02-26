import * as yup from 'yup';
import { validateBody } from '@boringcodes/utils/dist/express';

const baseSchema = {
  id: yup.string(),
  name: yup.string().trim().required(),
  description: yup.string().trim(),
};

const validateCreate = validateBody((v: any) => {
  // strip out id
  const { id: _, ...rest } = yup.object(baseSchema).noUnknown().validateSync(v);

  return rest;
});

const updateSchema = {
  ...baseSchema,
  name: yup.string().trim(),
  description: yup.string().trim(),
};
const validateUpdate = validateBody((v: any) => {
  // strip out id
  const { id: _, ...rest } = yup.object(updateSchema).noUnknown().validateSync(v);

  return rest;
});

export {
  validateCreate,
  validateUpdate,
};
