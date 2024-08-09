import { databases } from "../appwrite";

export const getAllHotelData = async (dispatch) => {
  try {
    const data = await databases.listDocuments(
      import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABASE_ID,
      import.meta.env.VITE_MY_APPWRITE_PROJECT_DATABSE_COLLECTION_ID
    );
    dispatch({ type: "FETCH_HOTEL_DB_RESPONSE", payload: data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
