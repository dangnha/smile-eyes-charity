import "./program_item.css";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import { FacebookShareButton } from "react-share";

function ProjectDone(props) {
  const shareUrl = props.linkYT; // URL to share
  const title = "Smile Eyes Charity Project is so amazing"; // Title for the shared content

  return (
    <div className="program-item">
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
          <span>Time: </span>
          <span>{props.date}</span>
        </div>
        <div>
          <span>Place: </span>
          <span>{props.place}</span>
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

        <div className="contents_files text-2xl mb-3 flex flex-row justify-between">
          <a
            href={props.introductionFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2">Introduce</span>
          </a>
          <a
            href={props.pitchFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2 ">Pitch file</span>
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
          <span className="mr-7">Funding: {props.cost}</span>
        </div>

        <div className="contents_bottom flex justify-between">
          <div className="likes flex flex-row items-center text-2xl">
            <a
              href={props.achievementFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="underline underline-offset-2 mr-3.5">
                Achievement
              </span>
            </a>
            <a
              href={props.detailFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="underline underline-offset-2 mr-3.5">
                Detail Report
              </span>
            </a>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="iconLove block">
                <img src={iconHeart} className="w-14 h-14" alt="icon love" />
              </span>
              <span className="amountOfLikes text-xl font-medium leading-4 block">
                {props.amoutOfLikes}
              </span>
            </div>
          </div>

          {/* <NormalButton>Be a contributor or sponsor</NormalButton> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectDone;
