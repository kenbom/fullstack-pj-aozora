import React, { VFC, useState } from "react";
import { Box, Button, HStack, Input, VStack, Center } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdStates";
import { strdShiwakeData } from "../../store/strdStates";
import { Grid, GridItem } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";

export const ShiwakeRight = () => {
  const [atomShiwakeData, setAtomShiwakeData] = useRecoilState(strdShiwakeData);
  const [kingaku, setKingaku] = useState("");
  const changeKingaku = (e: any) => {
    setKingaku(e.target.value);
  };
  return (
    <>
      <GridItem rowSpan={3} colSpan={2} textAlign="center">
        <HStack spacing="8px">
          <VStack w="50%">
            <Center w="80%" h="40px">
              <Box>借方：{atomShiwakeData.kariKamokuMei}</Box>
            </Center>
            <Box color="gray.300" fontSize="sm" w="100%" h="35px" pb={1} pt={2}>
              <p>{kingaku}</p>
            </Box>
          </VStack>
          <VStack w="50%">
            <Center w="80%" h="40px" bg="cyan.50">
              貸方：{atomShiwakeData.kashiKamokuMei}
            </Center>
            <Box>
              <Input
                type="text"
                value={kingaku}
                placeholder="金額を入力してください"
                fontSize="sm"
                w="100%"
                onChange={changeKingaku}
              />
            </Box>
          </VStack>
        </HStack>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Button w="90%" mt={2} pb={1} color="gray.700">
          登録
        </Button>
      </GridItem>
    </>
  );
};
