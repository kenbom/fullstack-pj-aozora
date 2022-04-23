import React, { VFC } from 'react'
import { Box } from "@chakra-ui/react";
import { useRecoilState } from 'recoil';
import {strdGrpCd} from '../../store/strdGrpCd'
import {strdMenuItem} from '../../store/strdGrpCd'
import type {StrdMenuItem} from '../../store/strdGrpCd'



type shiwakeTourokuProps = {
  name: string
}

export const ShiwakeTouroku: VFC<shiwakeTourokuProps> = (props) => {
  const atomGrpCd = useRecoilState(strdGrpCd)
  const atomMenuItem = useRecoilState(strdMenuItem)
  console.log(atomMenuItem)
  const [recoiledMenuItem]=atomMenuItem
  console.log(recoiledMenuItem)
  // console.log(recoiledMenuItem.kamokuMei)
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
      {/* {props.name}{atomGrpCd} */}
      {props.name}
    </Box>
  );
}
