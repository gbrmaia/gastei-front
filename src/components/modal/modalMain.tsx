"use client";

import React from 'react';
import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import SimpleSidebar from '@components/sidebar/sidebarComponent'; 
// import useMediaQuery from '../../hooks/useMediaQuery'; 

export default function ModalMain() {
  const isMobile = useMediaQuery("(max-width: 768px)",{
    fallback: false,
  });

  return (
    <Grid
      templateAreas={
        isMobile
          ? `"nav"
             "main"
             "main"`
          : `"nav main"
             "nav main"
             "nav main"`
      }
      gridTemplateRows={isMobile ? 'auto 1fr auto' : '50px 1fr 30px'}
      gridTemplateColumns={isMobile ? '1fr' : '250px 1fr'}
      height='100vh'
      width='100vw'
      gap='0'
      color='black'
      fontWeight='bold'
      overflow='hidden'
    >
      <GridItem pl='0' bg='pink.300' area={'nav'}>
        <SimpleSidebar />
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
}
