// // import toast from "react-hot-toast";
// // import React, { useState, useEffect } from "react";
// // import {
// //   Button,
// //   Input,
// //   Stack,
// //   Checkbox,
// //   RadioGroup,
// //   Radio,
// //   FormControl,
// //   FormLabel,
// // } from "@chakra-ui/react";
// // import { databases } from "../../appwrite";
// // import { useNavigate, useParams } from "react-router-dom";

// // const EditHotelForm = () => {
// //   const { id } = useParams(); // Extract hotelId from route params
// //   const navigate = useNavigate();
// //   const [hotelData, setHotelData] = useState({
// //     hotelName: "",
// //     hotelAddress: "",
// //     hotelType: "",
// //     hotelRentMax: "",
// //     hotelRentMin: "",
// //     hotelContact: "",
// //     hotelLocation: "",
// //     hotelRoomType: "",
// //     hotelFacilties: [],
// //     hotelFeatures: [],
// //     hotelDetails: "",
// //     isHotelFlagged: false,
// //   });

// //   useEffect(() => {
// //     getHotelById(id);
// //   }, [id]); // Dependency array includes id to refetch if id changes

// //   const getHotelById = async (documentId) => {
// //     try {
// //       const response = await databases.getDocument(
// //         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
// //         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
// //         documentId
// //       );

// //       // Map the response to form state
// //       setHotelData({
// //         hotelName: response.HotelName || "",
// //         hotelAddress: response.HotelAddress || "",
// //         hotelType: response.HotelType || "",
// //         hotelRentMax: response.HotelRentMax || "",
// //         hotelRentMin: response.HotelRentMin || "",
// //         hotelContact: response.HotelContact || "",
// //         hotelLocation: response.HotelLocation || "",
// //         hotelRoomType: response.HotelRoomType || "",
// //         hotelFacilties: response.HotelFacilties || [],
// //         hotelFeatures: response.HotelFeatures || [],
// //         hotelDetails: response.HotelDetails || "",
// //         isHotelFlagged: response.isHotelFlagged || false,
// //       });
// //     } catch (error) {
// //       console.error("Error retrieving hotel data:", error);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await databases.updateDocument(
// //         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
// //         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
// //         id,
// //         {
// //           HotelName: hotelData.hotelName,
// //           HotelAddress: hotelData.hotelAddress,
// //           HotelType: hotelData.hotelType,
// //           HotelRentMax: hotelData.hotelRentMax,
// //           HotelRentMin: hotelData.hotelRentMin,
// //           HotelContact: hotelData.hotelContact,
// //           HotelLocation: hotelData.hotelLocation,
// //           HotelRoomType: hotelData.hotelRoomType,
// //           HotelFacilties: hotelData.hotelFacilties,
// //           HotelFeatures: hotelData.hotelFeatures,
// //           HotelDetails: hotelData.hotelDetails,
// //           isHotelFlagged: hotelData.isHotelFlagged,
// //         }
// //       );
// //       // Optionally, show a success message or redirect
// //       console.log("Hotel data updated successfully");
// //       toast.success("Hotel data updated successfully");
// //       navigate("/Dashboard");
// //     } catch (error) {
// //       console.error("Error updating hotel data:", error);
// //     }
// //   };

// //   const handleCheckboxChange = (type, value) => {
// //     setHotelData((prevData) => ({
// //       ...prevData,
// //       [type]: prevData[type].includes(value)
// //         ? prevData[type].filter((item) => item !== value)
// //         : [...prevData[type], value],
// //     }));
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <Stack spacing={4}>
// //           <FormControl id="hotelName">
// //             <FormLabel>Hotel Name</FormLabel>
// //             <Input
// //               name="hotelName"
// //               value={hotelData.hotelName}
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelName: e.target.value })
// //               }
// //             />
// //           </FormControl>

// //           <FormControl id="hotelAddress">
// //             <FormLabel>Hotel Address</FormLabel>
// //             <Input
// //               name="hotelAddress"
// //               value={hotelData.hotelAddress}
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelAddress: e.target.value })
// //               }
// //             />
// //           </FormControl>

// //           <FormControl id="hotelType">
// //             <FormLabel>Food Facility</FormLabel>
// //             <RadioGroup
// //               name="hotelType"
// //               value={hotelData.hotelType}
// //               onChange={(value) =>
// //                 setHotelData({ ...hotelData, hotelType: value })
// //               }
// //             >
// //               <Stack direction="row">
// //                 <Radio value="yes">Yes</Radio>
// //                 <Radio value="no">No</Radio>
// //               </Stack>
// //             </RadioGroup>
// //           </FormControl>

