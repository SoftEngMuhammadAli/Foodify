import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/app/auth/Login";
import SignUpPage from "../pages/app/auth/SignUp";
import RestaurantsPage from "../pages/app/restaurants";
import MainLayout from "../layouts/MainLayout";
import ContactUs from "../components/app/ContactUs";
import Offers from "../components/app/offers";
import HomePage from "../pages/app/main/HomePage";
import { DemoPage } from "../pages/app/DemoPage";
import AdminDashboard from "../pages/app/admin/AdminDashboard";

import useAuth from "../hooks/useAuth";

function App() {
  const { isAuthenticated, role } = useAuth();

  return (
    <Routes>
      {/* Public / Demo */}
      {!isAuthenticated && (
        <>
          <Route path="/" element={<DemoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </>
      )}

      {/* Admin Routes */}
      {isAuthenticated && role === "Admin" && (
        <>
          <Route path="/" element={<AdminDashboard />} />
        </>
      )}

      {/* User Routes */}
      {isAuthenticated && role === "User" && (
        <>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
