import {gql} from "@apollo/client";


export const ADD_USER = gql`
mutation AddUser($email: String!, $fullname: String!, $summary: String) {
  addUser(email: $email, fullname: $fullname, summary: $summary){
    id
    fullname,
    summary
  }
}
`