// //           <FormControl id="hotelRent" className="flex gap-2">
// //             <FormLabel>Hotel Rent</FormLabel>
// //             <Input
// //               name="hotelRentMin"
// //               value={hotelData.hotelRentMin}
// //               placeholder="Minimum Rent"
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelRentMin: e.target.value })
// //               }
// //             />
// //             <Input
// //               name="hotelRentMax"
// //               value={hotelData.hotelRentMax}
// //               placeholder="Maximum Rent"
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelRentMax: e.target.value })
// //               }
// //             />
// //           </FormControl>

// //           <FormControl id="hotelContact">
// //             <FormLabel>Contact Number</FormLabel>
// //             <Input
// //               name="hotelContact"
// //               value={hotelData.hotelContact}
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelContact: e.target.value })
// //               }
// //             />
// //           </FormControl>

// //           <FormControl id="hotelLocation">
// //             <FormLabel>Location</FormLabel>
// //             <Input
// //               name="hotelLocation"
// //               value={hotelData.hotelLocation}
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelLocation: e.target.value })
// //               }
// //             />
// //           </FormControl>

// //           <FormControl id="hotelRoomType">
// //             <FormLabel>Room Type</FormLabel>
// //             <RadioGroup
// //               name="hotelRoomType"
// //               value={hotelData.hotelRoomType}
// //               onChange={(value) =>
// //                 setHotelData({ ...hotelData, hotelRoomType: value })
// //               }
// //             >
// //               <Stack direction="row">
// //                 <Radio value="ac">AC</Radio>
// //                 <Radio value="non-ac">Non-AC</Radio>
// //                 <Radio value="both">both(AC/non-AC)</Radio>
// //               </Stack>
// //             </RadioGroup>
// //           </FormControl>

// //           {/* <FormControl id="hotelFacilties">
// //             <FormLabel>Facilities</FormLabel>
// //             <Stack spacing={2}>
// //               <Checkbox
// //                 value="wifi"
// //                 isChecked={hotelData.hotelFacilties.includes("wifi")}
// //                 onChange={() => handleCheckboxChange("hotelFacilties", "wifi")}
// //               >
// //                 WiFi
// //               </Checkbox>
// //               <Checkbox
// //                 value="breakfast"
// //                 isChecked={hotelData.hotelFacilties.includes("breakfast")}
// //                 onChange={() =>
// //                   handleCheckboxChange("hotelFacilties", "breakfast")
// //                 }
// //               >
// //                 Breakfast
// //               </Checkbox>
// //               <Checkbox
// //                 value="dinner"
// //                 isChecked={hotelData.hotelFacilties.includes("dinner")}
// //                 onChange={() =>
// //                   handleCheckboxChange("hotelFacilties", "dinner")
// //                 }
// //               >
// //                 Dinner
// //               </Checkbox>
// //             </Stack>
// //           </FormControl> */}

// //           <FormControl id="hotelFeatures">
// //             <FormLabel>Features</FormLabel>
// //             <Stack spacing={2}>
// //               <Checkbox
// //                 value="parking"
// //                 isChecked={hotelData.hotelFeatures.includes("parking")}
// //                 onChange={() =>
// //                   handleCheckboxChange("hotelFeatures", "parking")
// //                 }
// //               >
// //                 Parking
// //               </Checkbox>
// //               <Checkbox
// //                 value="wifi"
// //                 isChecked={hotelData.hotelFeatures.includes("wifi")}
// //                 onChange={() => handleCheckboxChange("hotelFeatures", "wifi")}
// //               >
// //                 WiFi
// //               </Checkbox>
// //             </Stack>
// //           </FormControl>

// //           <FormControl id="hotelDetails">
// //             <FormLabel>Details</FormLabel>
// //             <Input
// //               name="hotelDetails"
// //               value={hotelData.hotelDetails}
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, hotelDetails: e.target.value })
// //               }
// //             />
// //           </FormControl>

// //           <FormControl id="isHotelFlagged">
// //             <Checkbox
// //               name="isHotelFlagged"
// //               isChecked={hotelData.isHotelFlagged}
// //               onChange={(e) =>
// //                 setHotelData({ ...hotelData, isHotelFlagged: e.target.checked })
// //               }
// //             >
// //               Flag this Hotel
// //             </Checkbox>
// //           </FormControl>

// //           <Button type="submit" colorScheme="blue">
// //             Update Hotel
// //           </Button>
// //         </Stack>
// //       </form>{" "}
// //     </div>
// //   );
// // };

