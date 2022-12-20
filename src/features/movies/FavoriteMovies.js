import React from "react";
import { useGetMoviesQuery } from "../api/apiSlice";
import { Text, Flex } from "@mantine/core";
import Movie from "./Movie";

const FavoriteMovies = () => {
  const {
    data: favoriteMovies,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMoviesQuery({ favorite: true });
  let content;

  if (isLoading) {
    content = <p>loading</p>;
  } else if (isSuccess) {
    content =
      favoriteMovies.length < 1 ? (
        <Flex justify={"center"}>
          <Text>You have no favorite movies</Text>
        </Flex>
      ) : (
        <div className="card-list">
          {favoriteMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      );
  } else if (isError) {
    content = error;
  }

  return <div>{content}</div>;
};

export default FavoriteMovies;
