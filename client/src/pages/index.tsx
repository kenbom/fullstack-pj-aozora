// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { ShiwakeCard } from "../components/ShiwakeCard";
import { KamokuMenu } from "../components/KamokuMenu";
import { SeisanHyou } from "../components/SeisanHyou";
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
            <KamokuMenu />
          </GridItem>
          <GridItem colSpan={1}>
            <ShiwakeCard name="Karikata"></ShiwakeCard>
          </GridItem>
          <GridItem colSpan={1}>
            <ShiwakeCard name="Kashikata"></ShiwakeCard>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <SeisanHyou></SeisanHyou>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