// // export default EditHotelForm;
// import toast from "react-hot-toast";
// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Input,
//   Stack,
//   Checkbox,
//   RadioGroup,
//   Radio,
//   FormControl,
//   FormLabel,
// } from "@chakra-ui/react";
// import { databases } from "../../appwrite";
// import { useNavigate, useParams } from "react-router-dom";

// const EditHotelForm = () => {
//   const { id } = useParams(); // Extract hotelId from route params
//   const navigate = useNavigate();
//   const [hotelData, setHotelData] = useState({
//     hotelName: "",
//     hotelAddress: "",
//     hotelFoodFacility: "",
//     hotelRentMin: "",
//     hotelRentMax: "",
//     hotelContact: "",
//     hotelRoomType: "", // Should be a string like 'yes' or 'no'
//     hotelLocation: "",
//     hotelParking: "",
//     hotelDetails: "",
//     isHotelFlagged: false,
//   });

//   useEffect(() => {
//     getHotelById(id);
//   }, [id]);

//   const getHotelById = async (documentId) => {
//     try {
//       const response = await databases.getDocument(
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//         documentId
//       );

//       setHotelData({
//         hotelName: response.HotelName || "",
//         hotelAddress: response.HotelAddress || "",
//         hotelFoodFacility: response.hotelFoodFacility || [],
//         hotelRentMin: response.HotelRentMin || "",
//         hotelRentMax: response.HotelRentMax || "",
//         hotelContact: response.HotelContact || "",
//         hotelRoomType: response.HotelRoomType || "",
//         hotelLocation: response.HotelLocation || "",
//         hotelParking: response.HotelFeatures || [],
//         hotelDetails: response.HotelDetails || "",
//         isHotelFlagged: response.isHotelFlagged || false,
//       });
//     } catch (error) {
//       console.error("Error retrieving hotel data:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await databases.updateDocument(
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//         id,
//         {
//           HotelName: hotelData.hotelName,
//           HotelAddress: hotelData.hotelAddress,
//           HotelFoodFacility: hotelData.hotelFoodFacility,
//           HotelRentMin: hotelData.hotelRentMin,
//           HotelRentMax: hotelData.hotelRentMax,
//           HotelContact: hotelData.hotelContact,
//           HotelRoomType: hotelData.hotelRoomType,
//           HotelLocation: hotelData.hotelLocation,
//           HotelParking: hotelData.hotelParking,
//           HotelDetails: hotelData.hotelDetails,
//           isHotelFlagged: hotelData.isHotelFlagged,
//         }
//       );
//       toast.success("Hotel data updated successfully");
//       navigate("/Dashboard");
//     } catch (error) {
//       console.error("Error updating hotel data:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           {/* Hotel Name */}
//           <FormControl id="hotelName">
//             <FormLabel>Hotel Name</FormLabel>
//             <Input
//               name="hotelName"
//               value={hotelData.hotelName}
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelName: e.target.value })
//               }
//             />
//           </FormControl>

//           {/* Hotel Address */}
//           <FormControl id="hotelAddress">
//             <FormLabel>Hotel Address</FormLabel>
//             <Input
//               name="hotelAddress"
//               value={hotelData.hotelAddress}
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelAddress: e.target.value })
//               }
//             />
//           </FormControl>

//           {/* Food Facility RadioGroup */}
//           <FormControl id="hotelFoodFacility">
//             <FormLabel>Food Facility</FormLabel>
//             <Input
//               name="hotelFoodFacility"
//               value={hotelData.hotelFoodFacility}
//               onChange={(e) =>
//                 setHotelData({
//                   ...hotelData,
//                   hotelFoodFacility: e.target.value,
//                 })
//               }
//             />
//           </FormControl>

//           {/* Hotel Rent */}
//           <FormControl id="hotelRent" className="flex gap-2">
//             <FormLabel>Hotel Rent</FormLabel>
//             <Input
//               name="hotelRentMin"
//               value={hotelData.hotelRentMin}
//               placeholder="Minimum Rent"
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelRentMin: e.target.value })
//               }
//             />
//             <Input
//               name="hotelRentMax"
//               value={hotelData.hotelRentMax}
//               placeholder="Maximum Rent"
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelRentMax: e.target.value })
//               }
//             />
//           </FormControl>

//           {/* Room Type RadioGroup */}
//           <FormControl id="hotelRoomType">
//             <FormLabel>Room Type</FormLabel>

//             <Input
//               name="hotelRoomType"
//               value={hotelData.hotelRoomType}
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelRoomType: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotelParking">
//             <FormLabel>Parking </FormLabel>

//             <Input
//               name="hotelParking"
//               value={hotelData.hotelParking}
//               placeholder="Hotel Parking"
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelParking: e.target.value })
//               }
//             />
//           </FormControl>

