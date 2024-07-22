import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>
);
