import React from "react";
import Homepage from "./Pages/Homepage";
import Viewdashboard from "./Pages/Viewdashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        <Route exact path="/dashboard" element={<Viewdashboard />} />
      </Routes>
    </div>
  );
}

export default App;
