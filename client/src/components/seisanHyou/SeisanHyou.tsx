import React, { ReactElement, VFC } from "react";
import { Box } from "@chakra-ui/layout";
interface SeisanHyouType{
  name:String
}
export const SeisanHyou = (props:SeisanHyouType):ReactElement => {
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
};
