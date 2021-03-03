import { mergeTypeDefs } from '@graphql-tools/merge';
import userType from './user/user.typedefs'
import sampleType from './sample/sample.typedefs'

const types = [
  userType,
  sampleType
]

export default mergeTypeDefs(types,{ all: true });