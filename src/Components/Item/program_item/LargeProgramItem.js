import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./program_item.css";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import NormalBtn from "../../Button/NormalBtn";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function LargeProgramItem(props) {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePdfPreview = (url) => {
    setPdfUrl(url);
  };

  const handleClosePdfPreview = () => {
    setPdfUrl(null);
  };

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
    <div className="large-program-item">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex mb-3">
          <span className="text-5xl font-medium ">{props.title}</span>
          <img
            src={iconShare}
            className="w-10 h-10 ms-5 hover:cursor-pointer"
            alt="icon share"
            onClick={handleShareClick}
          />
        </div>
        <div className="header_date text-lg italic">
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

      {/* body */}
      <div className="body w-full flex flex-row gap-5">
        {/* video */}
        <div className="video mb-6 basis-[55%]">
          <iframe
            width="500"
            height="450"
            src={props.linkYT}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* contents */}
        <div className="large-Contents px-4 basis-[45%] flex flex-col justify-evenly">
          <div className="max-h-[200px] overscroll-auto overflow-auto mb-3">
            <p className="contents_description text-xl text-left">
              {props.des}
            </p>
          </div>

          <div className="contents_files text-2xl flex flex-row gap-10">
            <div
              href={props.pitchFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              onClick={() => handlePdfPreview(props.pitchFile)}
            >
              <span className="underline underline-offset-2">
                {t("pitch-file")}
              </span>
            </div>
            <div
              href={props.planFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              onClick={() => handlePdfPreview(props.planFile)}
            >
              <span className="underline underline-offset-2">
                {t("plan-file")}
              </span>
            </div>
          </div>

          <div className="contents_progress mb-3 text-2xl hover:cursor-pointer flex flex-row gap-11 items-center">
            <span className="">{t("funding")}</span>
            <Tippy content="65%">
              <progress value="65" max="100"></progress>
            </Tippy>
          </div>

          <div className="contents_bottom flex flex-row justify-between gap-14">
            <div className="likes flex flex-col items-center ms-4">
              <span className="iconLove block">
                <img src={iconHeart} className="w-14 h-14" alt="icon love" />
              </span>
              <span className="amountOfLikes text-xl font-medium leading-4 block">
                {props.amoutOfLikes}
              </span>
            </div>

            <div className="button_sponsors">
              <Link to="/contact">
                <NormalBtn text={t("sponsor-button")} />
              </Link>
            </div>
          </div>
        </div>
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
  );
}

export default LargeProgramItem;
