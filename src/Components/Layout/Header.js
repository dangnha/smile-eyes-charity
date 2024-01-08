import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Language from "./Language";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState({
    image: "./image/vietnam.png",
    language: "Vietnamese",
  });

  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setClicked(false); // Close the mobile menu
  };

  const menuItems = [
    { path: "/", label: t("home") },
    { path: "/programs", label: t("projects") },
    { path: "/aboutus", label: t("about") },
    { path: "/contact", label: t("contact") },
    // { path: "/sponsor", label: t("sponsor") },
  ];

  return (
    <nav id="nav">
      <div id="navbar-language">
        <Language selected={selected} setSelected={setSelected} />
      </div>
      <div
        id="navbar-title"
        className="lg:gap-[400px] md:gap-[200px] gap-[80px]"
      >
        <a href="/">
          <div id="logo">
            <img src="./image/logo.png" alt="abc" />
            <p>Smile Eye Charity</p>
          </div>
        </a>

        <div>
          <ul id="title" className={clicked ? "active" : "title"}>
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={activeMenuItem === index ? "active" : ""}
              >
                <Link to={menuItem.path} onClick={() => handleClick(index)}>
                  <p>{menuItem.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
