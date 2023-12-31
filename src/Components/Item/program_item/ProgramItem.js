import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./program_item.css";
import NormalBtn from "../../Button/NormalBtn";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ProgramItem({ props }) {
  const { t } = useTranslation();
  const handleShareClick = () => {
    // Copy the smile-eye link to the clipboard
    const smileeyecharity = "https://smileeyecharity.org/";
    navigator.clipboard.writeText(smileeyecharity);

    // Show a notification after 1 second
    setTimeout(() => {
      alert(`You copied this link successfully: ${smileeyecharity}`);
    }, 1000);
  };
  return (
    <div className="program-item mb-6">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex justify-between">
          <div className="text-2xl font-medium mb-2">{props.title}</div>
          <img
            src={iconShare}
            className="w-10 h-10 ms-5 hover:cursor-pointer"
            alt="icon share"
            onClick={handleShareClick}
          />
        </div>
        <div className="header_date text-xl">
          <div>
            <span>{t("time-item")}</span>
            <span>{props.date}</span>
          </div>
          <div>
            <span>{t("place-item")}</span>
            <span>{props.place}</span>
          </div>
        </div>
      </div>

      {/* video */}
      <div className="video w-full mb-6">
        <iframe
          loading="lazy"
          width="500"
          height="300"
          src={props.linkYT}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* contents */}
      <div className="contents">
        <div className="max-h-[150px] overscroll-auto overflow-auto mb-3">
          <p className="contents_description text-xl text-left mb-3">
            {props.des}
          </p>
        </div>
        {/* Update code to preview pitch file and plan file */}
        <div className="contents_files text-2xl mb-3">
          <a
            href={props.pitchFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2 mr-7">
              {t("pitch-file")}
            </span>
          </a>
          <a
            href={props.planFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2">
              {t("plan-file")}
            </span>
          </a>
        </div>

        <div className="contents_progress mb-2 text-2xl hover:cursor-pointer flex justify-between items-center">
          <span className="mr-7">{t("funding")}</span>
          <Tippy content="65%">
            <progress value="65" max="100"></progress>
          </Tippy>
        </div>

        <div className="contents_bottom flex justify-between gap-11">
          <div className="likes flex flex-col items-center ms-4">
            <span className="iconLove block">
              <img src={iconHeart} className="w-14 h-14" alt="icon love" />
            </span>
            <span className="amountOfLikes text-xl font-medium leading-4 block">
              {props.amoutOfLikes}
            </span>
          </div>
          <Link to="/contact">
            <div className="button_sponsors">
              <NormalBtn text={t("sponsor-button")} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramItem;
