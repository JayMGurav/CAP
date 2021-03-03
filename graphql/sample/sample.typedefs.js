import { gql } from 'apollo-server-micro'

const sampleTypeDef = gql`
  type Query {
    sayHello: String
  }
`

export default sampleTypeDef;