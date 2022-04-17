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
          h="600px"
          w="900px"
          templateRows="repeat(2, 1fr)"
          //templateRows='100px, 100px, 100px'
          // templateColumns='repeat(5, 1fr)'
          templateColumns="repeat(3, 1fr)"
          gap={5}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <KamokuMenu name="Menu" flug={false}> </KamokuMenu>
          </GridItem>
          <GridItem colSpan={1}>
            <ShiwakeTouroku name="Karikata"></ShiwakeTouroku>
          </GridItem>
          <GridItem colSpan={1}>
            <ShiwakeTouroku name="Kashikata"></ShiwakeTouroku>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <SeisanHyou name="SeisanHyou"></SeisanHyou>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
