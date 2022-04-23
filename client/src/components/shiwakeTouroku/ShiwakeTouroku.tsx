import React, { VFC } from "react";
import { Box } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem } from "../../store/strdGrpCd";
import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";

type shiwakeTourokuProps = {
  name: string;
};

export const ShiwakeTouroku: VFC<shiwakeTourokuProps> = (props) => {
  const atomGrpCd = useRecoilState(strdGrpCd);
  const atomMenuItem = useRecoilState(strdMenuItem);
  console.log(atomMenuItem);
  const [recoiledMenuItem] = atomMenuItem;
  console.log(recoiledMenuItem);
  // console.log(recoiledMenuItem.kamokuMei)
  return (
    <div>
      <Box
        m={0}
        h="100%"
        w="100%"
        border="1px"
        rounded="2xl"
        color="gray.300"
        textAlign="center"
      >
        {props.name}
        <Grid
          h="450px"
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
            h="100%"
            w="100%"
            border="1px"
            rounded="2xl"
            color="gray.100"
            textAlign="center"
          ></GridItem>
          <GridItem
            colSpan={2}
            h="100%"
            w="100%"
            border="1px"
            rounded="2xl"
            color="gray.100"
            textAlign="center"
          ></GridItem>
          <GridItem
            // rowSpan={1}
            colSpan={2}
            h="100%"
            w="100%"
            border="1px"
            rounded="2xl"
            color="gray.100"
            textAlign="center"
          ></GridItem>
        </Grid>
        {/* {props.name}{atomGrpCd} */}
      </Box>
    </div>
  );
};
