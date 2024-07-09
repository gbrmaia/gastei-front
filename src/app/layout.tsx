"use client";

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme'; // Ajuste o caminho conforme necessário
import '../styles/global.css'; // Importar estilos globais, se houver

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <title>My App</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
