import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { animationControls } from 'framer-motion';
import { useQuery } from "react-query"

interface MiniShiwake {
  kamokuCd: number,
  kamoku: string,
  kingaku: number,
}

const endpoint = BASE_URL
const client = new GraphQLClient(endpoint)
const query = gql`
     {
       shiwakes {
         kariGrpName
         kariName
         kashiName
         kariKingaku
       }
     }
     `
const queryKey = 'shiwakes'

async function getSeisanHyou(): Promise<MiniShiwake[]> {

  const data = await client.request(query)


  return data

}

export function useSeisanHyou(): MiniShiwake[] {
  //const fallback = ["testone", "testtwo"]
  const data = useQuery(queryKey, getSeisanHyou)
  //console.log(`"hook"` + data[0])
  return data

}
