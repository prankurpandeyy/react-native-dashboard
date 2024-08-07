// src/components/HotelRegistrationForm.jsx
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

const Hotelregistration = () => {
  return (
    <div className=" flex justify-center items-center">
      <Container maxW="lg" p={8}>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <Heading textAlign="center" size="lg">
              Hotel Registration
            </Heading>

            <FormControl id="hotel-name" isRequired>
              <FormLabel>Hotel Name</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl id="hotel-address" isRequired>
              <FormLabel>Hotel Address</FormLabel>
              <Textarea />
            </FormControl>

            <FormControl id="hotel-type" isRequired>
              <FormLabel>Type of Hotel</FormLabel>
              <RadioGroup defaultValue="veg">
                <Stack direction="row">
                  <Radio value="veg">Veg</Radio>
                  <Radio value="non-veg">Non-Veg</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="rent-min" isRequired>
              <FormLabel>Rent</FormLabel>
              <Input type="number" />
            </FormControl>

            <FormControl id="contact-number" isRequired>
              <FormLabel>Contact Number</FormLabel>
              <Input type="tel" />
            </FormControl>

            <FormControl id="location" isRequired>
              <FormLabel>Location (Google Map Link)</FormLabel>
              <Input type="url" />
            </FormControl>

            <FormControl id="room-type" isRequired>
              <FormLabel>Room Type</FormLabel>
              <RadioGroup defaultValue="ac">
                <Stack direction="row">
                  <Radio value="ac">AC</Radio>
                  <Radio value="non-ac">Non-AC</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="facilities" isRequired>
              <FormLabel>Other Facilities</FormLabel>
              <Stack spacing={5} direction="row">
                <Checkbox value="wifi">WiFi</Checkbox>
                <Checkbox value="breakfast">Breakfast</Checkbox>
                <Checkbox value="dinner">Dinner</Checkbox>
              </Stack>
            </FormControl>

            <FormControl id="features" isRequired>
              <FormLabel>Features</FormLabel>
              <Stack spacing={5} direction="row">
                <Checkbox value="parking">Parking</Checkbox>
                <Checkbox value="swimming-pool">Swimming Pool</Checkbox>
              </Stack>
            </FormControl>

            <FormControl id="other-details">
              <FormLabel>Other Details</FormLabel>
              <Textarea />
            </FormControl>

            <FormControl id="flag-hotel" isRequired>
              <Checkbox value="flag">Flag Hotel Not Following the Law</Checkbox>
            </FormControl>

            <Stack spacing={10}>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Hotelregistration;
