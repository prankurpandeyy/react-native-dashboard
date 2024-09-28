import { createContext, useContext, useReducer } from "react";

export const HotelRegistrationContext = createContext();
export const useHotelRegistrationContext = () =>
  useContext(HotelRegistrationContext);

function HotelRegistrationPageContext({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "HOTELNAME":
        return { ...state, hotelName: action.payload };
      case "HOTELADDRESS":
        return { ...state, hotelAddress: action.payload };
      case "FOODFACILITY":
        return { ...state, hotelFoodFacility: action.payload }; // boolean true/false
      case "MINRENT":
        return { ...state, hotelRentMin: action.payload };
      case "MAXRENT":
        return { ...state, hotelRentMax: action.payload };
      case "CONTACTNUMBER":
        return { ...state, hotelContact: action.payload };
      case "ROOMTYPE":
        return { ...state, hotelRoomType: action.payload };
      case "LOCATION":
        return { ...state, hotelLocation: action.payload };
      case "PARKING":
        return { ...state, hotelParking: action.payload }; // boolean true/false
      case "OTHERDETAILS":
        return { ...state, hotelDetails: action.payload };
      case "FLAGGED":
        return { ...state, isFlagged: action.payload };
      case "HOTELDATA":
        return { ...state, hotelData: action.payload };
      case "FETCH_HOTEL_DB_RESPONSE":
        return { ...state, hotelDBDataResponse: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFn, {
    hotelName: "",
    hotelAddress: "",
    hotelFoodFacility: "",
    hotelRentMin: "",
    hotelRentMax: "",
    hotelContact: "",
    hotelRoomType: "",
    hotelLocation: "",
    hotelParking: "",
    hotelDetails: "",
    isFlagged: false,
    hotelData: [],
    hotelDBDataResponse: [],
  });

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
    hotelData,
    hotelDBDataResponse,
  } = state;

  console.log(hotelDBDataResponse);
  return (
    <HotelRegistrationContext.Provider
      value={{
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
        hotelData,
        hotelDBDataResponse,
        dispatch,
      }}
    >
      {children}
    </HotelRegistrationContext.Provider>
  );
}

export default HotelRegistrationPageContext;
