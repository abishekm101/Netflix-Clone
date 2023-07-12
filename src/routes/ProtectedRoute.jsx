import React from "react";
import { UseAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = UseAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
export const ProtectedRouteUser = ({ children }) => {
  const { user } = UseAuth();
  if (user) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
