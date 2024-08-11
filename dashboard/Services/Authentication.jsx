import React from "react";

import { Navigate, useLocation } from "react-router-dom";

function Authentication({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("cookieFallback");
  return token ? (
    children
  ) : (
    <Navigate to="/Loginpage" state={{ from: location }} replace />
  );
}

export default Authentication;
