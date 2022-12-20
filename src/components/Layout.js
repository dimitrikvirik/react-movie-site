import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";
import Header from "./Header";

const Layout = () => {
  return (
    <Container size={"md"} style={{ marginBottom: "5rem" }}>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
