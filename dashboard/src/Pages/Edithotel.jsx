import React from "react";
import Header from "../Components/Header";
import EditHotelForm from "../Components/EditHotelForm";

function Edithotel() {
  return (
    <div className="w-full bg-slate-300">
      <Header />
      <div className="flex flex-col items-center w-2/5 h-auto p-2 my-4 mx-auto border-4 border-yellow-200 mb-4 rounded-[5px] bg-gray-500">
        <EditHotelForm />
      </div>
    </div>
  );
}

export default Edithotel;
