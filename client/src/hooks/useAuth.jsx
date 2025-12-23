// ===============================
// useAuth Hook (Authentication Helper)
// ===============================

import { useSelector } from "react-redux";

const useAuth = () => {
  // Get user data from Redux auth slice
  const { user } = useSelector((state) => state.auth);

  // Convert user existence into a boolean
  const isAuthenticated = !!user;

  return {
    // True if user is logged in, otherwise false
    isAuthenticated,

    // User role (e.g., "User" or "Admin")
    role: user?.role,
  };
};

export default useAuth;

// ===============================
// TODO: Authentication & Role-Based Routing
// ===============================

// 1️⃣ If the user is NOT logged in or authenticated:
//    → Show the Demo Page

// 2️⃣ If the user IS logged in or authenticated:
//    → Show a dashboard page based on the user's role

//    - If role === "User"
//      → Show User Home Page

//    - If role === "Admin"
//      → Show Admin Dashboard Page

//    - If role is unknown or missing
//      → Fallback to Demo Page

// ===============================
// How It Works
// ===============================

// • useAuth() reads authentication data from Redux
// • It checks whether a user exists
// • It exposes:
//   - isAuthenticated (true / false)
//   - role ("User" or "Admin")

// Rendering Logic:
// • Not authenticated → DemoPage
// • Authenticated + User role → HomePage
// • Authenticated + Admin role → AdminDashboard
// • Unknown role → DemoPage

// ===============================
// SAMPLE CODE: App Routes
// ===============================

/*
import React from "react";
import useAuth from "./useAuth";

// Pages
import DemoPage from "./pages/DemoPage";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";

const AppRoutes = () => {
  const { isAuthenticated, role } = useAuth();

  // User is NOT logged in
  if (!isAuthenticated) {
    return <DemoPage />;
  }

  // User is logged in and is an Admin
  if (role === "Admin") {
    return <AdminDashboard />;
  }

  // User is logged in and is a normal User
  if (role === "User") {
    return <HomePage />;
  }

  // Fallback for unknown or missing role
  return <DemoPage />;
};

export default AppRoutes;
*/
