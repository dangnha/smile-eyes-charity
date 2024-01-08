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

  const index1 = 1
  const index2 = 2
  const index3 = 3
  const index4 = 4
  const index5 = 5

  const [underlinedTitles, setUnderlinedTitles] = useState([]);

  const handleTitleClick = (index) => {
    // Clone mảng để tránh thay đổi trực tiếp state
    const newUnderlinedTitles = [...underlinedTitles];

    // Đảo ngược trạng thái của tiêu đề được click
    newUnderlinedTitles[index] = !newUnderlinedTitles[index];

    // Cập nhật state
    setUnderlinedTitles(newUnderlinedTitles);
  };

  return (
    <nav id="nav">
      <div id="navbar-language">
        <Language selected={selected} setSelected={setSelected} />
      </div>
      <div id="navbar-title">
        <a href="/">
          <div id="logo">
            <img src="./image/logo.png" alt="abc" />
            <p>Smile Eye Charity</p>
          </div>
        </a>

        <div>
          <ul id="title" className={clicked ? "active" : "title"}>
            <li>
              <Link to="/">
                <p
                  style={{ textDecoration: underlinedTitles[index1] ? 'underline' : 'none' }}
                  onClick={() => handleTitleClick(index1)}
                >{t("home")}</p>
              </Link>
            </li>
            <li>
              <Link to="/programs">
                <p
                  style={{ textDecoration: underlinedTitles[index2] ? 'underline' : 'none' }}
                  onClick={() => handleTitleClick(index2)}
                >{t("projects")}</p>
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
