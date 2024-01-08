import "./program_item.css";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";
import { useTranslation } from "react-i18next";

function ProjectDone(props) {
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
    <div className="program-item">
      {/* header */}
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
          <span>{t("time-item")}</span>
          <span>{props.date}</span>
        </div>
        <div>
          <span>{t("place-item")}</span>
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
        <div className="max-h-[150px] overscroll-auto overflow-auto mb-3">
          <p className="contents_description text-xl text-left mb-3">
            {props.des}
          </p>
        </div>

        <div className="contents_files text-2xl mb-3 flex flex-row justify-between">
          <a
            href={props.introductionFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2">
              {t("introduce")}
            </span>
          </a>
          <a
            href={props.pitchFile}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <span className="underline underline-offset-2 ">
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
          <span className="mr-7">
            {t("funding")} {props.cost}
          </span>
        </div>

        <div className="contents_bottom flex justify-between">
          <div className="likes flex flex-row items-center justify-between text-2xl w-full">
            <a
              href={props.achievementFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="underline underline-offset-2 mr-3.5">
                {t("achievement")}
              </span>
            </a>
            <a
              href={props.detailFile}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="underline underline-offset-2 mr-3.5">
                {t("report")}
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
