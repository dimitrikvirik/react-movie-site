import React, { useState } from "react";
import { Flex, Pagination, Space } from "@mantine/core";
import Movie from "./Movie";
import { useGetMoviesQuery } from "../api/apiSlice";

const Movies = ({ genre }) => {
  const [page, setPage] = useState(1);
  const {
    data: movies,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetMoviesQuery({ page, genre });

  let content;

  if (isLoading) {
    content = "";
  } else if (isSuccess) {
    content = movies.map((movie) => <Movie key={movie.id} movie={movie} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <Flex align={"center"} direction="column">
      <div className="card-list">{content}</div>
      <Space h={"xl"} />
      <Pagination total={6} onChange={(p) => setPage(p)} />
    </Flex>
  );
};

export default Movies;
