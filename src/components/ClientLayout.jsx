// src/components/ClientLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function ClientLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ClientLayout;
