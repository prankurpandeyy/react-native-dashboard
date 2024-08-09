import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useLoginContext } from "../Context/LoginPageContext";
import { logout } from "../../appwrite";
import { useNavigate } from "react-router-dom";

function Header() {
  const { loginData } = useLoginContext();

  const navigate = useNavigate();
  const storage = localStorage.getItem("cookieFallback");

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("cookieFallback");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  function handleLogin() {
    window.location.reload();
    navigate("/");
  }
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
            {storage ? (
              <Button
                variant="solid"
                colorScheme="teal"
                size="sm"
                mr={4}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                variant="solid"
                colorScheme="teal"
                size="sm"
                mr={4}
              >
                Login
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default Header;
