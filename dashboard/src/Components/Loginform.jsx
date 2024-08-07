import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLoginContext } from "../Context/LoginPageContext";
import toast from "react-hot-toast";
import { account } from "../../appwrite";

function Loginform() {
  const { email, password, loginData, dispatch } = useLoginContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      console.log("User logged in:", response);
      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      setError("Failed to log in. Please check your email and password.");
      console.error("Error logging in user:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Container maxW="md" py={12}>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <Heading textAlign="center" size="lg">
              Login
            </Heading>
            {/* <form onClick={handleLogin}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                />
              </FormControl>
            </form>
            <Stack spacing={10}>
              <Button
                type="submit"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack> */}
            <form onSubmit={handleLogin}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  required
                />
              </div>

              {error && <div className="text-red-600">{error}</div>}
              <button type="submit">
                {" "}
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </Stack>
        </Box>
      </Container>
      );
    </div>
  );
}

export default Loginform;
