
import { gql } from "apollo-server"

export const typeDefs = gql`
type Query{
    users: [User!]!
    hello: String
    kamokus: [Kamoku!]!
}

type User {
    userName: String
    mail: String
}

type Kamoku {
   kamokuName: String
   kariKubun: Boolean
}

`