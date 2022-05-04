import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { animationControls } from 'framer-motion';
import { useQuery } from "react-query"
// import type { QueryObserverIdleResul } from "react-query"

// interface Shiwakes {
//   shiwakes: MiniShiwake[]
// }

export type Shiwakes={
shiwakes:Shiwake[]
}

export type Shiwake = {
  id:number
  createdAt: number
  hasseiDate: number
  kariName: string
  kashiName: string
  kariKingaku: number
  tekiyou: string
}

const queryKey = 'shiwakes'

async function getSeisanHyou(): Promise<Shiwakes> {
  const endpoint = BASE_URL
  const client = new GraphQLClient(endpoint)
  const query = gql`
     {
       shiwakes {
         id
         hasseiDate
         createdAt
         kariName
         kashiName
         kariKingaku
         tekiyou
       }
     }
     `
  const data = await client.request(query)
  console.log(JSON.stringify(data, undefined, 2))
  return data
}

export function useSeisanHyou(): Shiwakes {
  const fallback = []
  const { data = fallback } = useQuery(queryKey, getSeisanHyou)
  //console.log(data)
  return data

}
