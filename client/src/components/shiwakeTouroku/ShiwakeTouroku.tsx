import React, {VFC} from 'react'
import { Box } from "@chakra-ui/react";
import {useTestFunc} from "./Test"

type shiwakeTourokuProps = {
  name: string
}

export const ShiwakeTouroku:VFC<shiwakeTourokuProps> = (props) => {
  const test = useTestFunc()
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
      {props.name}
    </Box>
  );
}
