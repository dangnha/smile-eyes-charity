import React from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Layout from "../Components/Layout";

const router = createBrowserRouter([
  // {
  //   path: "/home",
  //   component: Home,
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      // {
      //   path: "/project/feed",
      //   component: Feed,
      // },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
