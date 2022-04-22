import React, { VFC } from 'react'
import { Box } from "@chakra-ui/react";
import { useRecoilState } from 'recoil';
import {strdGrpCd} from '../../store/strdGrpCd'


type shiwakeTourokuProps = {
  name: string
}

export const ShiwakeTouroku: VFC<shiwakeTourokuProps> = (props) => {
  const atomGrpCd = useRecoilState(strdGrpCd)
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
      {props.name}{atomGrpCd}
    </Box>
  );
}
