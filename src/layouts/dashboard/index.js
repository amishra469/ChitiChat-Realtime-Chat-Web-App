import React from "react";
import { Stack } from "@mui/material";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Stack direction="row">
        <SideNav />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
