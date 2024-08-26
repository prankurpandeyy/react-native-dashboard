// import React, { useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   FormLabel,
//   Input,
//   Radio,
//   RadioGroup,
//   Stack,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   Textarea,
//   Checkbox,
//   useColorModeValue,
//   useToast,
// } from "@chakra-ui/react";
// // Adjust import path as necessary
// import { databases } from "../../appwrite"; // Adjust import path as necessary
// import { useHotelRegistrationContext } from "../Context/HotelRegistrationPageContext";
// import { v4 as uuidv4 } from "uuid";

// const EditHotelForm = () => {
//   const {
//     hotelName,
//     hotelAddress,
//     hotelType,
//     hotelRent,
//     hotelContact,
//     hotelLocation,
//     hotelRoomType,
//     hotelFacilties,
//     hotelFeatures,
//     hotelDetails,
//     isFlagged,
//     dispatch,
//     hotelData,
//     hotelDBDataResponse,
//   } = useHotelRegistrationContext();
//   const toast = useToast();

//   useEffect(() => {
//     // Fetch all hotels initially
//     dispatch({ type: "HOTELNAME", payload: localStorage.getItem("hotelName") });
//     dispatch({ type: "HOTELADDRESS", payload: localStorage.getItem("hotelAddress") });
//     dispatch({ type: "RENT", payload: localStorage.getItem("hotelRent") });
//     dispatch({ type: "CONTACTNUMBER", payload: localStorage.getItem("hotelContact") });
//     dispatch({ type: "LOCATION", payload: localStorage.getItem("hotelLocation") });
//     dispatch({ type: "OTHERDETAILS", payload: localStorage.getItem("hotelDetails") });
//     dispatch({ type: "FLAGGED", payload: localStorage.getItem("isFlagged") });
//     dispatch({ type: "FACILITIES", payload: localStorage.getItem("hotelFacilties") });
//     dispatch({ type: "FEATURES", payload: localStorage.getItem("hotelFeatures") });
//   }, []);

//   const clearForm = () => {
//     dispatch({ type: "HOTELNAME", payload: "" });
//     dispatch({ type: "HOTELADDRESS", payload: "" });
//     dispatch({ type: "RENT", payload: "" });
//     dispatch({ type: "CONTACTNUMBER", payload: "" });
//     dispatch({ type: "LOCATION", payload: "" });
//     dispatch({ type: "OTHERDETAILS", payload: "" });
//     dispatch({ type: "FLAGGED", payload: false });
//     dispatch({ type: "FACILITIES", payload: [] });
//     dispatch({ type: "FEATURES", payload: [] });
//   };
//   const editHotelData = async (hotelId, dispatch, updatedHotelData) => {
//     try {
//       const updatedHotel = await databases.updateDocument(
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//         hotelId, // The ID of the hotel document you want to update
//         updatedHotelData
//       );

//       // Update the state with the edited hotel data
//       dispatch({ type: "UPDATE_HOTEL", payload: updatedHotel });
//       toast.success("Hotel data updated successfully!");
//     } catch (error) {
//       console.error("Error updating hotel data:", error);
//       toast.error("Failed to update hotel data");
//     }
//   };
//   function handleSubmit() {
//     editHotelData(hotelData.$id, dispatch, hotelDBDataResponse);
//   }

//   function handleClearAllHotels() {
//     console.log("hotelDBDataResponse", hotelDBDataResponse);
//   }
//   return (
//     <Container maxW="container.xl" p={8}>
//       <Box
//         rounded="lg"
//         bg={useColorModeValue("white", "gray.700")}
//         boxShadow="lg"
//         p={8}
//         mb={8}
//       >
//         <Stack spacing={4}>
//           <FormControl id="hotel-name" isRequired>
//             <FormLabel>Hotel Name</FormLabel>
//             <Input
//               type="text"
//               value={hotelName}
//               onChange={(e) =>
//                 dispatch({ type: "HOTELNAME", payload: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotel-address" isRequired>
//             <FormLabel>Hotel Address</FormLabel>
//             <Input
//               type="text"
//               value={hotelAddress}
//               onChange={(e) =>
//                 dispatch({ type: "HOTELADDRESS", payload: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotel-type" isRequired>
//             <FormLabel>Type of Hotel</FormLabel>
//             <RadioGroup
//               value={hotelType}
//               onChange={(value) =>
//                 dispatch({ type: "HOTELTYPE", payload: value })
//               }
//             >
//               <Stack direction="row">
//                 <Radio value="veg">Veg</Radio>
//                 <Radio value="non-veg">Non-Veg</Radio>
//               </Stack>
//             </RadioGroup>
//           </FormControl>

