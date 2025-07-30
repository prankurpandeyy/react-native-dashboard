import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Header from "../Components/Header";
import Terms from "../Components/Terms";
import Footer from "../Components/Footer";

function TermsAndConditions() {
  return (
    <div>
      <Header />
      <Terms />
      <div className="mb-12">
        <Footer />
      </div>
    </div>
  );
}

export default TermsAndConditions;
