import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page, limit = 4, genre = "", favorite }) => {
        return {
          url: `/movies`,
          params: {
            _page: page,
            _limit: limit,
            genre: genre || undefined,
            favorite: favorite ? true : undefined,
          },
        };
      },
      providesTags: ["Movies"],
    }),
    getSingleMovie: builder.query({
      query: (id) => `/movies/${id}`,
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `/movies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Movies"],
    }),
    toggleFavoriteMovie: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/movies/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Movies"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSingleMovieQuery,
  useDeleteMovieMutation,
  useToggleFavoriteMovieMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
} = apiSlice;
