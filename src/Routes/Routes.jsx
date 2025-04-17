import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch('booksData.json'),
        },
        {
            path: '/bookDetails/:id',
            loader: () => fetch('booksData.json'),
            Component: BookDetails,
            
        }
    ]

  },
]);
