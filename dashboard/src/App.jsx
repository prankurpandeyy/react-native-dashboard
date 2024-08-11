import React from "react";
import Homepage from "./Pages/Homepage";
import Viewdashboard from "./Pages/Viewdashboard";
import Loginpage from "./Pages/Loginpage";
import { Route, Routes } from "react-router-dom";
import HotelManagement from "./Components/EditHotelForm";
import Authentication from "../Services/Authentication";
import Edithotel from "./Pages/Edithotel";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Loginpage" element={<Loginpage />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Authentication>
              <Viewdashboard />
            </Authentication>
          }
        />
        <Route
          exact
          path="/edithotel"
          element={
            <Authentication>
              <Edithotel />
            </Authentication>
          }
        />

        <Route
          exact
          path="/edithotel/:id"
          element={
            <Authentication>
              <Edithotel />
            </Authentication>
          }
        />
        <Route exact path="/hotelmanagement" element={<HotelManagement />} />
      </Routes>
    </div>
  );
}

export default App;
