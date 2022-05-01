import React, { VFC, useState } from "react";
import { Box, Button, HStack, Stack, Input, VStack } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem, strdShiwakeData } from "../../store/strdGrpCd";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdGrpCd";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";

export const ShiwakeLeft = () => {
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
                    <VStack w="50%">
                        <Box w="100%" h="40px" bg="yellow.200">
                            借方：{atomShiwakeData.kariKamokuMei}
                        </Box>
                        <Box>
                            <Input
                                placeholder="金額を入力してください"
                                fontSize="sm"
                                w="100%"
                            />
                        </Box>
                    </VStack>
                    <VStack w="50%">
                        <Box w="100%" h="40px" bg="tomato">
                            貸方：{atomShiwakeData.kashiKamokuMei}
                        </Box>
                        <Box>
                            <Input
                                placeholder=""
                                fontSize="sm"
                                isDisabled={true}
                                w="100%" 
                            />
                        </Box>
                    </VStack>
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
