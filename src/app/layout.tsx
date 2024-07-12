"use client";

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import '../styles/global.css';
import { SaldoProvider } from '@/components/providers/saldocontext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <title>Gastei 💰</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet" />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <SaldoProvider>
            {children}
          </SaldoProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
