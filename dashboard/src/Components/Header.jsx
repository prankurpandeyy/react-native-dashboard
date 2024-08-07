import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
function Header() {
  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems="center">
            <Box>
              <Image src="../assets/matasharda.png" alt="Logo" boxSize="50px" />
            </Box>
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="#"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="#"
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="#"
              >
                Services
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="#"
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button variant="solid" colorScheme="teal" size="sm" mr={4}>
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default Header;
