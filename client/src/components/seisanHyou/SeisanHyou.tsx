import React, { ReactElement, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { useSeisanHyou } from "./hooks/useSeisanHyou"
import { request, gql } from "graphql-request";
import { BASE_URL } from "../../config/constants";

interface SeisanHyouType {
  name: String
}



export const SeisanHyou: VFC<SeisanHyouType> = (props) => {
  const seisanHyouData = useSeisanHyou()
  console.log(`"tes"` + seisanHyouData)

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
      {/* {seisanHyouData.shiwakes[0].kariGrpName} */}
    </Box>
  );
};
