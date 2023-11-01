import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./program_item.css";
import NormalBtn from "../../Button/NormalBtn";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import { FacebookShareButton } from "react-share";

function ProgramItem({ props }) {
  const shareUrl = props.linkYT; // URL to share
  const title = "Smile Eyes Charity Project is so amazing"; // Title for the shared content

  return (
    <div className="program-item mb-6">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex justify-between">
          <h2 className="text-2xl font-medium">{props.title}</h2>
          <FacebookShareButton url={shareUrl} quote={title}>
            <img
              src={iconShare}
              className="w-10 h-10 ms-5 hover:cursor-pointer"
              alt="icon share"
            />
          </FacebookShareButton>
        </div>
        <div className="header_date text-xl">
          <div>
            <span>Time: </span>
            <span>{props.date}</span>
          </div>
          <div>
            <span>Place: </span>
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
        <p className="contents_description text-xl text-left mb-3">
          {props.des}
        </p>
        {/* Update code to preview pitch file and plan file */}
        <div className="contents_files text-2xl mb-3">
          <a
            href={props.pitchFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2 mr-7">
              Pitch file
            </span>
          </a>
          <a
            href={props.planFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2">Plan file</span>
          </a>
        </div>

        <div className="contents_progress mb-2 text-2xl hover:cursor-pointer flex justify-between items-center">
          <span className="mr-7">Funding</span>
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

          <div className="button_sponsors">
            <NormalBtn text="Be a contributor or sponsor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramItem;
