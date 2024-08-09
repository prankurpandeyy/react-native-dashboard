import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ViewData from "../Components/ViewData";
import HotelForm from "../Components/HotelForm";
import { databases } from "../../appwrite";
import { getAllHotelData } from "../../Services/services";
import { useHotelRegistrationContext } from "../Context/HotelRegistrationPageContext";
function Viewdashboard() {
  const { dispatch, hotelDBDataRespnse } = useHotelRegistrationContext();
  console.log("🚀 ~ Viewdashboard ~ hotelDBDataRespnse:", hotelDBDataRespnse);

  useEffect(() => {
    getAllHotelData(dispatch);
  });

  return (
    <div>
      <Header />
      <HotelForm />
      <ViewData />
    </div>
  );
}

export default Viewdashboard;
