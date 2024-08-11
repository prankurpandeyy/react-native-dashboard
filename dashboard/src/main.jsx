import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoginPageContext from "./Context/LoginPageContext.jsx";
import { Toaster } from "react-hot-toast";
import HotelRegistrationPageContext from "./Context/HotelRegistrationPageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <ChakraProvider>
      <BrowserRouter>
        <HotelRegistrationPageContext>
          <LoginPageContext>
            <App />
          </LoginPageContext>
        </HotelRegistrationPageContext>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
