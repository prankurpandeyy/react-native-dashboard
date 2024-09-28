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
import { useHotelRegistrationContext } from "../Context/HotelRegistrationPageContext";

const Hotelregistration = ({ handleSubmit }) => {
  const {
    hotelName,
    hotelAddress,
    hotelFoodFacility,
    hotelRentMin,
    hotelRentMax,
    hotelContact,
    hotelRoomType,
    hotelLocation,
    hotelParking,
    hotelDetails,
    isFlagged,
    dispatch,
  } = useHotelRegistrationContext();
  console.log(hotelFoodFacility, hotelRoomType, hotelParking);
  return (
    <div className="flex justify-center items-center">
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
              <Input
                type="text"
                required
                value={hotelName}
                onChange={(e) =>
                  dispatch({ type: "HOTELNAME", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="hotel-address" isRequired>
              <FormLabel>Hotel Address</FormLabel>
              <Textarea
                required
                value={hotelAddress}
                onChange={(e) =>
                  dispatch({ type: "HOTELADDRESS", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="hotel-food" isRequired>
              <FormLabel>Food Facility</FormLabel>
              <Input
                type="text"
                value={hotelFoodFacility}
                onChange={(e) =>
                  dispatch({ type: "FOODFACILITY", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="rent-min" isRequired className="flex gap-2">
              <FormLabel>Rent</FormLabel>
              <Input
                type="number"
                required
                placeholder="Minimum Rent"
                value={hotelRentMin}
                onChange={(e) =>
                  dispatch({ type: "MINRENT", payload: e.target.value })
                }
              />
              <Input
                type="number"
                required
                placeholder="Maximum Rent"
                value={hotelRentMax}
                onChange={(e) =>
                  dispatch({ type: "MAXRENT", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="contact-number" isRequired>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="number"
                required
                value={hotelContact}
                onChange={(e) =>
                  dispatch({ type: "CONTACTNUMBER", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="location" isRequired>
              <FormLabel>Location (Google Map Link)</FormLabel>
              <Input
                type="url"
                required
                value={hotelLocation}
                onChange={(e) =>
                  dispatch({ type: "LOCATION", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="hotel-rooms" isRequired>
              <FormLabel>Room Type</FormLabel>
              <Input
                type="text"
                required
                value={hotelRoomType}
                onChange={(
                  e // Update here
                ) => dispatch({ type: "ROOMTYPE", payload: e.target.value })}
              />
            </FormControl>

            <FormControl id="hotel-parking" isRequired>
              <FormLabel>Parking</FormLabel>
              <Input
                type="text"
                required
                value={hotelParking}
                onChange={(
                  e // Update here
                ) => dispatch({ type: "PARKING", payload: e.target.value })}
              />
            </FormControl>

            <FormControl id="other-details">
              <FormLabel>Other Details</FormLabel>
              <Textarea
                value={hotelDetails}
                onChange={(e) =>
                  dispatch({ type: "OTHERDETAILS", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="flag-hotel">
              <Checkbox
                value="flag"
                isChecked={isFlagged}
                onChange={(e) =>
                  dispatch({ type: "FLAGGED", payload: e.target.checked })
                }
              >
                Flag Hotel Not Following the Law
              </Checkbox>
            </FormControl>

            <Stack spacing={10}>
              <Button
                onClick={handleSubmit}
                type="submit"
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
