// import React, { useEffect, useState } from "react";
// import Header from "../Components/Header";
// import ViewData from "../Components/ViewData";
// import HotelForm from "../Components/HotelForm";
// import { databases, Query } from "../../appwrite";
// import { getAllHotelData } from "../../Services/services";
// import { useHotelRegistrationContext } from "../Context/HotelRegistrationPageContext";
// import { useToast } from "@chakra-ui/react";
// import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";
// function Viewdashboard() {
//   const navigate = useNavigate();
//   const {
//     hotelName,
//     hotelAddress,
//     hotelFoodFacility,
//     hotelRentMin,
//     hotelRentMax,
//     hotelContact,
//     hotelRoomType,
//     hotelLocation,
//     hotelParking,
//     hotelDetails,
//     isFlagged,
//     dispatch,
//     hotelData,
//     hotelDBDataResponse,
//   } = useHotelRegistrationContext();
//   const toast = useToast();

//   useEffect(() => {
//     // Fetch all hotels initially
//     fetchHotels();
//     const token = localStorage.getItem("cookieFallback");

//     if (!token) {
//       toast.error("Please login first");
//       navigate("/Loginpage");
//     }
//   }, []);

//   const fetchHotels = async () => {
//     try {
//       const data = await databases.listDocuments(
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID
//       );
//       dispatch({ type: "FETCH_HOTEL_DB_RESPONSE", payload: data.documents });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       toast({
//         title: "Failed to fetch hotels",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }

//     // Page 1
//     const page1 = await databases.listDocuments(
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//       [Query.limit(25), Query.offset(0)]
//     );
//     console.log("🚀 ~ fetchHotels ~ page1:", page1);

//     const page2 = await databases.listDocuments(
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//       [Query.limit(25), Query.offset(25)]
//     );
//     console.log("🚀 ~ fetchHotels ~ page2:", page2);

//     const page3 = await databases.listDocuments(
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//       [Query.limit(25), Query.offset(50)]
//     );
//     console.log("🚀 ~ fetchHotels ~ page3:", page3);
//     const page4 = await databases.listDocuments(
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//       import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//       [Query.limit(50), Query.offset(75)]
//     );
//     console.log("🚀 ~ fetchHotels ~ page4:", page4);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const documentId = uuidv4(); // Unique ID for the document

//     try {
//       await databases.createDocument(
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//         documentId,
//         {
//           HotelName: hotelName,
//           HotelAddress: hotelAddress,
//           HotelFoodFacility: hotelFoodFacility,
//           HotelRentMin: hotelRentMin,
//           HotelRentMax: hotelRentMax,
//           HotelContact: hotelContact,
//           HotelLocation: hotelLocation,
//           HotelRoomType: hotelRoomType,
//           HotelParking: hotelParking,
//           HotelDetails: hotelDetails,
//           isHotelFlagged: isFlagged,
//         }
//       );
//       toast({
//         title: "Hotel created successfully",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//       fetchHotels(); // Refresh the hotel list
//       clearForm(); // Clear the form fields
//     } catch (error) {
//       console.error("Failed to create hotel:", error);
//       toast({
//         title: "Failed to create hotel",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleDeleteHotel = async (id) => {
//     try {
//       await databases.deleteDocument(
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//         import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//         id
//       );
//       toast({
//         title: "Hotel deleted successfully",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//       fetchHotels(); // Refresh the hotel list
//     } catch (error) {
//       console.error("Failed to delete hotel:", error);
//       toast({
//         title: "Failed to delete hotel",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleClearAllHotels = async () => {
//     try {
//       for (const hotel of hotelDBDataResponse) {
//         await databases.deleteDocument(
//           import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
//           import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
//           hotel.$id
//         );
//       }
//       toast({
//         title: "All hotels deleted successfully",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//       fetchHotels(); // Refresh the hotel list
//     } catch (error) {
//       console.error("Failed to delete all hotels:", error);
//       toast({
//         title: "Failed to delete all hotels",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const clearForm = () => {
//     dispatch({ type: "HOTELNAME", payload: "" });
//     dispatch({ type: "HOTELADDRESS", payload: "" });
//     dispatch({ type: "MINRENT", payload: "" });
//     dispatch({ type: "MAXRENT", payload: "" });
//     dispatch({ type: "CONTACTNUMBER", payload: "" });
//     dispatch({ type: "LOCATION", payload: "" });
//     dispatch({ type: "OTHERDETAILS", payload: "" });
//     dispatch({ type: "FLAGGED", payload: false });
//     dispatch({ type: "FACILITIES", payload: [] });
//     dispatch({ type: "FEATURES", payload: [] });
//   };
//   console.log(hotelDBDataResponse);

