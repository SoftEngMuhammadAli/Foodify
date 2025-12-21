import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/app/auth/Login";
import SignUpPage from "../pages/app/auth/SignUp";
import RestaurantsPage from "../pages/app/restaurants";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/app/HomePage";
import ContactUs from "../components/app/ContactUs";
import Offers from "../components/app/offers";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes WITH NavHeader */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      {/* Routes WITHOUT NavHeader */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