//           <FormControl id="hotelDetails">
//             <FormLabel>Details</FormLabel>
//             <Input
//               name="hotelDetails"
//               value={hotelData.hotelDetails}
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, hotelDetails: e.target.value })
//               }
//             />
//           </FormControl>

//           {/* Hotel Flag */}
//           <FormControl id="isHotelFlagged">
//             <Checkbox
//               name="isHotelFlagged"
//               isChecked={hotelData.isHotelFlagged}
//               onChange={(e) =>
//                 setHotelData({ ...hotelData, isHotelFlagged: e.target.checked })
//               }
//             >
//               Flag this Hotel
//             </Checkbox>
//           </FormControl>

//           {/* Submit Button */}
//           <Button type="submit" colorScheme="blue">
//             Update Hotel
//           </Button>
//         </Stack>
//       </form>
//     </div>
//   );
// };

// export default EditHotelForm;

import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Stack,
  Checkbox,
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
    hotelFoodFacility: "", // Simple input for food facility
    hotelRentMin: "",
    hotelRentMax: "",
    hotelContact: "",
    hotelRoomType: "",
    hotelLocation: "",
    hotelParking: "", // Simple input for parking
    hotelDetails: "",
    isHotelFlagged: false,
  });

  useEffect(() => {
    getHotelById(id);
  }, [id]);

  const getHotelById = async (documentId) => {
    try {
      const response = await databases.getDocument(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
        documentId
      );

      setHotelData({
        hotelName: response.HotelName || "",
        hotelAddress: response.HotelAddress || "",
        hotelFoodFacility: response.HotelFoodFacility || "", // Ensure the key matches your data structure
        hotelRentMin: response.HotelRentMin || "",
        hotelRentMax: response.HotelRentMax || "",
        hotelContact: response.HotelContact || "",
        hotelRoomType: response.HotelRoomType || "",
        hotelLocation: response.HotelLocation || "",
        hotelParking: response.HotelParking || "", // Ensure the key matches your data structure
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
          HotelFoodFacility: hotelData.hotelFoodFacility, // Ensure the key matches your data structure
          HotelRentMin: hotelData.hotelRentMin,
          HotelRentMax: hotelData.hotelRentMax,
          HotelContact: hotelData.hotelContact,
          HotelRoomType: hotelData.hotelRoomType,
          HotelLocation: hotelData.hotelLocation,
          HotelParking: hotelData.hotelParking, // Ensure the key matches your data structure
          HotelDetails: hotelData.hotelDetails,
          isHotelFlagged: hotelData.isHotelFlagged,
        }
      );
      toast.success("Hotel data updated successfully");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error updating hotel data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          {/* Hotel Name */}
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

          {/* Hotel Address */}
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

          {/* Food Facility */}
          <FormControl id="hotelFoodFacility">
            <FormLabel>Food Facility</FormLabel>
            <Input
              name="hotelFoodFacility"
              value={hotelData.hotelFoodFacility}
              placeholder="Type Yes or No If food is availble or not"
              onChange={(e) =>
                setHotelData({
                  ...hotelData,
                  hotelFoodFacility: e.target.value,
                })
              }
            />
          </FormControl>

          {/* Hotel Rent */}
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

          {/* Room Type */}
          <FormControl id="hotelRoomType">
            <FormLabel>Room Type</FormLabel>
            <Input
              name="hotelRoomType"
              placeholder="Type AC,non-AC or Both"
              value={hotelData.hotelRoomType}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelRoomType: e.target.value })
              }
            />
          </FormControl>
          {/* hotel location */}
          <FormControl id="hotelRoomType">
            <FormLabel>Location </FormLabel>
            <Input
              name="hotelRoomType"
              placeholder="Type Location"
              value={hotelData.hotelLocation}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelLocation: e.target.value })
              }
            />
          </FormControl>

          {/* Parking */}
          <FormControl id="hotelParking">
            <FormLabel>Parking</FormLabel>
            <Input
              name="hotelParking"
              placeholder="Type Yes or No"
              value={hotelData.hotelParking}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelParking: e.target.value })
              }
            />
          </FormControl>

          {/* Hotel Details */}
          <FormControl id="hotelDetails">
            <FormLabel>Details</FormLabel>
            <Input
              name="hotelDetails"
              placeholder="Type Other Details like website"
              value={hotelData.hotelDetails}
              onChange={(e) =>
                setHotelData({ ...hotelData, hotelDetails: e.target.value })
              }
            />
          </FormControl>

          {/* Hotel Flag */}
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

          {/* Submit Button */}
          <Button type="submit" colorScheme="blue">
            Update Hotel
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default EditHotelForm;
