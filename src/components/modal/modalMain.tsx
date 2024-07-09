"use client";

import React, { ReactNode } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import SimpleSidebar from '@components/sidebar/sidebarComponent'; // Ajuste o caminho conforme necessário
import useMediaQuery from '../../hooks/useMediaQuery'; // Importar o hook customizado

interface ModalMainProps {
  children?: React.ReactNode;
}

export default function ModalMain({ children }: ModalMainProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
      gap='1'
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
