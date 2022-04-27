import React, { VFC, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem } from "../../store/strdGrpCd";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type { StrdMenuItem } from "../../store/strdGrpCd";

type shiwakeTourokuProps = {
  name: string;
};

export const ShiwakeTouroku: VFC<shiwakeTourokuProps> = (props) => {
  const atomGrpCd = useRecoilState(strdGrpCd);
  const [atomMenuItem, setAtomMenuItem] = useRecoilState(strdMenuItem);
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
        textAlign="center">
        {props.name}

        <Grid
          h="250px"
          w="100%"
          templateRows="repeat(5, 1fr)"
          //templateRows='100px, 100px, 100px'
          // templateColumns='repeat(5, 1fr)'
          templateColumns="repeat(2, 1fr)"
          gap={2}>
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
            <Button onClick={handleTestITems}>test</Button>
          </GridItem>
          <GridItem
            colSpan={2}
            // h="100%"
            // w="100%"
            border="1px"
            // rounded="2xl"
            color="gray.100"
            textAlign="center">
            {atomMenuItem.kamokuMei}
          </GridItem>
          <GridItem
            // rowSpan={1}
            colSpan={2}
            // h="100%"
            // w="100%"
            border="1px"
            // rounded="2xl"
            color="gray.100"
            textAlign="center"></GridItem>
        </Grid>
      </Box>
    </div>
  );
};
