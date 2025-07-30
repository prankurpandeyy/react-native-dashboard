import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
function Terms() {
  return (
    <div>
      <Box p={8}>
        <Heading as="h1" size="xl" mb={6}>
          📜 Terms of Use (App Policy)
        </Heading>
        <Text>Last updated: July 21, 2025</Text>
        <Text mt={4}>
          By using Hotel Listing App, you agree to the following terms:
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          1. Usage
        </Heading>
        <UnorderedList>
          <ListItem>
            The app is provided “as is” and is free to use for browsing hotel
            listings.
          </ListItem>
          <ListItem>
            You may not use the app to conduct any unlawful activity.
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          2. Data Accuracy
        </Heading>
        <UnorderedList>
          <ListItem>
            The hotel data displayed is retrieved from a backend database.
          </ListItem>
          <ListItem>
            While we strive for accuracy, we do not guarantee the correctness,
            availability, or completeness of any listing.
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          3. No Liability
        </Heading>
        <UnorderedList>
          <ListItem>
            We are not responsible for any actions you take based on the
            information provided in the app.
          </ListItem>
          <ListItem>
            We are not affiliated with the hotels listed unless explicitly
            mentioned.
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          4. Intellectual Property
        </Heading>
        <UnorderedList>
          <ListItem>
            The UI/UX, brand, and app logic are intellectual property of the
            developer.
          </ListItem>
          <ListItem>
            You may not copy, distribute, or reverse engineer any part of the
            app.
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          5. Termination
        </Heading>
        <UnorderedList>
          <ListItem>
            We reserve the right to remove access to the app at any time without
            prior notice.
          </ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
}

export default Terms;
