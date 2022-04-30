import React, { VFC, useState } from "react";
import { Box, Button, HStack, Stack, Input } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem, strdShiwakeData } from "../../store/strdGrpCd";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdGrpCd";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";

export const ShiwakeBoth = () => {
  const atomGrpCd = useRecoilState(strdGrpCd);
  const [atomMenuItem, setAtomMenuItem] = useRecoilState(strdMenuItem);
  const [atomShiwakeData, setAtomShiwakeData] = useRecoilState(strdShiwakeData);
  return (
    <>
      <GridItem
        rowSpan={3}
        colSpan={2}
        // h="100%"
        // w="100%"
        border="1px"
        // rounded="2xl"
        color="gray.500"
        textAlign="center"
      >
        <HStack spacing="8px">
          <Box w="50%" h="140px">
            借方：{atomShiwakeData.kariKamokuMei}
          </Box>
          <Box w="50%" h="140px">
            貸方：{atomShiwakeData.kashiKamokuMei}
          </Box>
        </HStack>
      </GridItem>
      <GridItem
        // rowSpan={1}
        colSpan={2}
        // h="100%"
        // w="100%"
        border="1px"
        // rounded="2xl"
        color="gray.100"
        textAlign="center"
      ></GridItem>
    </>
  );
};
