import React from "react";
export const EditHotelDataContext = createContext();
// Custom hook to use the Hotel Data context
export const useEditHotelDataContext = () => useContext(EditHotelDataContext);

function EdithotelDataContext({ children }) {
  function hotelDataReducer(state, action) {
    switch (action.type) {
      case "ISHOTELEDITI":
        return {
          ...state,
          isHotelEdited: action.payload,
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    isHotelEdited: false,
  });
  const { isHotelEdited } = state;
  return (
    <EditHotelDataContext.Provider
      value={{
        dispatch,
        isHotelEdited,
      }}
    >
      {children}
    </EditHotelDataContext.Provider>
  );
}

export default EdithotelDataContext;
