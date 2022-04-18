import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";

interface MiniShiwake {
    kamokuCd: number,
    kamoku: string,
    kingaku: number,
}

async function getSeisanHyou() {
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
    const data = await client.request(query)
    console.log(data)

    return data
}



export const useSeisanHyou = () => {

    const [miniShiwake, setMiniShiwake] = useState<MiniShiwake>({ kamokuCd: 3, kamoku: "費用", kingaku: 10000 });

    const seisanHyouData = getSeisanHyou()

    return (
        seisanHyouData
    )
}
