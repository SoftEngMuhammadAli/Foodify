import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../components/common/NavHeader";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <>
      <NavHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
