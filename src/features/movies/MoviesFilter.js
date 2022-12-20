import React from "react";
import { Select } from "@mantine/core";

const MoviesFilter = ({ onGenreChange }) => {
  return (
    <div>
      <Select
        label="Choose Genre"
        placeholder="Pick one"
        data={[
          { value: "Adventure", label: "Adventure" },
          { value: "Comedy", label: "Comedy" },
          { value: "Thriller", label: "Thriller" },
          { value: "Musical", label: "Musical" },
          { value: "Detective", label: "Detective" },
        ]}
        onChange={(e) => onGenreChange(e)}
      />
    </div>
  );
};

export default MoviesFilter;
