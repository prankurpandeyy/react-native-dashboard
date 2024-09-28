import { Client, Account, Databases, Query } from "appwrite";
import toast from "react-hot-toast";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_MY_APPWRITE_HOTEL_PROJECT_URL) // Your Appwrite endpoint from .env
  .setProject(import.meta.env.VITE_MY_APPWRITE_HOTEL_PROJECT_ID); // Your project ID from .env

const account = new Account(client);
const databases = new Databases(client);

const logout = async () => {
  try {
    await account.deleteSession("current");
    toast.success("User logged out"); // Deletes the current session
  } catch (error) {
    console.error("Error logging out:", error);
    toast.error("An error occurred. Please try again later.");
  }
};

export { account, logout, databases, Query };
