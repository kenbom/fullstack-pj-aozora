import React, { VFC, useState } from "react";
import { Box, Button, HStack, Stack, Input } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem, strdShiwakeData } from "../../store/strdGrpCd";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdGrpCd";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker, { CalendarContainer } from "react-datepicker"

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
        m={0}
        h="100%"
        w="100%"
        border="1px"
        rounded="2xl"
        color="gray.900"
        fontSize="sm"
        textAlign="center"
      >
        {props.name}

        <Grid
          h="250px"
          w="100%"
          templateRows="repeat(5, 1fr)"
          //templateRows='100px, 100px, 100px'
          // templateColumns='repeat(5, 1fr)'
          templateColumns="repeat(2, 1fr)"
          gap={2}
        >
          <GridItem
            rowSpan={1}
            colSpan={2}
            // h="100%"
            // w="100%"
            border="1px"
            // rounded="2xl"
            color="gray.100"
          // textAlign="center"
          >
            <HStack spacing="8px">
              <Box mt={2} ml={10} color="gray.400" bgColor="blue.200">
                <DatePicker
                  placeholderText="日付を選択してください"
                  onChange={selectedDate => { setDate(selectedDate || Today) }}
                  calendarContainer={MyContainer}
                  monthsShown={2}
                  showPreviousMonths
                />
              </Box>
              <Box>
                <Input placeholder="取引メモを入力できます" fontSize="sm" ml={12} />
              </Box>
            </HStack>
          </GridItem>
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
              <Box w="50%" h="140px" bg="yellow.200">
                借方：{atomShiwakeData.kariKamokuMei}
              </Box>
              <Box w="50%" h="140px" bg="tomato">
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
        </Grid>
      </Box>
    </div>
  );
};
