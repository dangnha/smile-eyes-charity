import { useState } from "react";
import { useTranslation } from "react-i18next";

function Language({ selected, setSelected }) {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [isActive, setIsActive] = useState(false);
  const options = [
    {
      image: "./image/vietnam.png",
      language: "Vietnamese",
      trans: "vi",
    },
    {
      image: "./image/english.png",
      language: "English",
      trans: "en",
    },
    {
      image: "./image/japan.jpg",
      language: "Japanese",
      trans: "jp",
    },
  ];
  return (
    <div id="language">
      <div className="language-defaut" onClick={(e) => setIsActive(!isActive)}>
        <img src={selected.image} alt=""></img>
        <p>{selected.language}</p>
        <i class="fa-solid fa-caret-down"></i>
      </div>

      {isActive && (
        <div className="language-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                changeLanguage(option.trans);
                setSelected(option);
                setIsActive(false);
              }}
              className="language-item"
            >
              <img src={option.image} alt=""></img>
              <p>{option.language}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Language;
