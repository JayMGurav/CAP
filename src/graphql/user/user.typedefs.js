import { gql } from 'apollo-server-micro'


const userTypeDefs = gql`
  type User {
    id: ID!
    fullname: String!
    email: String!
    summary: String
  }

  type Query {
    users: [User!]
    me(): User!
    isUser(email:String!): Boolean!
  }

  type Mutation {
    addUser(fullname: String!, email: String!, summary: String): User!
  }
`


export default userTypeDefs;