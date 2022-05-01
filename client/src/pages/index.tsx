import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Grid, GridItem , Flex} from "@chakra-ui/react";
import { ShiwakeTouroku } from "../components/shiwakeTouroku/ShiwakeTouroku";
import { KamokuMenu } from "../components/kamokuMenu/KamokuMenu";
import { SeisanHyou } from "../components/seisanHyou/SeisanHyou";
import { Header} from '../components/header/Header'

//import type{kamokuMenuProps} from "../components/shiwakeTouroku/KamokuMenu";

// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>

      <Box m={2}>
      <Header />
        <Grid
          h="750px"
          w="750px"
          templateRows="repeat(10, 1fr)"
          //templateRows='100px, 100px, 100px'
          // templateColumns='repeat(5, 1fr)'
          templateColumns="repeat(3, 1fr)"
          gap={2}
          // bgColor="red"
          // color="black"
        >
          <GridItem rowSpan={10} colSpan={1}>
            <KamokuMenu name="取引選択" flug={false}></KamokuMenu>
          </GridItem>
          <GridItem rowSpan={4} colSpan={2}>
            <ShiwakeTouroku name="取引登録"></ShiwakeTouroku>
          </GridItem>
          <GridItem rowSpan={6} colSpan={2}>
            <SeisanHyou name="取引履歴"></SeisanHyou>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
