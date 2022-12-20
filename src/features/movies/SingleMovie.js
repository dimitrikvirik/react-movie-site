import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Text, Flex, Button, Space } from "@mantine/core";
import { useGetSingleMovieQuery } from "../api/apiSlice";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: movie,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleMovieQuery(id);
  let content;

  if (isLoading) {
    content = <p>loading</p>;
  } else if (isSuccess) {
    content = (
      <Flex justify={"center"}>
        <div>
          <Text>Title: {movie.title}</Text>
          <Text>Release year: {movie.year}</Text>
        </div>
      </Flex>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return (
    <>
      {content}
      <Space h={"xl"} />
      <Flex justify={"center"}>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Flex>
    </>
  );
};

export default SingleMovie;
