import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_MY_APPWRITE_HOTEL_PROJECT_URL) // Your Appwrite endpoint from .env
  .setProject(import.meta.env.VITE_MY_APPWRITE_HOTEL_PROJECT_ID); // Your project ID from .env

const account = new Account(client);

export { account };
