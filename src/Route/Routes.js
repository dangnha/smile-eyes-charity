import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Programs from "../Pages/Programs";
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
        path: "/programs",
        element: <Programs />,
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
