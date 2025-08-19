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
        <Text>Last updated: August 18, 2025</Text>

        <Text mt={4}>
          Maihar Darshan App (“we”, “our”, or “the app”) is committed to
          protecting your privacy. This Privacy Policy explains how our app and
          third-party services handle user data in connection with the use of
          our mobile application.
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          1. Information We Collect
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              We do not directly collect or store personal information such as
              your name, email address, or phone number.
            </ListItem>
            <ListItem>
              However, third-party services integrated into our app (including
              Appwrite backend services and YouTube APIs) may collect technical
              identifiers such as <strong>Device or Other IDs</strong> (for
              example: Android ID, Advertising ID, or similar identifiers).
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          2. How We Use Data
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              Device identifiers may be used by Appwrite to provide app
              functionality such as managing sessions and serving backend data.
            </ListItem>
            <ListItem>
              YouTube APIs may use device identifiers for analytics, security,
              fraud prevention, and content delivery as required by Google’s
              platform.
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          3. Third-Party Services
        </Heading>
        <Text>The app relies on the following third-party services:</Text>
        <UnorderedList>
          <ListItem>
            <strong>Appwrite</strong> – used for backend services and delivering
            app content. May process device identifiers for security and session
            management.
          </ListItem>
          <ListItem>
            <strong>YouTube API Services</strong> – used to display video
            galleries within the app. These services may collect device
            identifiers and usage data in accordance with Google’s policies. For
            more details, please review{" "}
            <Link
              href="https://policies.google.com/privacy"
              color="blue.500"
              isExternal
            >
              Google’s Privacy Policy
            </Link>
            .
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          4. Children's Privacy
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              We do not knowingly collect or solicit data from children under
              the age of 13. If we become aware that we have inadvertently
              collected data from a child, we will take steps to delete such
              information promptly.
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          5. Data Security
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              We do not directly store personal user data. However, third-party
              services we integrate with may process technical identifiers.
              These providers follow industry-standard practices for security
              and data protection.
            </ListItem>
          </UnorderedList>
        </Text>

        <Heading as="h2" size="lg" mt={6} mb={4}>
          6. Contact
        </Heading>
        <Text>
          <UnorderedList>
            <ListItem>
              If you have any concerns or questions about this Privacy Policy,
              please reach out at:{" "}
              <Link href="mailto:kshitiz.gwl2k@gmail.com" color="blue.500">
                📧 kshitiz.gwl2k@gmail.com
              </Link>
            </ListItem>
          </UnorderedList>
        </Text>
      </Box>
    </div>
  );
}

export default PrivacyPolicy;