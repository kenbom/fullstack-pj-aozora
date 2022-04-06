import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    hello: String
    kamokus: [Kamoku!]!
  }

  type Mutation {
    userCreate(input: UserCreateArgs): UserPayload
  }

  type UserPayload {
    userErrors: [userError]
    user: User
  }

  type userError {
    message: String
  }

  input UserCreateArgs {
    userName: String
    mail: String
  }

  type User {
    id: ID!
    userName: String
    mail: String
  }

  type Kamoku {
    kamokuCd: ID!
    kamokuName: String
    kariKubun: Boolean
  }
`;
