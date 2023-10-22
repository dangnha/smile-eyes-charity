import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Programs from "../Pages/Programs";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sponsor from "../Pages/Sponsor";
import Layout from "../Components/Layout";
import UserItemsProfile from "../Components/UserItemsProfile/UserItemsProfile";
import ContactForm from "../Components/Item/ContactForm";
import Button from "../Components/Button/Button";
import NormalBtn from "../Components/Button/NormalBtn";

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
      },
    ],
  },
  {
    path: "/useritem",
    element: (
      <UserItemsProfile
        name="dangnha"
        position="Student"
        url_Image="gmail.png"
        address="Da Nang"
      />
    ),
  },
  {
    path: "/contactForm",
    element: <ContactForm />,
  },
  {
    path: "/button",
    element: <Button text="Join now" />,
  },
  {
    path: "/button1",
    element: <NormalBtn text="Join now" />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
