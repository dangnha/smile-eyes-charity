import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Programs from "../Pages/Programs/Programs";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sponsor from "../Pages/Sponsor";
import Layout from "../Components/Layout";
import UserItemsProfile from "../Components/UserItemsProfile/UserItemsProfile";
import ContactForm from "../Components/Item/ContactForm";
import Button from "../Components/Button/Button";
import NormalBtn from "../Components/Button/NormalBtn";
import ProgramItem from "../Components/Item/program_item/ProgramItem";
import LargeProgramItem from "../Components/Item/program_item/LargeProgramItem";
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
  {
    path: "/item",
    element: (
      <ProgramItem
        title="Teaching children"
        date="22/10/2023"
        linkYT="https://www.youtube.com/embed/6_y5q9wtNtI"
        des="Improve the quality of life of children and their families through the provision of services and resources necessary for their full physical, mental and educational development."
        amoutOfLikes="300"
      />
    ),
  },
  {
    path: "/large-item",
    element: (
      <LargeProgramItem
        title="Teaching children"
        date="22/10/2023"
        linkYT="https://www.youtube.com/embed/6_y5q9wtNtI"
        des="Improve the quality of life of children and their families through the provision of services and resources necessary for their full physical, mental and educational development."
        amoutOfLikes="300"
      />
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
