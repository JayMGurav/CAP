import {gql} from "@apollo/client";


export const USERS = gql`
  query GetUsers {
    users{
      id
      fullname
    }
  }
`;

export const IS_USER = gql`
  query CheckIsUser($email: String!) {
    isUser(email: $email)
  }
`