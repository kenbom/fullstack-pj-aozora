import React, { ReactElement, useEffect} from "react";
import { Box } from "@chakra-ui/react";
import { request, gql } from "graphql-request";
import { BASE_URL } from "../../config/constants";
import { useState } from "react";
import type { VFC } from "react"

export type kamokuMenuProps = {
  name: string,
  flug: boolean,
}

interface MiniShiwake{
  kamokuCd: number,
  kamoku: string,
  kingaku: number,
}

export const KamokuMenu:VFC<kamokuMenuProps> = (props:kamokuMenuProps) => {
  const [miniShiwake, setMiniShiwake] = useState<MiniShiwake>({kamokuCd:3,kamoku:"費用",kingaku:10000});
  useEffect(() => {setMiniShiwake({kamokuCd:5000, kamoku:"売上", kingaku:1000000});}, []);
  const query = gql`
    {
      shiwakes {
        kariGrpName
        kariName
        kashiName
        kariKingaku
      }
    }
    `;

  request(BASE_URL, query).then((data) => console.log(data));

  return (
    <Box
      //m={4}
      height="100%"
      width="100%"
      border="1px"
      rounded="2xl"
      color="gray.300"
      textAlign="center"
    >
      {props.name}<p>{miniShiwake.kamokuCd}</p>
    </Box>
  );
}