import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import Root from "./routes/Root";
import FavoriteMovies from "./features/movies/FavoriteMovies";
import MoviesMainPage from "./features/movies/MoviesMainPage";
import SingleMovie from "./features/movies/SingleMovie";
import Layout from "./components/Layout";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/movies",
    element: <Layout />,
    children: [
      {
        path: "/movies",
        element: <MoviesMainPage />,
      },
      {
        path: "/movies/:id",
        element: <SingleMovie />,
      },
      {
        path: "/movies/favoritemovies",
        element: <FavoriteMovies />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
        <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
