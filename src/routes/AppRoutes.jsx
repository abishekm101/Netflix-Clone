import React from "react";
import { Routes, Route } from "react-router-dom";
import InPage from "../Pages/InPage";
import Layout from "../Pages/Layout";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import Account from "../Pages/Account";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/in/login" element={<LoginPage />} />
      <Route path="/Home" element={<Layout />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Home/Account" element={<Account />} />
    </Routes>
  );
};

export default AppRoutes;
