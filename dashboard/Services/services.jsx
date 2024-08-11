import toast from "react-hot-toast";
import { databases } from "../appwrite";
// get all hotels
export const getAllHotelData = async (dispatch) => {
  try {
    const data = await databases.listDocuments(
      import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
      import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID
    );

    dispatch({ type: "FETCH_HOTEL_DB_RESPONSE", payload: data.documents });
    toast.success("Hotel data fetched successfully");
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error("Failed to fetch hotel data");
  }
};
// delete hotels
export const deleteHotel = async (hotelId) => {
  try {
    const response = await databases.deleteDocument(
      import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID, // Database ID
      import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID, // Collection ID
      hotelId // Document ID (hotel ID)
    );
    console.log("Hotel deleted successfully:", response);
    toast.success("Hotel deleted successfully");
  } catch (error) {
    console.error("Failed to delete hotel:", error);
    toast.error("Failed to delete hotel");
  }
};
