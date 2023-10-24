import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "./program_item.css";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
function ProjectDone(props) {
  return (
    <div className="program-item">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex justify-between">
          <h2 className="text-2xl font-medium">{props.title}</h2>
          <img
            src={iconShare}
            className="w-10 h-10 hover:cursor-pointer"
            alt="icon share"
          />
        </div>
        <div className="header_date text-xl">
          <span>Time: </span>
          <span>{props.date}</span>
        </div>
      </div>

      {/* video */}
      <div className="video w-full mb-6">
        <iframe
          width="500"
          height="300"
          src={props.linkYT}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      {/* contents */}
      <div className="contents">
        <p className="contents_description text-xl text-left mb-3">
          {props.des}
        </p>

        <div className="contents_files text-2xl mb-3">
          <Link to="">
            <span className="underline underline-offset-2 mr-7">
            Introduce
            </span>
            </Link>
          <Link to="">
            <span className="underline underline-offset-2 mr-7">
              Pitch file
            </span>
          </Link>
          <Link to="">
            <span className="underline underline-offset-2">Plan file</span>
          </Link>
        </div>

        <div className="contents_progress mb-2 text-2xl hover:cursor-pointer flex justify-between items-center">
          <span className="mr-7">Funding: {props.cost}</span>
        </div>

        <div className="contents_bottom flex justify-between">
          <div className="likes flex flex-row items-center text-2xl">
            <Link to="">
            <span className="underline underline-offset-2 mr-7">
            Achievement
            </span>
            </Link>
            <Link to="">
            <span className="underline underline-offset-2 mr-7">
                Detail Report
            </span>
            </Link>
            <span className="iconLove block">
              <img src={iconHeart} className="w-14 h-14" alt="icon love" />
            </span>
            <span className="amountOfLikes text-xl font-medium leading-4 block">
              {props.amoutOfLikes}
            </span>
          </div>
          
          {/* <NormalButton>Be a contributor or sponsor</NormalButton> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectDone;
