import React from'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Routing } from './Routing';

function App() {
    return (
      <ChakraProvider>
        <Routing />
      </ChakraProvider>
    );
  }

export default App;
