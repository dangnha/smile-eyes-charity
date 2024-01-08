import { useEffect, useRef, useState } from "react";
import ProgramItem from "../../Components/Item/program_item/ProgramItem";
import "./programs.css";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation();
  const Projects = [
    {
      type: "raising",
      title: t("title-raising1"),
      date: t("date-raising1"),
      place: t("place-raising1"),
      linkYT: t("linkYT-raising1"),
      des: t("des-raising1"),
      amoutOfLikes: "179",
      pitchFile:
        "https://docs.google.com/spreadsheets/d/1N8dZMewYsr8gXbPO15spz9M0ar0g8xT5/edit?rtpof=true#gid=728959804",
      planFile:
        "https://docs.google.com/document/d/1QEnBLz6fMSq3hoF4qgnXPlrvwJjSKmgN/edit",
      cost: "",
    },
    {
      type: "raising",
      title: t("title-raising2"),
      date: t("date-raising2"),
      place: t("place-raising2"),
      linkYT: t("linkYT-raising2"),
      des: t("des-raising2"),
      amoutOfLikes: "212",
      pitchFile:
        "https://docs.google.com/spreadsheets/d/1G2XVdWuFmktxEH8zO6MdqQc4hSF_PRGe/edit?rtpof=true#gid=60212578",
      planFile:
        "https://docs.google.com/document/d/1B1xQJMnXx0wwdEdDXrlzEA8MdYdISLXy/edit?rtpof=true",
      cost: "",
    },
    {
      type: "running",
      title: t("title-running1"),
      date: "10/2023~10/2028",
      place: t("place-running1"),
      linkYT: "https://www.youtube.com/embed/LXcWjzaMwqE?si=6ubyy8q_rcOhWl15",
      des: t("des-running1"),
      amoutOfLikes: "106k",
      pitchFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
    },
    {
      type: "running",
      title: t("title-running2"),
      date: "10/2023~10/2028",
      place: t("place-running2"),
      linkYT: "https://www.youtube.com/embed/LXcWjzaMwqE?si=6ubyy8q_rcOhWl15",
      des: t("des-running2"),
      amoutOfLikes: "106k",
      pitchFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
    },
    {
      type: "completed",
      title: t("title-complete1"),
      date: "10/2023~10/2028",
      place: t("place-complete1"),
      linkYT: "https://www.youtube.com/embed/LXcWjzaMwqE?si=6ubyy8q_rcOhWl15",
      des: t("des-complete1"),
      amoutOfLikes: "106k",
      introductionFile: "https://www.facebook.com/",
      pitchFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      achievementFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      detailFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      cost: "10.000.000VND",
    },
    {
      type: "completed",
      title: t("title-complete1"),
      date: "10/2023~10/2028",
      place: t("place-complete1"),
      linkYT: "https://www.youtube.com/embed/LXcWjzaMwqE?si=6ubyy8q_rcOhWl15",
      des: t("des-complete1"),
      amoutOfLikes: "106k",
      introductionFile: "https://www.facebook.com/",
      pitchFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      achievementFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      detailFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit",
      cost: "10.000.000VND",
    },
  ];
  const [filter, setFilter] = useState("raising");
  const [currentPrograms, setCurrentPrograms] = useState([]);
  const [title, setTitle] = useState(
    "Programs which are calling for volunteers and sponsors"
  );

  const miniProRef = useRef();
  const iconLoadRef = useRef();

  const btnRaising = useRef();
  const btnRunning = useRef();
  const btnCompleted = useRef();

  useEffect(() => {
    const temp = Projects.filter((project) => project.type === filter);
    setCurrentPrograms(temp);
    // remove class active on all button
    btnRaising.current.classList.remove("active");
    btnRunning.current.classList.remove("active");
    btnCompleted.current.classList.remove("active");

    if (filter === "raising") {
      btnRaising.current.classList.add("active");
      setTitle(t("project-calling"));
    } else if (filter === "running") {
      btnRunning.current.classList.add("active");
      setTitle(t("project-running"));
    } else {
      btnCompleted.current.classList.add("active");
      setTitle(t("project-done"));
    }
  }, [filter]);

  const handleFilter = (valFilter) => {
    setFilter(valFilter);

    // fake loading API
    miniProRef.current.style.opacity = 0.1;
    iconLoadRef.current.style.display = "block";
    setTimeout(() => {
      miniProRef.current.style.opacity = 1;
      iconLoadRef.current.style.display = "none";
    }, 1000);
  };

  return (
    <div className="body lg:w-[80%] md:w-[85%] w-[90%] mx-auto">
      <div className="top_image mx-auto my-12">
        <img
          src="./images/top_image.png"
          className="w-full object-fit"
          alt="nothing"
        />
      </div>

      <div className="intro mx-auto my-16 md:flex justify-between hidden">
        <img
          src="./images/Rectangle_126.png"
          alt="nothing"
          className="intro_image w-3/6"
        />
        <div className="text w-2/5">
          <p className="text-4xl font-bold mt-16 mb-14">
            {t("project-page-title")}
          </p>
          <p className="text-xl">{t("project-page-des1")}</p>
        </div>
      </div>

      {/* paragraph */}
      {/* <div className="paragraph py-16 mb-20 text-lg text-justify">
        <p className="mx-auto">{t("project-page-des2")}</p>
      </div> */}

      {/* programs */}
      <div className="programs mx-auto">
        {/* filter */}
        <ul className="programs_filter mx-auto mb-16 py-4 flex justify-evenly list-none">
          <li
            className="programs_filter-button active text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnRaising}
            onClick={() => handleFilter("raising")}
          >
            {t("raising-button")}
          </li>
          <li
            className="programs_filter-button text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnRunning}
            onClick={() => handleFilter("running")}
          >
            {t("running-button")}
          </li>
          <li
            className="programs_filter-button text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnCompleted}
            onClick={() => handleFilter("completed")}
          >
            {t("complete-button")}
          </li>
        </ul>

        <p className="mini_programs-title text-4xl font-medium mb-8">{title}</p>

        {/* mini programs */}
        <img
          src="./images/loading.png"
          alt="icon load"
          className="icon_load"
          ref={iconLoadRef}
        />
        <div
          className="mini_programs-items mx-auto mb-20 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3 justify-center items-center"
          ref={miniProRef}
        >
          {currentPrograms &&
            currentPrograms.map((program) => {
              return (
                <div key={program.id}>
                  <ProgramItem props={program} />
                </div>
              );
            })}
        </div>
      </div>

      <img
        src="./images/Rectangle_93.png"
        alt="nothing"
        className="object-cover w-[100vw]"
      />
    </div>
  );
};

export default Programs;
