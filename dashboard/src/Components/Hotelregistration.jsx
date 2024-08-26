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
    hotelType,
    hotelRentMin,
    hotelRentMax,
    hotelContact,
    hotelLocation,
    hotelRoomType,
    hotelFacilties,
    hotelFeatures,
    hotelDetails,
    isFlagged,
    dispatch,
  } = useHotelRegistrationContext();
  console.log(hotelRentMax, hotelRentMin);
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
                  <Radio value="both">Both(Veg/Non-Veg)</Radio>
                </Stack>
              </RadioGroup>
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
                type="tel"
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

            <FormControl id="room-type" isRequired>
              <FormLabel>Room Type</FormLabel>
              <RadioGroup
                value={hotelRoomType}
                onChange={(value) =>
                  dispatch({ type: "ROOMTYPE", payload: value })
                }
              >
                <Stack direction="row">
                  <Radio value="ac">AC</Radio>
                  <Radio value="non-ac">Non-AC</Radio>
                  <Radio value="both">Both(AC/Non-AC)</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="facilities" isRequired>
              <FormLabel>Other Facilities</FormLabel>
              <Stack spacing={5} direction="row">
                <Checkbox
                  value="wifi"
                  isChecked={hotelFacilties.includes("wifi")}
                  onChange={(e) =>
                    dispatch({ type: "FACILITIES", payload: e.target.value })
                  }
                >
                  WiFi
                </Checkbox>
                <Checkbox
                  value="breakfast"
                  isChecked={hotelFacilties.includes("breakfast")}
                  onChange={(e) =>
                    dispatch({ type: "FACILITIES", payload: e.target.value })
                  }
                >
                  Breakfast
                </Checkbox>
                <Checkbox
                  value="dinner"
                  isChecked={hotelFacilties.includes("dinner")}
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
                  isChecked={hotelFeatures.includes("parking")}
                  onChange={(e) =>
                    dispatch({ type: "FEATURES", payload: e.target.value })
                  }
                >
                  Parking
                </Checkbox>
                <Checkbox
                  value="swimming-pool"
                  isChecked={hotelFeatures.includes("swimming-pool")}
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
