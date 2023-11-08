import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./program_item.css";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import NormalBtn from "../../Button/NormalBtn";
import { FacebookShareButton } from "react-share";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function LargeProgramItem(props) {
  const { t } = useTranslation();
  const shareUrl = props.linkYT; // URL to share
  const title = "Smile Eyes Charity Project is so amazing"; // Title for the shared content

  return (
    <div className="large-program-item">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex mb-3">
          <span className="text-4xl font-medium ">{props.title}</span>
          <FacebookShareButton url={shareUrl} quote={title}>
            <img
              src={iconShare}
              className="w-10 h-10 ms-5 hover:cursor-pointer"
              alt="icon share"
            />
          </FacebookShareButton>
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
          <p className="contents_description text-xl text-left mb-3">
            {props.des}
          </p>

          <div className="contents_files text-2xl flex flex-row gap-10">
            <a
              href={props.pitchFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="underline underline-offset-2">{t("pitch-file")}</span>
            </a>
            <a
              href={props.planFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="underline underline-offset-2">{t("plan-file")}</span>
            </a>
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
            <Link to="/contact"><NormalBtn text={t("sponsor-button")} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeProgramItem;
