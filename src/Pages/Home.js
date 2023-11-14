import React, { useState } from "react";
import LargeProgramItem from "../Components/Item/program_item/LargeProgramItem";
import ProgramItem from "../Components/Item/program_item/ProgramItem";
import ProjectDone from "../Components/Item/program_item/ProjectDone";
import Button from "../Components/Button/Button";
import "./Home.css";
import BlogModel from "../Components/Item/model/BlogModel";
import { useTranslation } from "react-i18next";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import dtdp from "../images/dtdp.jpg";

const Home = () => {
  const { t } = useTranslation();
  const [showBlogModel, setShowBlogModel] = useState(false);

  const video_introduce = {
    title: t("item_title_intro"),
    date: t("time_intro"),
    place: t("place_intro"),
    linkYT:
      "https://www.youtube.com/embed/543jwFfCZvg?list=PLp6D8X7L5wgbTLG-OR0q8hJws4wD18e7o",
    des: t("des_intro"),
    amoutOfLikes: "300",
    pitchFile:
      "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
    planFile:
      "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
  };

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
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
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
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
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
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
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
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
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
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
      achievementFile:
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      detailFile:
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
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
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      planFile:
        "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
      achievementFile:
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      detailFile:
        "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
      cost: "10.000.000VND",
    },
  ];

  return (
    <div>
      <div className="content">
        <div className="video_introduce">
          <LargeProgramItem
            title={video_introduce.title}
            date={video_introduce.date}
            place={video_introduce.place}
            linkYT={video_introduce.linkYT}
            des={video_introduce.des}
            amoutOfLikes={video_introduce.amoutOfLikes}
            pitchFile={video_introduce.pitchFile}
            planFile={video_introduce.planFile}
          />
        </div>

        <div className="project_calling">
          <div className="title_button">
            <p id="title_project">{t("project-calling")}</p>
            <Link to="/programs">
              <div id="button_see_all">
                <Button text={t("button-see-all")} />
              </div>
            </Link>
          </div>

          <div className="project">
            {Projects.filter((project) => project.type === "raising").map(
              (project, index) => (
                <div id="item_project" key={index}>
                  <ProgramItem props={project} />
                </div>
              )
            )}
          </div>
        </div>

        <div className="project_running">
          <div className="title_button">
            <p id="title_project">{t("project-running")}</p>
            <Link to="/programs">
              <div id="button_see_all">
                <Button text={t("button-see-all")} />
              </div>
            </Link>
          </div>

          <div className="project">
            {Projects.filter((project) => project.type === "running").map(
              (project, index) => (
                <div id="item_project" key={index}>
                  <ProgramItem props={project} />
                </div>
              )
            )}
          </div>
        </div>

        <div className="project_done">
          <div className="title_button">
            <p id="title_project">{t("project-done")}</p>
            <Link to="/programs">
              <div id="button_see_all">
                <Button text={t("button-see-all")} />
              </div>
            </Link>
          </div>

          <div className="project">
            {Projects.filter((project) => project.type === "completed").map(
              (project, index) => (
                <div id="item_project" key={index}>
                  {console.log(project)}
                  <ProjectDone
                    type={project.type}
                    title={project.title}
                    date={project.date}
                    place={project.place}
                    linkYT={project.linkYT}
                    des={project.des}
                    amoutOfLikes={project.amoutOfLikes}
                    introductionFile
                    pitchFile={project.pitchFile}
                    planFile={project.planFile}
                    detailFile={project.detailFile}
                    cost={project.cost}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="blog">
        <p id="blog_title">{t("blogs-title")}</p>
        <div className="blog_content">
          <div className="blog_image">
            <div className="blog_image1">
              <div className="image1">
                <img className="img-fit" src="../image/1.jpg" alt="Not found" />
              </div>
              <div className="image1">
                <img
                  className="img-fit"
                  src="../image/tre-em.jpg"
                  alt="Not found"
                />
              </div>
            </div>
            <div className="blog_image2">
              <img
                className="img-fit"
                src="../image/chum-anh-nhung-doi-mat-nu-cuoi-rat-trong-cua-cac-em-be-vung-cao.webp"
                alt="Not found"
              />
            </div>
          </div>
          <div className="blog_des">
            <i class="fa-solid fa-quote-left fa-2xl mr-auto"></i>
            <p className="des_title_blog mt-5">{t("blogs-des")}</p>
            <i class="fa-solid fa-quote-right fa-2xl ml-auto mt-5"></i>
            <div
              className="blog_seemore flex flex-col items-center"
              onClick={() => setShowBlogModel(!showBlogModel)}
            >
              <p className="mt-10">{t("blogs-button")}</p>
              <i class="fa-solid fa-chevron-down fa-lg mt-2"></i>
            </div>
          </div>
        </div>

        <div className="blog_content">
          <div className="blog_des">
            <i class="fa-solid fa-quote-left fa-2xl mr-auto"></i>
            <p className="des_title_blog mt-5">{t("blogs-des")}</p>
            <i class="fa-solid fa-quote-right fa-2xl ml-auto mt-5"></i>
            <div
              className="blog_seemore flex flex-col items-center"
              onClick={() => setShowBlogModel(!showBlogModel)}
            >
              <p className="mt-10">{t("blogs-button")}</p>
              <i class="fa-solid fa-chevron-down fa-lg mt-2"></i>
            </div>
          </div>

          <div className="blog_image">
            <div className="blog_image1">
              <div className="image1">
                <img className="img-fit" src="../image/1.jpg" alt="Not found" />
              </div>
              <div className="image1">
                <img
                  className="img-fit"
                  src="../image/tre-em.jpg"
                  alt="Not found"
                />
              </div>
            </div>
            <div className="blog_image2">
              <img
                className="img-fit"
                src="../image/chum-anh-nhung-doi-mat-nu-cuoi-rat-trong-cua-cac-em-be-vung-cao.webp"
                alt="Not found"
              />
            </div>
          </div>
        </div>
      </div>

      {showBlogModel && <BlogModel onClose={() => setShowBlogModel(false)} />}

      <div className="profile flex flex-row items-center text-sm leading-7">
        <div className="profile_des">
          <div className="circle"></div>
          <i class="icon_profile fa-solid fa-quote-left fa-2xl mr-auto"></i>
          <p className="profile_des_text mt-5">{t("profile-des")}</p>
          <p className="profile_des_text mt-5">{t("profile-des2")}</p>
          <p className="profile_des_text mt-5">{t("profile-des3")}</p>
          <i class="fa-solid fa-quote-right fa-2xl ml-auto mt-5"></i>
        </div>
        <div className="profile_intro ">
          <div className="mt-5">
            <p className="profile_intro_text1">{t("profile-intro1")}</p>
            <p className="profile_intro_text2 italic mt-2">
              {t("profile-intro2")}
            </p>
            <p className="profile_intro_text2 italic">{t("profile-intro3")}</p>
          </div>
          <img
            className="image_profile mx-auto object-cover object-center w-[500px] h-[730px]"
            src={dtdp}
            alt="not found"
          ></img>
        </div>
      </div>

      <div className="who_we_are flex flex-row">
        <div className="our_information">
          <p className="our_information_heading1">{t("who-we-are-1")}</p>
          <p className="our_information_heading2">{t("who-we-are-2")}</p>
          <p className="our_information_heading3">{t("who-we-are-3")}</p>
          <div className="button_introduce flex flex-row gap-10">
            <div className="button_donate">
              <Link to="/contact">
              <button className="text-white text-xl font-normal rounded-[10px] bg-[#396D00] px-3 py-2">
                {t("donate-button")} <i class="fa-solid fa-chevron-right"></i>
              </button>
              </Link>
            </div>
            <div className="button_contact">
              <Link to="/contact">
              <button className="text-xl font-normal px-3 py-2">
                {t("contact-button")}
                <i class="fa-solid fa-chevron-right"></i>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="icon_information">
          <div className="icon_information1">
            <i class="fa-solid fa-house-user fa-2xl"></i>
            <p>{t("who-we-are-4")}</p>
          </div>
          <div className="icon_information2 ">
            <i class="fa-solid fa-location-dot fa-2xl"></i>
            <p>{t("who-we-are-5")}</p>
          </div>
          <div className="icon_information1">
            <i class="fa-solid fa-person fa-2xl"></i>
            <p>{t("who-we-are-6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
