import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
function Footer() {
  const DateTime = new Date();
  console.log("🚀 ~ Footer ~ DateTime:", DateTime);
  return (
    <div className="bottom-0 fixed w-full">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        py={4}
        mt={8}
      >
        <Flex
          as="footer"
          align="center"
          justify="space-between"
          wrap="wrap"
          maxW="6xl"
          mx="auto"
          px={{ base: 4, md: 8 }}
        >
          <Text>
            &copy; {new Date().getFullYear()} ATD SOFTWARES . All rights
            reserved.
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align="center"
          >
            <Link
              href="#"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.900", "gray.300"),
              }}
            >
              Contact Support : 7580909961
            </Link>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}

export default Footer;
