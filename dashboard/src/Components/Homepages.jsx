import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGooglePlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mata_sharda.gif";
const Homepages = () => {
  const navigate = useNavigate();

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading>Welcome to Maihar Travel Hotel Management App</Heading>

        <Text fontSize="xl" textAlign="center">
          Manage your hotel data with ease. Add, edit, delete, and view hotel
          information effortlessly.
        </Text>

        <Image src={logo} alt="Hotel Management" borderRadius="md" />

        <Stack spacing={4} align="center" width="100%" maxW="600px">
          <Heading size="md">How to Use the App</Heading>

          <Text>
            <strong>Login:</strong> To access the hotel management features,
            please login using your credentials. If you don't have an account,
            register first.
          </Text>

          <Text>
            <strong>Register:</strong> Fill out the registration form to create
            a new account. Once registered, you can log in and start managing
            hotel data.
          </Text>

          <Text>
            <strong>Managing Hotel Data:</strong> After logging in, you can add
            new hotels by filling out the hotel registration form. You can also
            view a list of all hotels, edit their details, or delete them if
            needed.
          </Text>

          <Text>
            <strong>Help & Support:</strong> If you need assistance, feel free
            to reach out to me via email at{" "}
            <Link href="mailto:pprankur@gmail.com" color="teal.500">
              pprankur@gmail.com
            </Link>
            .
          </Text>

          <HStack spacing={4}>
            <Button colorScheme="teal" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </HStack>

          <HStack spacing={4} mt={8}>
            <Text fontSize="lg" fontWeight="bold">
              Download our mobile app:
            </Text>
            <Link
              href="https://play.google.com/store/apps/details?id=com.yourappname"
              isExternal
            >
              <Button colorScheme="teal" leftIcon={<Icon as={FaGooglePlay} />}>
                Get it on Google Play
              </Button>
            </Link>
          </HStack>
        </Stack>
      </VStack>

      <Box mt={10} textAlign="center">
        <Heading size="lg">Why Choose Our App?</Heading>
        <Text mt={4}>
          Our app simplifies hotel management, making it easy to keep track of
          important details. With features like instant updates, easy data
          entry, and secure management, you can focus on running your business
          while we handle the details.
        </Text>
      </Box>
    </Box>
  );
};

export default Homepages;