//   function editHotel() {
//     navigate("/edithotel");
//   }

//   return (
//     <div>
//       <Header />
//       <HotelForm clearForm={clearForm} handleSubmit={handleSubmit} />
//       <ViewData
//         hotelDBDataResponse={hotelDBDataResponse}
//         handleSubmit={handleSubmit}
//         handleDeleteHotel={handleDeleteHotel}
//         handleClearAllHotels={handleClearAllHotels}
//         clearForm={clearForm}
//         editHotel={editHotel}
//       />
//     </div>
//   );
// }

// export default Viewdashboard;
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ViewData from "../Components/ViewData";
import HotelForm from "../Components/HotelForm";
import { databases, Query } from "../../appwrite";
import { useHotelRegistrationContext } from "../Context/HotelRegistrationPageContext";
import { useToast, HStack, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Viewdashboard() {
  const navigate = useNavigate();
  const { dispatch, hotelDBDataResponse } = useHotelRegistrationContext();
  const toast = useToast();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 25; // Hotels per page

  useEffect(() => {
    // Fetch the hotels for the current page
    fetchHotels(currentPage);

    const token = localStorage.getItem("cookieFallback");
    if (!token) {
      toast.error("Please login first");
      navigate("/Loginpage");
    }
  }, [currentPage]);

  const fetchHotels = async (page) => {
    const offset = (page - 1) * pageSize;

    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
        [Query.limit(pageSize), Query.offset(offset)]
      );

      dispatch({
        type: "FETCH_HOTEL_DB_RESPONSE",
        payload: response.documents,
      });

      // Calculate total pages (assuming total count is available in response)
      setTotalPages(Math.ceil(response.total / pageSize));
    } catch (error) {
      console.error("Error fetching hotels:", error);
      toast({
        title: "Failed to fetch hotels",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const documentId = uuidv4(); // Unique ID for the document

    try {
      await databases.createDocument(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
        documentId,
        {
          HotelName: hotelName,
          HotelAddress: hotelAddress,
          HotelFoodFacility: hotelFoodFacility,
          HotelRentMin: hotelRentMin,
          HotelRentMax: hotelRentMax,
          HotelContact: hotelContact,
          HotelLocation: hotelLocation,
          HotelRoomType: hotelRoomType,
          HotelParking: hotelParking,
          HotelDetails: hotelDetails,
          isHotelFlagged: isFlagged,
        }
      );
      toast({
        title: "Hotel created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      fetchHotels(currentPage); // Refresh the hotel list for current page
      clearForm(); // Clear the form fields
    } catch (error) {
      console.error("Failed to create hotel:", error);
      toast({
        title: "Failed to create hotel",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDeleteHotel = async (id) => {
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
        import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID,
        id
      );
      toast({
        title: "Hotel deleted successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      fetchHotels(currentPage); // Refresh the hotel list for current page
    } catch (error) {
      console.error("Failed to delete hotel:", error);
      toast({
        title: "Failed to delete hotel",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const clearForm = () => {
    dispatch({ type: "HOTELNAME", payload: "" });
    dispatch({ type: "HOTELADDRESS", payload: "" });
    dispatch({ type: "MINRENT", payload: "" });
    dispatch({ type: "MAXRENT", payload: "" });
    dispatch({ type: "CONTACTNUMBER", payload: "" });
    dispatch({ type: "LOCATION", payload: "" });
    dispatch({ type: "OTHERDETAILS", payload: "" });
    dispatch({ type: "FLAGGED", payload: false });
    dispatch({ type: "FACILITIES", payload: [] });
    dispatch({ type: "FEATURES", payload: [] });
  };

  const editHotel = () => {
    navigate("/edithotel");
  };

  // Pagination controls
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <HotelForm clearForm={clearForm} handleSubmit={handleSubmit} />
      <ViewData
        hotelDBDataResponse={hotelDBDataResponse}
        handleSubmit={handleSubmit}
        handleDeleteHotel={handleDeleteHotel}
        clearForm={clearForm}
        editHotel={editHotel}
      />
      <HStack justifyContent="center" mt={4}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </div>
  );
}

export default Viewdashboard;
