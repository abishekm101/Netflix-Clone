import React from "react";
import { Routes, Route } from "react-router-dom";
import InPage from "../Pages/InPage";
import Layout from "../Pages/Layout";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import Account from "../Pages/Account";
import ProtectedRoute, { ProtectedRouteUser } from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouteUser>
            <InPage />
          </ProtectedRouteUser>
        }
      />
      <Route
        path="/SignUp"
        element={
          <ProtectedRouteUser>
            <SignUpPage />
          </ProtectedRouteUser>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRouteUser>
            <LoginPage />
          </ProtectedRouteUser>
        }
      />
      <Route
        path="/Home"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