//           <FormControl id="hotel-rent" isRequired>
//             <FormLabel>Rent</FormLabel>
//             <Input
//               type="number"
//               value={hotelRent}
//               onChange={(e) =>
//                 dispatch({ type: "RENT", payload: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotel-contact" isRequired>
//             <FormLabel>Contact Number</FormLabel>
//             <Input
//               type="tel"
//               value={hotelContact}
//               onChange={(e) =>
//                 dispatch({ type: "CONTACTNUMBER", payload: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotel-location" isRequired>
//             <FormLabel>Location (Google Map Link)</FormLabel>
//             <Input
//               type="url"
//               value={hotelLocation}
//               onChange={(e) =>
//                 dispatch({ type: "LOCATION", payload: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotel-room-type" isRequired>
//             <FormLabel>Room Type</FormLabel>
//             <RadioGroup
//               value={hotelRoomType}
//               onChange={(value) =>
//                 dispatch({ type: "ROOMTYPE", payload: value })
//               }
//             >
//               <Stack direction="row">
//                 <Radio value="ac">AC</Radio>
//                 <Radio value="non-ac">Non-AC</Radio>
//               </Stack>
//             </RadioGroup>
//           </FormControl>

//           <FormControl id="hotel-facilities" isRequired>
//             <FormLabel>Other Facilities</FormLabel>
//             <Stack spacing={5} direction="row">
//               <Checkbox
//                 value="wifi"
//                 isChecked={hotelFacilties.includes("wifi")}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   dispatch({ type: "FACILITIES", payload: value });
//                 }}
//               >
//                 WiFi
//               </Checkbox>
//               <Checkbox
//                 value="breakfast"
//                 isChecked={hotelFacilties.includes("breakfast")}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   dispatch({ type: "FACILITIES", payload: value });
//                 }}
//               >
//                 Breakfast
//               </Checkbox>
//               <Checkbox
//                 value="dinner"
//                 isChecked={hotelFacilties.includes("dinner")}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   dispatch({ type: "FACILITIES", payload: value });
//                 }}
//               >
//                 Dinner
//               </Checkbox>
//             </Stack>
//           </FormControl>

//           <FormControl id="hotel-features" isRequired>
//             <FormLabel>Features</FormLabel>
//             <Stack spacing={5} direction="row">
//               <Checkbox
//                 value="parking"
//                 isChecked={hotelFeatures.includes("parking")}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   dispatch({ type: "FEATURES", payload: value });
//                 }}
//               >
//                 Parking
//               </Checkbox>
//               <Checkbox
//                 value="swimming-pool"
//                 isChecked={hotelFeatures.includes("swimming-pool")}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   dispatch({ type: "FEATURES", payload: value });
//                 }}
//               >
//                 Swimming Pool
//               </Checkbox>
//             </Stack>
//           </FormControl>

//           <FormControl id="hotel-details">
//             <FormLabel>Other Details</FormLabel>
//             <Textarea
//               value={hotelDetails}
//               onChange={(e) =>
//                 dispatch({ type: "OTHERDETAILS", payload: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="flag-hotel" isRequired>
//             <Checkbox
//               isChecked={isFlagged}
//               onChange={(e) =>
//                 dispatch({ type: "FLAGGED", payload: e.target.checked })
//               }
//             >
//               Flag Hotel Not Following the Law
//             </Checkbox>
//           </FormControl>

//           <Stack spacing={10} mt={4}>
//             <Button
//               bg="blue.400"
//               color="white"
//               _hover={{ bg: "blue.500" }}
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//             <Button
//               bg="red.400"
//               color="white"
//               _hover={{ bg: "red.500" }}
//               onClick={handleClearAllHotels}
//             >
//               Clear All Hotels
//             </Button>
//           </Stack>
//         </Stack>
//       </Box>

