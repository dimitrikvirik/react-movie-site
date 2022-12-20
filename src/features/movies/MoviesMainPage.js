import React, { useState } from "react";
import { Container } from "@mantine/core";
import Movies from "./Movies";
import MoviesFilter from "./MoviesFilter";

const MoviesMainPage = () => {
  const [genre, setGenre] = useState("");

  const handleGenreChange = (g) => {
    setGenre(g);
  };
  return (
    <Container size={"md"}>
      <div className="movies-main-page">
        <MoviesFilter onGenreChange={handleGenreChange} />
        <Movies genre={genre} />
      </div>
    </Container>
  );
};

export default MoviesMainPage;
