import { Link } from "react-router-dom";

import "./program_item.css";
import iconShare from "../../../images/share-nodes-solid.svg";
import iconHeart from "../../../images/heart.png";
function ProgramItem(props) {
  return (
    <div className="program-item">
      <div className="header mb-6">
        <div className="header_title flex justify-between">
          <h2 className="text-2xl font-medium">{props.title}</h2>
          <img src={iconShare} className="w-10 h-10" alt="icon share" />
        </div>
        <div className="header_date text-xl">
          <span>Time: </span>
          <span>{props.date}</span>
        </div>
      </div>

      <div className="video w-full mb-6">
        <iframe
          width="540"
          height="300"
          src={props.linkYT}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="contents mb-6">
        <p className="contents_description text-xl text-justify mb-6">{props.des}</p>

        <div className="contents_files text-2xl mb-6">
          <Link to="">
            <span className="underline underline-offset-2 mr-10">Pitch file</span>
          </Link>
          <Link to="">
            <span className="underline underline-offset-2">Plan file</span>
          </Link>
        </div>

        <div className="contents_progress mb-6 text-2xl flex justify-between items-center">
          <label for="file">Funding</label>
          <progress id="file" value="65" max="100" style={{width: 410, height: 15}}></progress>
        </div>

        <div className="contents_bottom flex justify-between">
          <div className="likes flex flex-col items-center ms-4">
            <span className="iconLove block">
              <img src={iconHeart} className="w-17 h-16" alt="icon love" />
            </span>
            <span className="amountOfLikes text-xl leading-4 block">{props.amoutOfLikes}</span>
          </div>
          <button className="button">
            Be a contributor or sponsor
          </button>
          {/* <NormalButton>Be a contributor or sponsor</NormalButton> */}
        </div>
      </div>
    </div>
  );
}

export default ProgramItem;
