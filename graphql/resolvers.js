import { mergeResolvers } from '@graphql-tools/merge';

import userResolver from './user/user.resolvers'
import sampleResolvers from './sample/sample.resolvers'

const resolvers = [
  userResolver,
  sampleResolvers,
];

export default mergeResolvers(resolvers);