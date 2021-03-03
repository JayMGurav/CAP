import { gql } from 'apollo-server-micro'


const userTypeDefs = gql`
  type User {
    id: ID!
    fullname: String!
  }

  type Query {
    users: [User!]
    # user: User
  }

  type Mutation {
    addUser(fullname: String!): User!
  }
`


export default userTypeDefs;