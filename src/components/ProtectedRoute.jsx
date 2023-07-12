import React from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = UseAuth();
  const Navigate = useNavigate();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
