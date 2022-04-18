import React, { VFC } from "react";
import { Box } from "@chakra-ui/react";

export type kamokuMenuProps = {
  name: string,
  flug: boolean,
}

export const KamokuMenu: VFC<kamokuMenuProps> = (props) => {
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