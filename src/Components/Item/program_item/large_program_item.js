import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "./program_item.css";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
function LargeProgramItem(props) {
  return (
    <div className="large-program-item">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex">
          <span className="text-4xl font-medium ">{props.title}</span>
          <img
            src={iconShare}
            className="w-10 h-10 ms-5 hover:cursor-pointer"
            alt="icon share"
          />
        </div>
        <div className="header_date text-lg italic">
          <span>Time: </span>
          <span>{props.date}</span>
        </div>
      </div>

      {/* body */}
      <div className="body w-full flex">
        {/* video */}
        <div className="video mb-6">
          <iframe
            width="700"
            height="410"
            src={props.linkYT}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* contents */}
        <div className="large-Contents px-4">
          <p className="contents_description text-xl text-justify mb-3">
            {props.des}
          </p>

          <div className="contents_files text-2xl mb-3">
            <Link to="">
              <span className="underline underline-offset-2 mr-10">
                Pitch file
              </span>
            </Link>
            <Link to="">
              <span className="underline underline-offset-2">Plan file</span>
            </Link>
          </div>

          <div className="contents_progress mb-3 text-2xl hover:cursor-pointer flex justify-between items-center">
            <span className="mr-10">Funding</span>
            <Tippy content="65%">
              <progress value="65" max="100"></progress>
            </Tippy>
          </div>

          <div className="contents_bottom flex justify-between">
            <div className="likes flex flex-col items-center ms-4">
              <span className="iconLove block">
                <img src={iconHeart} className="w-14 h-14" alt="icon love" />
              </span>
              <span className="amountOfLikes text-xl font-medium leading-4 block">
                {props.amoutOfLikes}
              </span>
            </div>
            <button className="button font-medium">
              Be a contributor or sponsor
            </button>
            {/* <NormalButton>Be a contributor or sponsor</NormalButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeProgramItem;
