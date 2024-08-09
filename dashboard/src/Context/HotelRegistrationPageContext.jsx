// // create context file for hotel registration
// import { createContext, useContext, useReducer } from "react";
// export const HotelRegistrationContext = createContext();
// export const useHotelRegistrationContext = () =>
//   useContext(HotelRegistrationContext);

// function HotelRegistrationPageContext({ children }) {
//   function reducerFn(state, action) {
//     switch (action.type) {
//       case "HOTELNAME":
//         return { ...state, hotelName: action.payload };
//       case "HOTELADDRESS":
//         return { ...state, hotelAddress: action.payload };
//       case "HOTELTYPE":
//         return { ...state, hotelType: action.payload };
//       case "RENT":
//         return { ...state, hotelRent: action.payload };
//       case "CONTACTNUMBER":
//         return { ...state, contactNumber: action.payload };
//       case "LOCATION":
//         return { ...state, location: action.payload };
//       case "ROOMTYPE":
//         return { ...state, roomType: action.payload };
//       case "FACILITIES":
//         return { ...state, facilities: action.payload };
//       case "FEATURES":
//         return { ...state, features: action.payload };
//       case "OTHERDETAILS":
//         return { ...state, otherDetails: action.payload };
//       case "FLAGGED":
//         return { ...state, isFlagged: action.payload };
//       default:
//         return state;
//     }
//   }
//   const [state, dispatch] = useReducer(reducerFn, {
//     hotelName: "",
//     hotelAddress: "",
//     hotelType: "",
//     hotelRent: "",
//     contactNumber: "",
//     location: "",
//     roomType: "",
//     facilities: [],
//     features: [],
//     otherDetails: "",
//     isFlagged: false,
//   });
//   const {
//     hotelName,
//     hotelAddress,
//     hotelType,
//     hotelRent,
//     contactNumber,
//     location,
//     roomType,
//     facilities,
//     features,
//     otherDetails,
//     isFlagged,
//   } = state;
//   return (
//     <div>
//       <HotelRegistrationContext.Provider
//         value={{
//           hotelName,
//           hotelAddress,
//           hotelType,
//           hotelRent,
//           contactNumber,
//           location,
//           roomType,
//           facilities,
//           features,
//           otherDetails,
//           isFlagged,
//           dispatch,
//         }}
//       >
//         {children}
//       </HotelRegistrationContext.Provider>
//     </div>
//   );
// }

// export default HotelRegistrationPageContext;
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
      case "RENT":
        return { ...state, hotelRent: action.payload };
      case "CONTACTNUMBER":
        return { ...state, contactNumber: action.payload };
      case "LOCATION":
        return { ...state, location: action.payload };
      case "ROOMTYPE":
        return { ...state, roomType: action.payload };
      case "FACILITIES":
        return {
          ...state,
          facilities: state.facilities.includes(action.payload)
            ? state.facilities.filter((item) => item !== action.payload)
            : [...state.facilities, action.payload],
        };
      case "FEATURES":
        return {
          ...state,
          features: state.features.includes(action.payload)
            ? state.features.filter((item) => item !== action.payload)
            : [...state.features, action.payload],
        };
      case "OTHERDETAILS":
        return { ...state, otherDetails: action.payload };
      case "FLAGGED":
        return { ...state, isFlagged: action.payload };
      case "HOTELDATA":
        return { ...state, hotelData: action.payload };
      case "FETCH_HOTEL_DB_RESPONSE":
        return { ...state, hotelDBDataRespnse: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFn, {
    hotelName: "",
    hotelAddress: "",
    hotelType: "", // Default to empty string
    hotelRent: "",
    contactNumber: "",
    location: "",
    roomType: "", // Default to empty string
    facilities: [],
    features: [],
    otherDetails: "",
    isFlagged: false,
    hotelData: [],
    hotelDBDataRespnse: [],
  });

  const {
    hotelName,
    hotelAddress,
    hotelType,
    hotelRent,
    contactNumber,
    location,
    roomType,
    facilities,
    features,
    otherDetails,
    isFlagged,
    hotelData,hotelDBDataRespnse
  } = state;

  return (
    <HotelRegistrationContext.Provider
      value={{
        hotelName,
        hotelAddress,
        hotelType,
        hotelRent,
        contactNumber,
        location,
        roomType,
        facilities,
        features,
        otherDetails,
        isFlagged,
        dispatch,
        hotelData,
        hotelDBDataRespnse
      }}
    >
      {children}
    </HotelRegistrationContext.Provider>
  );
}

export default HotelRegistrationPageContext;
