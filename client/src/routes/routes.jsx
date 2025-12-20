import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/app/auth/Login";
import App from "../App";
import SignUpPage from "../pages/app/auth/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />

      {/* Future routes */}
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
    </Routes>
  );
};

export default AppRoutes;
