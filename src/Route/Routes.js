import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Programs from "../Pages/Programs";
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Sponsor from "../Pages/Sponsor"
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
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sponsor",
        element: <Sponsor />,
      }
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
