import { gql } from 'apollo-boost';

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $userName: String!
    $firstName: String
    $lastName: String
  ) {
    createUser(
      email: $email
      userName: $userName
      firstName: $firstName
      lastName: $lastName
    )
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $loginSecret: String!) {
    confirmSecret(email: $email, loginSecret: $loginSecret)
  }
`;
