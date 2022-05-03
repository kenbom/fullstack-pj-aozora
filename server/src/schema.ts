import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    hello: String
    kamokus: [Kamoku!]!
    shiwakes: [Shiwake!]!
  }

  type Mutation {
    signup(credentials: CredentialsInput, userName: String ): AuthPayload
    signin(credentials: CredentialsInput): AuthPayload
    shiwakeCreate(input: ShiwakeCreateArgs): ShiwakePayload
  }

  type AuthPayload {
    userErrors: [userError]
    token: String
  }

  type ShiwakePayload {
    userErrors: [userError]
    shiwake: Shiwake
  }

  type userError {
    message: String
  }

  input UserCreateArgs {
    userName: String
    mail: String
    password: String!
  }

  input ShiwakeCreateArgs {
    torihikiPtnCd: Int
    torihikiName: String
    kariCd: Int
    kariName: String
    kariKingaku: Int
    kariGrpCd: Int
    kariGrpName: String
    kariKubun: Boolean
    kashiCd: Int
    kashiName: String
    kashiKingaku: Int
    kashiGrpCd: Int
    kashiGrpName: String
    kashiKubun: Boolean
    tekiyou: String
    hasseiDate: String
  }

  type User {
    id: ID!
    userName: String
    mail: String
    password: String!
  }

  type Kamoku {
    kamokuCd: ID!
    kamokuName: String
    kariKubun: Boolean
  }

  type Shiwake {
    id: ID!
    torihikiPtnCd: Int
    torihikiName: String
    kariCd: Int!
    kariName: String!
    kariKingaku: Int!
    kariGrpCd: Int
    kariGrpName: String
    kariKubun: Boolean
    kashiCd: Int!
    kashiName: String!
    kashiKingaku: Int!
    kashiGrpCd: Int
    kashiGrpName: String
    kashiKubun: Boolean
    tekiyou: String
    hasseiDate: String!
    userId: Int!
  }

  input CredentialsInput {
    mail: String!
    password: String!
  }
`;