//       <Box
//         rounded="lg"
//         bg={useColorModeValue("white", "gray.700")}
//         boxShadow="lg"
//         p={8}
//       >
//         <Table variant="simple">
//           <TableCaption>List of Hotels</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>Hotel Name</Th>
//               <Th>Hotel Address</Th>
//               <Th>Hotel Type</Th>
//               <Th>Hotel Rent</Th>
//               <Th>Hotel Contact</Th>
//               <Th>Hotel Location</Th>
//               <Th>Room Type</Th>
//               <Th>Facilities</Th>
//               <Th>Features</Th>
//               <Th>Details</Th>
//               <Th>Actions</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {hotelDBDataResponse.map((hotel) => (
//               <Tr key={hotel.$id}>
//                 <Td>{hotel.HotelName}</Td>
//                 <Td>{hotel.HotelAddress}</Td>
//                 <Td>{hotel.HotelType}</Td>
//                 <Td>{hotel.HotelRent}</Td>
//                 <Td>{hotel.HotelContact}</Td>
//                 <Td>
//                   <a
//                     href={hotel.HotelLocation}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Location
//                   </a>
//                 </Td>
//                 <Td>{hotel.HotelRoomType}</Td>
//                 <Td>{hotel.HotelFacilties.join(", ")}</Td>
//                 <Td>{hotel.HotelFeatures.join(", ")}</Td>
//                 <Td>{hotel.HotelDetails}</Td>
//                 <Td>
//                   <Button
//                     colorScheme="red"
//                     onClick={() => handleDeleteHotel(hotel.$id)}
//                   >
//                     Delete
//                   </Button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </Box>
//     </Container>
//   );
// };

// export default EditHotelForm;
import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { databases } from "../../appwrite";
import { useNavigate, useParams } from "react-router-dom";

