// create context file for hotel registration
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
      case "HOTELTYPE":
        return { ...state, hotelType: action.payload };
      case "MINRENT":
        return { ...state, hotelRentMin: action.payload };
      case "MAXRENT":
        return { ...state, hotelRentMax: action.payload };
      case "CONTACTNUMBER":
        return { ...state, hotelContact: action.payload };
      case "LOCATION":
        return { ...state, hotelLocation: action.payload };
      case "ROOMTYPE":
        return { ...state, hotelRoomType: action.payload };
      case "FACILITIES":
        return {
          ...state,
          hotelFacilties: state.hotelFacilties.includes(action.payload)
            ? state.hotelFacilties.filter((item) => item !== action.payload)
            : [...state.hotelFacilties, action.payload],
        };
      case "FEATURES":
        return {
          ...state,
          hotelFeatures: state.hotelFeatures.includes(action.payload)
            ? state.hotelFeatures.filter((item) => item !== action.payload)
            : [...state.hotelFeatures, action.payload],
        };
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
    hotelType: "", // Default to empty string
    hotelRentMin: "",
    hotelRentMax: "",
    hotelContact: "",
    hotelLocation: "",
    hotelRoomType: "", // Default to empty string
    hotelFacilties: [],
    hotelFeatures: [],
    hotelDetails: "",
    isFlagged: false,
    hotelData: [],
    hotelDBDataResponse: [],
  });

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
    hotelData,
    hotelDBDataResponse,
  } = state;

  return (
    <HotelRegistrationContext.Provider
      value={{
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
        hotelData,
        hotelDBDataResponse,
      }}
    >
      {children}
    </HotelRegistrationContext.Provider>
  );
}

export default HotelRegistrationPageContext;
