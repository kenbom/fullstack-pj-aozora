import React, { VFC, useState } from "react";
import { Box, Button, HStack, Stack, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem, strdShiwakeData } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdGrpCd";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { ShiwakeLeft } from "./ShiwakeLeft";
import { ShiwakeRight } from "./ShiwakeRight";
import { ShiwakeBoth } from "./ShiwakeBoth";
import { graphqlSync } from "graphql";

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
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

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
            <HStack spacing="4px">
              <Box mt={2} ml={5}>
                <HStack>
                <ArrowRightIcon color="gray.300" />
                <DatePicker
                  placeholderText="日付を選択してください"
                  onChange={(selectedDate) => {
                    setDate(selectedDate || Today);
                  }}
                  calendarContainer={MyContainer}
                  monthsShown={2}
                  showPreviousMonths
                />
                </HStack>
              </Box>
              <Box>
                <Input
                  placeholder="取引メモを入力できます"
                  fontSize="sm"
                  ml={12}
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
            {atomShiwakeData.hyoujiPtn === "L" ? 
              <ShiwakeLeft />
             : atomShiwakeData.hyoujiPtn === "R" ? 
              <ShiwakeRight />
             : 
              <ShiwakeBoth />
            }
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
