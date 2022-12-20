import React from "react";
import { Link } from "react-router-dom";
import { Group } from "@mantine/core";

const Header = () => {
  return (
    <Group position="center" className="header">
      <Link to="/movies">Home</Link>
      <Link to="/movies/favoritemovies">Favorites</Link>
      <Link to="/">Sign Out</Link>
    </Group>
  );
};

export default Header;
