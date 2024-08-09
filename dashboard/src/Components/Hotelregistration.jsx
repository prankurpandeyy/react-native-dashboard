// src/components/HotelRegistrationForm.jsx
import React, { useEffect } from "react";
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

import { v4 as uuidv4 } from "uuid";
import { databases } from "../../appwrite";
import toast from "react-hot-toast";
const Hotelregistration = () => {
  const {
    hotelName,
    hotelAddress,
    hotelType,
    hotelRent,
    contactNumber,
    location,
    roomType,
    facilities,
    features,
    otherDetails,
    isFlagged,
    dispatch,
    hotelData,
    hotelDBDataRespnse,
  } = useHotelRegistrationContext();
  console.table(
    hotelName,
    hotelAddress,
    hotelType,
    hotelRent,
    contactNumber,
    location,
    roomType,
    facilities,
    features,
    otherDetails,
    isFlagged,
    hotelData,
    hotelDBDataRespnse
  );

  const createHotel = async (e) => {
    e.preventDefault();
    const documentId = uuidv4();
    const hotelData = {
      HotelName: hotelName,
      HotelAddress: hotelAddress,
      HotelType: hotelType,
      HotelRent: hotelRent,
      HotelContact: contactNumber,
      HotelLocation: location,
      HotelRoomType: roomType,
      HotelFacilties: facilities,
      HotelFeatures: features,
      HotelDetails: otherDetails,
      isHotelFlagged: isFlagged,
    }; // Generate a unique document ID

    try {
      const response = await databases.createDocument(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID, // Database ID
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID, // Collection ID
        documentId, // Unique document ID
        hotelData // Hotel data
      );
      console.log("Hotel created successfully:", response);
      toast.success("Hotel created successfully");
    } catch (error) {
      console.error("Failed to create hotel:", error);
    }
  };

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

            <form onSubmit={createHotel}>
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

              <FormControl id="hotel-type" isRequired>
                <FormLabel>Type of Hotel</FormLabel>
                <RadioGroup
                  value={hotelType}
                  onChange={(value) =>
                    dispatch({ type: "HOTELTYPE", payload: value })
                  }
                >
                  <Stack direction="row">
                    <Radio value="veg">Veg</Radio>
                    <Radio value="non-veg">Non-Veg</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl id="rent-min" isRequired>
                <FormLabel>Rent</FormLabel>
                <Input
                  type="number"
                  required
                  value={hotelRent}
                  onChange={(e) =>
                    dispatch({ type: "RENT", payload: e.target.value })
                  }
                />
              </FormControl>

              <FormControl id="contact-number" isRequired>
                <FormLabel>Contact Number</FormLabel>
                <Input
                  type="tel"
                  required
                  value={contactNumber}
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
                  value={location}
                  onChange={(e) =>
                    dispatch({ type: "LOCATION", payload: e.target.value })
                  }
                />
              </FormControl>

              <FormControl id="room-type" isRequired>
                <FormLabel>Room Type</FormLabel>
                <RadioGroup
                  value={roomType}
                  onChange={(value) =>
                    dispatch({ type: "ROOMTYPE", payload: value })
                  }
                >
                  <Stack direction="row">
                    <Radio value="ac">AC</Radio>
                    <Radio value="non-ac">Non-AC</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl id="facilities" isRequired>
                <FormLabel>Other Facilities</FormLabel>
                <Stack spacing={5} direction="row">
                  <Checkbox
                    value="wifi"
                    isChecked={facilities.includes("wifi")}
                    onChange={(e) =>
                      dispatch({ type: "FACILITIES", payload: e.target.value })
                    }
                  >
                    WiFi
                  </Checkbox>
                  <Checkbox
                    value="breakfast"
                    isChecked={facilities.includes("breakfast")}
                    onChange={(e) =>
                      dispatch({ type: "FACILITIES", payload: e.target.value })
                    }
                  >
                    Breakfast
                  </Checkbox>
                  <Checkbox
                    value="dinner"
                    isChecked={facilities.includes("dinner")}
                    onChange={(e) =>
                      dispatch({ type: "FACILITIES", payload: e.target.value })
                    }
                  >
                    Dinner
                  </Checkbox>
                </Stack>
              </FormControl>

              <FormControl id="features" isRequired>
                <FormLabel>Features</FormLabel>
                <Stack spacing={5} direction="row">
                  <Checkbox
                    value="parking"
                    isChecked={features.includes("parking")}
                    onChange={(e) =>
                      dispatch({ type: "FEATURES", payload: e.target.value })
                    }
                  >
                    Parking
                  </Checkbox>
                  <Checkbox
                    value="swimming-pool"
                    isChecked={features.includes("swimming-pool")}
                    onChange={(e) =>
                      dispatch({ type: "FEATURES", payload: e.target.value })
                    }
                  >
                    Swimming Pool
                  </Checkbox>
                </Stack>
              </FormControl>

              <FormControl id="other-details">
                <FormLabel>Other Details</FormLabel>
                <Textarea
                  value={otherDetails}
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
            </form>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Hotelregistration;
