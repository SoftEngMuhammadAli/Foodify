import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../components/common/NavHeader";

const MainLayout = () => {
  return (
    <React.Fragment>
      <NavHeader />
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
