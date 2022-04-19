import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { animationControls } from 'framer-motion';
import { useQuery } from "react-query"
import type { QueryObserverIdleResul } from "react-query"

interface Shiwakes {
    shiwakes: MiniShiwake[]
}

interface MiniShiwake {
    kariGrpName: string
    kariName: string
    kashiName: string
    kariKingaku: number
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

async function getSeisanHyou(): Promise<Shiwakes> {

    const  data = await client.request(query)
    return data

}

export function useSeisanHyou(): Shiwakes {
    const fallback = []
    const {data = fallback} = useQuery(queryKey, getSeisanHyou)
    //console.log(`"hook"` + data[0])
    return data

}
