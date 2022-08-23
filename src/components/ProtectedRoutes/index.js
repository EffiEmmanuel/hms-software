import React from "react";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const token = sessionStorage.getItem("internistikaLoginToken");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
