import React from "react";
import { Link } from "react-router-dom";
import { Card, Text, Badge, Button, Group, Flex, Space } from "@mantine/core";
import {
  useDeleteMovieMutation,
  useToggleFavoriteMovieMutation,
} from "../api/apiSlice";
import { openConfirmModal } from "@mantine/modals";

const Movie = ({ movie }) => {
  const [deleteMovie] = useDeleteMovieMutation();
  const [toggleFavoriteMovie] = useToggleFavoriteMovieMutation();

  const openDeleteModal = (id) => {
    openConfirmModal({
      title: "Delete Movie?",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this movie? This action is destructive
          and you will have to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: "Delete Movie", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => deleteMovie(id),
    });
  };

  const handleToggleFavoriteMovie = (id) => {
    toggleFavoriteMovie({ id, favorite: !movie.favorite });
  };
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{movie.title}</Text>
        <Badge color="pink" variant="light">
          {movie.genre}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Space h={"xl"} />
      <Flex gap={"sm"} justify="space-between">
        <Button compact onClick={() => handleToggleFavoriteMovie(movie.id)}>
          {movie.favorite ? "Unlike" : "Like"}
        </Button>
        <Button compact color={"red"} onClick={() => openDeleteModal(movie.id)}>
          Delete
        </Button>
      </Flex>

      <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Show Details{" "}
        </Button>
      </Link>
    </Card>
  );
};

export default Movie;
