// program_item.js
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import NormalBtn from "../../Button/NormalBtn";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ProgramItem({ props }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePdfPreview = (url) => {
    setPdfUrl(url);
  };

  const handleClosePdfPreview = () => {
    setPdfUrl(null);
  };

  const { t } = useTranslation();
  const handleShareClick = () => {
    const smileeyecharity = "https://smileeyecharity.org/";
    navigator.clipboard.writeText(smileeyecharity);

    setTimeout(() => {
      alert(`You copied this link successfully: ${smileeyecharity}`);
    }, 1000);
  };

  return (
    <div className="program-item mb-6">
      <div className="header mb-6">
        <div className="header_title flex justify-between">
          <div className="text-2xl font-semibold mb-2">{props.title}</div>
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

      <div className="contents">
        <div className="max-h-[150px] overscroll-auto overflow-auto mb-3">
          <p className="contents_description text-xl text-left mb-3">
            {props.des}
          </p>
        </div>

        <div className="contents_files text-2xl mb-3 flex gap-4">
          <div
            href={props.pitchFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer underline underline-offset-2 mr-7"
            onClick={() => handlePdfPreview(props.pitchFile)}
          >
            {t("pitch-file")}
          </div>
          <div
            href={props.planFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer underline underline-offset-2"
            onClick={() => handlePdfPreview(props.planFile)}
          >
            {t("plan-file")}
          </div>
        </div>

        <div className="contents_progress mb-2 text-2xl hover:cursor-pointer flex justify-between items-center">
          <span className="mr-7">{t("funding")}</span>
          <Tippy content="30%">
            <progress value="30" max="100"></progress>
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

        {pdfUrl && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleClosePdfPreview}
          >
            <div className="bg-white w-[1300px] h-[700px] overflow-auto p-8 rounded shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-3xl cursor-pointer"
                onClick={handleClosePdfPreview}
              >
                &times;
              </button>
              <div className="relative h-full">
                <iframe
                  title="PDF Viewer"
                  src={pdfUrl}
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramItem;
