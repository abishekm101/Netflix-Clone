import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute, { ProtectedRouteUser } from "./ProtectedRoute";
import Loading from "../Pages/Loading";
import Search from "../Pages/Search";
const InPage = lazy(() => import("../Pages/InPage"));
const Layout = lazy(() => import("../Pages/Layout"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const SignUpPage = lazy(() => import("../Pages/SignUpPage"));
const Account = lazy(() => import("../Pages/Account"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteUser>
              <InPage />
            </ProtectedRouteUser>
          </Suspense>
        }
      />
      <Route
        path="/SignUp"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteUser>
              <SignUpPage />
            </ProtectedRouteUser>
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteUser>
              <LoginPage />
            </ProtectedRouteUser>
          </Suspense>
        }
      />
      <Route
        path="/Home"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/Account"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          </Suspense>
        }
      />

      <Route
        path="/Search"
        element={
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
