import React from "react";
import {useTranslation} from "react-i18next";
import Button from "../Components/Button/Button";
import bgimg from "../images/Rectangle30.png";
import goldIcon from "../images/icon_award_.png";
import silverIcon from "../images/icon_award_(1).png";
import bronzeIcon from "../images/icon_award_(2).png";
import { Link } from "react-router-dom";

const Sponsor = () => {

  const {t} = useTranslation();

  const Sponsors = [
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "gold",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "gold",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "silver",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "silver",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "silver",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
    {
      name: "Sponsors",
      img: "https://picsum.photos/600/600",
      type: "bronze",
    },
  ];
  return (
    <div>
      <div className="w-[100vw] h-[70vh] flex">
        <div className="w-full h-full bg-[#F6FFF6] flex justify-center items-center">
          <div className=" flex flex-col justify-center items-start gap-[60px] w-[60%] h-[90%]">
            <div className="text-4xl text-left"> 
             {/*lỗi phong chữ nếu dùng font-serif */}
              {t("sponsor_intro-projects")}
            </div>
            <Link to="/programs">
              <Button text={t("sponsor_our-projects")} className="text-4xl" />
            </Link>
          </div>
        </div>
        <img className="object-cover object-center" src={bgimg} alt="" />
      </div>

      <div className="flex flex-col items-center w-[95%] mx-auto">
        <div className="flex gap-5 justify-center items-center text-3xl font-serif font-semibold uppercase py-[80px]">
          <div className="h-[2px] w-[50px] bg-black"></div>
          {t("sponsor_our-sponsor")}
          <div className="h-[2px] w-[50px] bg-black"></div>
        </div>
        <div className="text-xl text-center flex gap-5">
          <i className="fa-solid fa-quote-left"></i>
          {t("sponsor_thankfull1")} <br /> {t("sponsor_thankfull2")}.
          <i className="fa-solid fa-quote-right"></i>
        </div>

        <div className="py-[100px]">
          <div className="flex flex-col justify-center gap-16 pb-[80px]">
            <div className="flex flex-col items-center">
              <img src={goldIcon} alt="" />
              <div className="text-3xl italic pt-3">{t("sponsor_gold-sponsor")}</div>
            </div>
            <div className="flex flex-row justify-center gap-16 flex-wrap">
              {Sponsors.filter((sponsor) => sponsor.type === "gold").map(
                (Sponsor, index) => {
                  return (
                    <div key={index} className="pb-10">
                      <img
                        className="w-[350px] h-[350px] object-cover object-center"
                        src={Sponsor.img}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="flex flex-row justify-center gap-14">
            <div className="flex flex-row justify-center gap-16 basis-[50%]">
              <div className="flex flex-row justify-center  gap-[80px] flex-wrap">
                {Sponsors.filter((sponsor) => sponsor.type === "silver").map(
                  (Sponsor, index) => {
                    return (
                      <div key={index} className="">
                        <img
                          className="w-[200px] h-[200px] object-cover object-center"
                          src={Sponsor.img}
                          alt=""
                        />
                      </div>
                    );
                  }
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={silverIcon} alt="" />
                <div className="text-xl italic pt-3 text-center">
                  {t("sponsor_silver-sponsor")}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-16  basis-[50%]">
              <div className="flex flex-col items-center justify-center">
                <img src={bronzeIcon} alt="" />
                <div className="text-xl italic pt-3 text-center">
                  {t("sponsor_bronze-sponsor")}
                </div>
              </div>
              <div className="flex flex-row justify-center gap-[40px] flex-wrap">
                {Sponsors.filter((sponsor) => sponsor.type === "bronze").map(
                  (Sponsor, index) => {
                    return (
                      <div key={index} className="">
                        <img
                          className="w-[100px] h-[100px] object-cover object-center"
                          src={Sponsor.img}
                          alt=""
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="flex justify-center pt-[200px] pb-[80px]"
          >
            <Button text={t("contact_form-title")} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
