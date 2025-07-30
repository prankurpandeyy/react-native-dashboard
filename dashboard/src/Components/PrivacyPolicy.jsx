import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
function PrivacyPolicy() {
  return (
    <div>
      <Box p={8}>
        <Heading as="h1" size="xl" mb={6}>
          🛡️ Privacy Policy (App Policy)
        </Heading>
        <Text>Last updated: July 21, 2025</Text>
        <Text mt={4}>
          Hotel Listing App (“we”, “our”, or “the app”) is committed to
          protecting your privacy. This Privacy Policy outlines how we handle
          any information in relation to the use of our mobile application.
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          1. Information We Collect
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              We do not collect, store, or share any personal information from
              our users.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text mt={2}>The app:</Text>
        <UnorderedList>
          <ListItem>Does not require user sign-in</ListItem>
          <ListItem>Does not access device location</ListItem>
          <ListItem>
            Does not request any personal identifiers (email, phone, etc.)
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          2. How We Use Data
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              We use Appwrite as a backend service solely to fetch and display
              publicly available hotel listing data. No data is personalized or
              linked to users.
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          3. Third-Party Services
        </Heading>
        <Text>The app uses:</Text>
        <UnorderedList>
          <ListItem>
            Appwrite – backend-as-a-service for fetching listing content
          </ListItem>

          <Text mt={2}>
            <ListItem>
              Appwrite does not collect user-identifiable data on our behalf.
            </ListItem>
          </Text>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          4. Children's Privacy
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              We do not knowingly collect or solicit data from children under
              the age of 13. The app is not directed to children.
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          5. Data Security
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              As no personal data is collected, stored, or transmitted, there
              are no known vectors of personal data leakage or risk.
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          6. Contact
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              If you have any concerns or questions, reach out at:{" "}
              <Link href="mailto:kshitiz.gwl2k@gmail.com" color="blue.500">
                📧 kshitiz.gwl2k@gmail.com
              </Link>
            </ListItem>
          </UnorderedList>
          {/* <br /> */}
        </Text>
      </Box>
    </div>
  );
}

export default PrivacyPolicy;
