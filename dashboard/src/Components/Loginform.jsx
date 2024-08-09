import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

function Loginform() {
  const { email, password, loginData, dispatch } = useLoginContext();

  const navigate = useNavigate();
  const [hasActiveSession, setHasActiveSession] = useState(false);
  // new login method
  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.getSession("current");

        setHasActiveSession(true);
        toast.error("Session already exists. Logging out.");
      } catch (error) {
        if (error.code === 401 || error.code === 404) {
          setHasActiveSession(false);
          console.log("Session does not exist.");
        } else {
          console.error("Error checking for session:", error);
        }
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (hasActiveSession) {
      try {
        await account.deleteSession("current");
        setHasActiveSession(false);
        toast.promise("Session already exists. Logging out.");
      } catch (error) {
        console.error("Error logging out:", error);
        toast.error(`error ${error}`);
        return;
      }
    }

    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      dispatch({ type: "LOGINDATA", payload: response });
      toast.success("User logged in successfully");
      navigate("/dashboard");
      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      toast.promise("Failed to log in. Please check your email and password.");
      console.error("Error logging in user:", error);
    }
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
            <form onClick={handleLogin}>
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

              <Stack spacing={10} className="mt-4">
                <Button
                  type="submit"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </form>
            {/* <form onSubmit={handleLogin}>
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
            </form> */}
          </Stack>
        </Box>
      </Container>
      );
    </div>
  );
}

export default Loginform;
