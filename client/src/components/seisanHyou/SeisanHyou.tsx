import React, { ReactElement, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { useSeisanHyou } from "./hooks/useSeisanHyou"
import { request, gql } from "graphql-request";
import { BASE_URL } from "../../config/constants";

interface SeisanHyouType {
  name: String
}



export const SeisanHyou: VFC<SeisanHyouType> = (props) => {
  const shiwakesData = useSeisanHyou()
  console.log(`"tes"` + shiwakesData)
  const modifiedData = (JSON.stringify(shiwakesData, undefined, 2))
  const dataArray:Array<object> = shiwakesData.shiwakes
  const dataArrayTwo = dataArray?.map((item)=>{item.kariGrpName})
  return (
    <Box
      //m={4}
      height="100%"
      width="100%"
      border="1px"
      rounded="2xl"
      color="gray.700"
      fontSize="sm"
      textAlign="center"
      overflow="scroll"
    >
      {props.name}
      <p>try</p>
      {modifiedData}
      {JSON.stringify(dataArray, undefined, 2)}
      {JSON.stringify(dataArray, undefined, 2)}
      {JSON.stringify(dataArray, undefined, 2)}
      {JSON.stringify(dataArray, undefined, 2)}
      {shiwakesData.shiwakes?.map((item) => (
        <p>{item.kariGrpName}</p>
      ))}
    </Box>
  );
};
