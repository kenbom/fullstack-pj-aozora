import React, { VFC } from "react";
import { Box } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { strdGrpCd } from "../../store/strdGrpCd";
import { strdMenuItem } from "../../store/strdGrpCd";
// import type { StrdMenuItem } from "../../store/strdGrpCd";
import { Grid, GridItem } from "@chakra-ui/react";
import type {StrdMenuItem} from "../../store/strdGrpCd"

type shiwakeTourokuProps = {
  name: string;
};

export const ShiwakeTouroku: VFC<shiwakeTourokuProps> = (props) => {
  const atomGrpCd = useRecoilState(strdGrpCd);
  const [atomMenuItem, setAtomMenuItem] = useRecoilState<StrdMenuItem>({kamokuGrpCd:0,kamokuCd:0,kamokuMei:"テスト費用"});
  console.log(atomMenuItem);
  // const [recoiledMenuItem] = atomMenuItem;
  // console.log(recoiledMenuItem);
  console.log(atomMenuItem?.kamokuMei)

  return (
    <div>
      <Box
        m={0}
        h="100%"
        w="100%"
        border="1px"
        rounded="2xl"
        color="gray.700"
        fontSize="sm"
        textAlign="center"
      >
        {props.name} {atomGrpCd}
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
          ></GridItem>
          <GridItem
            colSpan={2}
            // h="100%"
            // w="100%"
            border="1px"
            // rounded="2xl"
            color="gray.100"
            textAlign="center"
          ></GridItem>
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
