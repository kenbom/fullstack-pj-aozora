import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    hello: String
    kamokus: [Kamoku!]!
  }

  type Mutation {
    userCreate(input:UserInput): User
  }

  input UserInput {
    userName: String="nono"
    mail: String="nono@uso"
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
