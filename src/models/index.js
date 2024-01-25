// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Shoes, Home } = initSchema(schema);

export {
  Shoes,
  Home
};