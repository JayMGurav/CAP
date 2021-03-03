import { makeExecutableSchema } from '@graphql-tools/schema';

import typeDefs from './typedefs'
import resolvers from './resolvers'

const gqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default gqlSchema;