import { Link } from "react-router-dom";
import "./Header.css";
import Language from "./Language";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState({
    image: "./image/vietnam.png",
    language: "Vietnamese",
  });

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav id="nav">
      <div id="navbar-language">
        <Language selected={selected} setSelected={setSelected} />
      </div>

      <div id="navbar-title">
        <div id="logo">
          <img src="./image/logo.png" alt="abc" />
          <p>Smile Eye Charity</p>
        </div>

        <div>
          <ul id="title" className={clicked ? "active" : "title"}>
            <li>
              <Link to="/">
                <p>{t("home")}</p>
              </Link>
            </li>
            <li>
              <Link to="/programs">
                <p>{t("projects")}</p>
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <p>{t("about")}</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p>{t("contact")}</p>
              </Link>
            </li>
            <li>
              <Link to="/sponsor">
                <p>{t("sponsor")}</p>
              </Link>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
