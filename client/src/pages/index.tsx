import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ShiwakeTouroku } from "../components/shiwakeTouroku/ShiwakeTouroku";
import { KamokuMenu } from "../components/shiwakeTouroku/KamokuMenu";
import { SeisanHyou } from "../components/seisanHyou/SeisanHyou";
//import type{kamokuMenuProps} from "../components/shiwakeTouroku/KamokuMenu";

// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Box m={10}>
        <Grid
          h="800px"
          w="800px"
          templateRows="repeat(8, 1fr)"
          //templateRows='100px, 100px, 100px'
          // templateColumns='repeat(5, 1fr)'
          templateColumns="repeat(3, 1fr)"
          gap={5}
        >
          <GridItem rowSpan={8} colSpan={1}>
            <KamokuMenu name="取引メニュー" flug={false}></KamokuMenu>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2}>
            <ShiwakeTouroku name="B/S転記"></ShiwakeTouroku>
          </GridItem>
          <GridItem rowSpan={5} colSpan={2}>
            <SeisanHyou name="取引履歴"></SeisanHyou>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