const EditHotelForm = () => {
  const { id } = useParams(); // Extract hotelId from route params
  const navigate = useNavigate();
  const [hotelData, setHotelData] = useState({
    hotelName: "",
    hotelAddress: "",
    hotelType: "",
    hotelRentMax: "",
    hotelRentMin: "",
    hotelContact: "",
    hotelLocation: "",
    hotelRoomType: "",
    hotelFacilties: [],
    hotelFeatures: [],
    hotelDetails: "",
    isHotelFlagged: false,
  });

  useEffect(() => {
    getHotelById(id);
  }, [id]); // Dependency array includes id to refetch if id changes

  const getHotelById = async (documentId) => {
    try {
      const response = await databases.getDocument(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
        documentId
      );

      // Map the response to form state
      setHotelData({
        hotelName: response.HotelName || "",
        hotelAddress: response.HotelAddress || "",
        hotelType: response.HotelType || "",
        hotelRentMax: response.HotelRentMax || "",
        hotelRentMin: response.HotelRentMin || "",
        hotelContact: response.HotelContact || "",
        hotelLocation: response.HotelLocation || "",
        hotelRoomType: response.HotelRoomType || "",
        hotelFacilties: response.HotelFacilties || [],
        hotelFeatures: response.HotelFeatures || [],
        hotelDetails: response.HotelDetails || "",
        isHotelFlagged: response.isHotelFlagged || false,
      });
    } catch (error) {
      console.error("Error retrieving hotel data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.updateDocument(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
        id,
        {
          HotelName: hotelData.hotelName,
          HotelAddress: hotelData.hotelAddress,
          HotelType: hotelData.hotelType,
          HotelRentMax: hotelData.hotelRentMax,
          HotelRentMin: hotelData.hotelRentMin,
          HotelContact: hotelData.hotelContact,
          HotelLocation: hotelData.hotelLocation,
          HotelRoomType: hotelData.hotelRoomType,
          HotelFacilties: hotelData.hotelFacilties,
          HotelFeatures: hotelData.hotelFeatures,
          HotelDetails: hotelData.hotelDetails,
          isHotelFlagged: hotelData.isHotelFlagged,
        }
      );
      // Optionally, show a success message or redirect
      console.log("Hotel data updated successfully");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error updating hotel data:", error);
    }
  };

  const handleCheckboxChange = (type, value) => {
    setHotelData((prevData) => ({
      ...prevData,
      [type]: prevData[type].includes(value)
        ? prevData[type].filter((item) => item !== value)
        : [...prevData[type], value],
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="hotelName">
            <FormLabel>Hotel Name</FormLabel>
            <Input
              name="hotelName"
              value={hotelData.hotelName}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelName: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="hotelAddress">
            <FormLabel>Hotel Address</FormLabel>
            <Input
              name="hotelAddress"
              value={hotelData.hotelAddress}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelAddress: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="hotelType">
            <FormLabel>Food Facility</FormLabel>
            <RadioGroup
              name="hotelType"
              value={hotelData.hotelType}
              onChange={(value) =>
                setHotelData({ ...hotelData, hotelType: value })
              }
            >
              <Stack direction="row">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="hotelRent" className="flex gap-2">
            <FormLabel>Hotel Rent</FormLabel>
            <Input
              name="hotelRentMin"
              value={hotelData.hotelRentMin}
              placeholder="Minimum Rent"
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelRentMin: e.target.value })
              }
            />
            <Input
              name="hotelRentMax"
              value={hotelData.hotelRentMax}
              placeholder="Maximum Rent"
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelRentMax: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="hotelContact">
            <FormLabel>Contact Number</FormLabel>
            <Input
              name="hotelContact"
              value={hotelData.hotelContact}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelContact: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="hotelLocation">
            <FormLabel>Location</FormLabel>
            <Input
              name="hotelLocation"
              value={hotelData.hotelLocation}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelLocation: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="hotelRoomType">
            <FormLabel>Room Type</FormLabel>
            <RadioGroup
              name="hotelRoomType"
              value={hotelData.hotelRoomType}
              onChange={(value) =>
                setHotelData({ ...hotelData, hotelRoomType: value })
              }
            >
              <Stack direction="row">
                <Radio value="ac">AC</Radio>
                <Radio value="non-ac">Non-AC</Radio>
                <Radio value="both">both(AC/non-AC)</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {/* <FormControl id="hotelFacilties">
            <FormLabel>Facilities</FormLabel>
            <Stack spacing={2}>
              <Checkbox
                value="wifi"
                isChecked={hotelData.hotelFacilties.includes("wifi")}
                onChange={() => handleCheckboxChange("hotelFacilties", "wifi")}
              >
                WiFi
              </Checkbox>
              <Checkbox
                value="breakfast"
                isChecked={hotelData.hotelFacilties.includes("breakfast")}
                onChange={() =>
                  handleCheckboxChange("hotelFacilties", "breakfast")
                }
              >
                Breakfast
              </Checkbox>
              <Checkbox
                value="dinner"
                isChecked={hotelData.hotelFacilties.includes("dinner")}
                onChange={() =>
                  handleCheckboxChange("hotelFacilties", "dinner")
                }
              >
                Dinner
              </Checkbox>
            </Stack>
          </FormControl> */}

          <FormControl id="hotelFeatures">
            <FormLabel>Features</FormLabel>
            <Stack spacing={2}>
              <Checkbox
                value="parking"
                isChecked={hotelData.hotelFeatures.includes("parking")}
                onChange={() =>
                  handleCheckboxChange("hotelFeatures", "parking")
                }
              >
                Parking
              </Checkbox>
              <Checkbox
                value="wifi"
                isChecked={hotelData.hotelFeatures.includes("wifi")}
                onChange={() => handleCheckboxChange("hotelFeatures", "wifi")}
              >
                WiFi
              </Checkbox>
            </Stack>
          </FormControl>

          <FormControl id="hotelDetails">
            <FormLabel>Details</FormLabel>
            <Input
              name="hotelDetails"
              value={hotelData.hotelDetails}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelDetails: e.target.value })
              }
            />
          </FormControl>

          <FormControl id="isHotelFlagged">
            <Checkbox
              name="isHotelFlagged"
              isChecked={hotelData.isHotelFlagged}
              onChange={(e) =>
                setHotelData({ ...hotelData, isHotelFlagged: e.target.checked })
              }
            >
              Flag this Hotel
            </Checkbox>
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Update Hotel
          </Button>
        </Stack>
      </form>{" "}
    </div>
  );
};

export default EditHotelForm;
