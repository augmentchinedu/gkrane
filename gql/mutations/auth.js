import { gql } from "graphql-request";

export const SIGNUP = gql`
  mutation SignUp(
    $appName: String!
    $username: String!
    $fullname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      input: {
        appName: $appName
        username: $username
        fullname: $fullname
        email: $email
        password: $password
      }
    ) {
      token
      user {
        id
        username
        fullname
        email
      }
    }
  }
`;

export const SIGNIN = gql`
  mutation Signin($identifier: String!, $appName: String!, $password: String!) {
    signin(
      input: { identifier: $identifier, appName: $appName, password: $password }
    ) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
