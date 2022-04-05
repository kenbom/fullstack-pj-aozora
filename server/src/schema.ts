import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    hello: String
    kamokus: [Kamoku!]!
  }

  type Mutation {
    userCreate(user: UserInput!): User
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

  input UserInput {
    userName: String
    mail: String
  }
`;
