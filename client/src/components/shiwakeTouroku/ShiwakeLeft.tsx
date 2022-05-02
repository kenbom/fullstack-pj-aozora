import React, { VFC, useState, useEffect } from "react";
import {
    Box,
    Button,
    HStack,
    Stack,
    Input,
    VStack,
    Center,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdStates";
import { strdMenuItem, strdShiwakeData } from "../../store/strdStates";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdStates";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";

export const ShiwakeLeft = () => {
    const atomGrpCd = useRecoilState(strdGrpCd);
    const [atomMenuItem, setAtomMenuItem] = useRecoilState(strdMenuItem);
    const [atomShiwakeData, setAtomShiwakeData] = useRecoilState(strdShiwakeData);
    const [kingaku, setKingaku] = useState("")
    const changeKingaku = (e: any) => { setKingaku(e.target.value); useEffect(()=>setMirrorKingaku(kingaku),[])}
    const [mirrorKingaku, setMirrorKingaku]= useState("")
    //   function getKingaku(){useEffect(()=> kingaku, [])}
    return (
        <>
            <GridItem
                rowSpan={3}
                colSpan={2}
                // h="100%"
                // w="100%"
                // border="1px"
                // rounded="2xl"
                // color="gray.500"
                textAlign="center"
            >
                <HStack spacing="8px">
                    <VStack w="50%">
                        <Center w="80%" h="40px" bg="cyan.50">
                            借方：{atomShiwakeData.kariKamokuMei}
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
                    <VStack w="50%">
                        <Center w="80%" h="40px">
                            貸方：{atomShiwakeData.kashiKamokuMei}
                        </Center>
                        <Box>
                            <Input color="gray.300" fontSize="sm" w="100%" >{mirrorKingaku}</Input>
                        </Box>
                    </VStack>
                </HStack>
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={2}
            // border="1px"
            // color="gray.100"
            >
                <Button w="90%" mt={2} pb={1} color="gray.600">
                    登録
                </Button>
            </GridItem>
        </>
    );
};
