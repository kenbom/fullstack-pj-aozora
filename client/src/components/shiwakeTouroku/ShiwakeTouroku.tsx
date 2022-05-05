import React, { VFC, useState } from "react";
import { Box, Button, HStack, Stack, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdStates";
import { strdMenuItem, strdShiwakeData } from "../../store/strdStates";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdStates";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { ShiwakeLeft } from "./ShiwakeLeft";
import { ShiwakeRight } from "./ShiwakeRight";
import { ShiwakeBoth } from "./ShiwakeBoth";
import { graphqlSync } from "graphql";

export type ShiwakeInput = {
  hasseiDate: Date;
  tekiyou: string | undefined;
  kariCd: number;
  kariName: string;
  kariKingaku: number | undefined;
  kashiCd: number;
  kashiName: string;
  kashiKingaku: number | undefined;
};

type shiwakeTourokuProps = {
  name: string;
};

export const ShiwakeTouroku: VFC<shiwakeTourokuProps> = (props) => {
  const atomGrpCd = useRecoilState(strdGrpCd);
  const [atomMenuItem, setAtomMenuItem] = useRecoilState(strdMenuItem);
  const [atomShiwakeData, setAtomShiwakeData] = useRecoilState(strdShiwakeData);
  const [testItems, setTestItems] = useState({
    kamokuCd: 0,
    kamokuMei: "unclicked",
  });
  const Today = new Date();
  const [date, setDate] = React.useState(Today);
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ color: "#fff" }}>
        <CalendarContainer className={className}>
          {/* <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div> */}
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  const [tekiyou, setTekiyou] = useState("")
  const changeTekiyou = (e: React.ChangeEvent<HTMLInputElement> ) => { setTekiyou(e.target.value) }


  return (
    <div>
      <Box
        // m={0}
        h="220px"
        w="100%"
        border="1px"
        rounded="2xl"
        color="gray.700"
        fontSize="sm"
        textAlign="center"
      >
        {props.name}

        <Grid
          h="200px"
          w="100%"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={0.5}
        >
          <GridItem
            rowSpan={1}
            colSpan={2}
            // border="1px"
            // color="gray.100"
          >
            <HStack spacing="1px" mt={2} ml={5}>
              <HStack>
                <Box></Box>
                <ArrowRightIcon color="gray.300" />
                <DatePicker
                  placeholderText=""
                  onChange={(selectedDate) => {
                    setDate(selectedDate || Today);
                  }}
                  calendarContainer={MyContainer}
                  monthsShown={2}
                  showPreviousMonths
                  selected={date}
                ></DatePicker>
              </HStack>

              <Box>
                <Input
                  placeholder="取引メモを入力できます"
                  fontSize="sm"
                  ml={102}
                  mr={-5}
                  onChange={changeTekiyou}
                  type="text"
                />
              </Box>
            </HStack>
          </GridItem>
          <GridItem
            rowSpan={2}
            colSpan={2}
            // border="1px"
            // color="gray.100"
          >
            {atomShiwakeData.hyoujiPtn === "L" ? (
              <ShiwakeLeft date={date} tekiyou={tekiyou} />
            ) : atomShiwakeData.hyoujiPtn === "R" ? (
              <ShiwakeRight date={date} tekiyou={tekiyou} />
            ) : (
              <ShiwakeBoth date={date} tekiyou={tekiyou} />
            )}
          </GridItem>
          {/* <GridItem
            rowSpan={1}
            colSpan={2}
            // border="1px"
            // color="gray.100"
          >
            <Button w="90%" pb={1} color="gray.700">
              {" "}
              登録
            </Button>
          </GridItem> */}
        </Grid>
      </Box>
    </div>
  );
};
