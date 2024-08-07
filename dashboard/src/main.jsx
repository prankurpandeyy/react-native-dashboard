import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoginPageContext from "./Context/LoginPageContext.jsx";
import toast, { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <ChakraProvider>
      <BrowserRouter>
        <LoginPageContext>
          <App />
        </LoginPageContext>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
