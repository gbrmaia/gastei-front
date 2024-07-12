"use client";

import React, { useState } from 'react';
import { Box, Grid, GridItem, useMediaQuery, IconButton, Wrap, WrapItem, Tooltip } from '@chakra-ui/react';
import { FaPlus } from "react-icons/fa";
import SimpleSidebar from '@components/sidebar/sidebarComponent';
import CardDespesas from '../card/cardComponent';

export default function ModalMain() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [cards, setCards] = useState([<CardDespesas key={0} />]);

  const addCard = () => {
    setCards([...cards, <CardDespesas key={cards.length} />]);
  };

  return (
    <Grid
      templateAreas={
        isMobile
          ? `"nav"
             "main"`
          : `"nav main"`
      }
      gridTemplateRows={isMobile ? 'auto 1fr' : '1fr'}
      gridTemplateColumns={isMobile ? '1fr' : '250px 1fr'}
      height='100vh'
      width='100vw'
      gap='0'
      color='#252627'
      fontWeight='bold'
      overflow='hidden'
    >
      <GridItem pl='0' bg='pink.300' area={'nav'}>
        <SimpleSidebar />
      </GridItem>
      <GridItem p='4' bg='#F2EFE9' area={'main'} overflowY="auto">
        <Box w={'100%'}>
          <Wrap spacing="4" justify="center">
            {cards.map((card, index) => (
              <WrapItem key={index} flexBasis={['100%', '100%', '48%']}>
                {card}
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </GridItem>
      <Tooltip label='Adicionar Card' placement='left' hasArrow>
      <IconButton
        icon={<FaPlus />}
        isRound
        size="lg"
        colorScheme="green"
        position="fixed"
        bottom={{ base: "20px", md: "20px" }}
        right={{ base: "20px", md: "20px" }}
        zIndex="docked"
        onClick={addCard}
        aria-label="Adicionar novo card"
      />
      </Tooltip>
    </Grid>
  );
}
