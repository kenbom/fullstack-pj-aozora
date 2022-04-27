import React, { VFC, useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem, strdShiwakeData } from "../../store/strdGrpCd";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdGrpCd";

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

  function handleTestITems() {
    setTestItems({ kamokuCd: 100, kamokuMei: "tested" });
  }
  // console.log(atomMenuItem);
  // const [recoiledMenuItem] = atomMenuItem;
  // console.log(recoiledMenuItem);
  // console.log(atomMenuItem?.kamokuMei)
  // setAtomMenuItem({ kamokuGrpCd: 100, kamokuCd: 10000, kamokuMei: "teisei" })
  // console.log(atomMenuItem)
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
            rowSpan={3}
            colSpan={2}
            // h="100%"
            // w="100%"
            border="1px"
            // rounded="2xl"
            color="gray.100"
            // textAlign="center"
          >
            <HStack spacing="24px">
              <Box w="40px" h="40px" bg="yellow.200">
                1
              </Box>
              <Box w="40px" h="40px" bg="tomato">
                2
              </Box>
              <Box w="40px" h="40px" bg="pink.100">
                3
              </Box>
            </HStack>
            <Button onClick={handleTestITems}>test</Button>
          </GridItem>
          <GridItem
            colSpan={2}
            // h="100%"
            // w="100%"
            border="1px"
            // rounded="2xl"
            color="gray.500"
            textAlign="center"
          >
            <HStack spacing="24px">
              <Box w="40px" h="40px" bg="yellow.200">
                1
              </Box>
              <Box w="40px" h="40px" bg="tomato">
                2
              </Box>
              <Box w="40px" h="40px" bg="pink.100">
                3
              </Box>
            </HStack>
            借方：{atomShiwakeData.kariKamokuMei}
            貸方：{atomShiwakeData.kashiKamokuMei}
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
