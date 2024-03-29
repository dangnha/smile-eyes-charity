import React from "react";
import UserItemsProfile from "../Components/UserItemsProfile/UserItemsProfile";
import Button from "../Components/Button/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="aboutUS md:pt-20 mt-5 w-[100vw]">
        <div className="container-aboutUs">
          <div className="row-aboutUs mb-16 flex flex-col lg:flex-row">
            <div className="flex-aboutUs1 basis-[55%] flex justify-center items-center">
              <div className="container-image">
                <div className="image image1 bg-center lg:w-[100%] max-w-[70%] max-h-[70%]"></div>
                <div className="image image2 bg-center lg:w-[100%] max-w-[70%] max-h-[70%]"></div>
              </div>
            </div>
            <div className="flex-aboutUs2 basis-[33%] flex flex-col lg:mt-0 md:mt-0 mt-0 md:mb-0 mb-14 justify-center lg:items-start items-center gap-5">
              <h3 className="title-page text-center">{t("about-us-1")}</h3>
              <h4 className="text-heading">{t("about-us-2")}</h4>
              <p className="text-sub-heading">{t("about-us-3")}</p>
              <div className="volunteer-banner flex gap-2">
                <div className="image-volunteer"> </div>
                <div className="text-volunteer">
                  <p className="text-volunteer-1">{t("about-us-4")}</p>
                  <p className="text-volunteer-2">{t("about-us-5")}</p>
                </div>
              </div>
              <div className="volunteer-container-tel">
                <Link to="/contact">
                  <Button
                    text={t("button-join-now")}
                    size="sz-small"
                    color="cl-green"
                  />
                </Link>

                <div className="volunteer-tel">
                  <i className="icon-tel fa-solid fa-phone"></i>
                  <div className="volunteer-tel-wrapper">
                    <p>{t("about-us-6")}</p>
                    <p>0962 414 125</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-founder lg:pb-24 lg:pt-20 pb-20 pt-10">
          <div className="heading-founder ">
            <h3 className="pl-[40px]">{t("about-us-title-1")}</h3>
          </div>
          <div className="row-founder flex lg:flex-row flex-col lg:gap-0 gap-20 items-center justify-evenly">
            <div className="flex-founder lg:basis-[50%] basis-[40%] mt-8">
              <div className="text-sub-founder flex flex-col p-12 text-left">
                <i className="fa-solid fa-quote-left fa-xl mr-auto"></i>
                <p className="text-xl pl-10">{t("profile-des")}</p>
                <i className="fa-solid fa-quote-right fa-xl ml-auto"></i>
              </div>
            </div>
            <div className="flex-founder lg:basis[40%] basis-[40%] lg:pb-0 pb-10">
              <div className="flex-founder-container -m-10">
                <div className="container-image-founder">
                  <div className="image-founder image3"></div>
                </div>
                <h1 className="name-founder">{t("profile-intro1")}</h1>
                <p className="position-founder uppercase">
                  {t("profile-intro2")}
                </p>
                <p className="company-founder">{t("profile-intro3")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-sponsor-main">
          <div div className="heading-founder">
            <h3>{t("about-us-title-2")}</h3>
          </div>
          <div className="container-sponsor grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-20">
            <div className="sponsor-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-1")}
                address="Da Nang"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-1")}
                address="Da Nang"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-1")}
                address="Da Nang"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-1")}
                address="Da Nang"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-1")}
                address="Da Nang"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-1")}
                address="Da Nang"
              />
            </div>
          </div>
        </div>

        <div className="container-volunteer-main lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-20">
          <div div className="heading-founder">
            <h3>{t("about-us-title-3")}</h3>
          </div>
          <div className="container-volunteer">
            <div className="volunteer-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-2")}
                address="Da Nang"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-2")}
                address="Da Nang"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-2")}
                address="Da Nang"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-2")}
                address="Da Nang"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-2")}
                address="Da Nang"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="Dong Phuong"
                url_Image="profile_user1.jpg"
                position={t("profile-position-2")}
                address="Da Nang"
              />
            </div>
          </div>
        </div>

        {/* <div className="container-achievement-main">
          <p id="achievement-title">{t("about-us-title-4")}</p>
          <div className="achievement-content flex flex-row">
            <div className="achievement-des">
              <p id="achieved">{t("mission-1")}</p>
              <p id="achieved-des">{t("mission-2")}</p>
              <p id="aim-title">{t("mission-3")}</p>
              <p id="achieved-des">{t("mission-4")}</p>
              <p id="achieved-des">{t("mission-5")}</p>
              <p id="achieved-des">{t("mission-6")}</p>
              <div className="achievement-aim flex flex-row mt-10">
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">132+</p>
                  <p id="achieved-des">{t("mission-7")}</p>
                </div>
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">10+</p>
                  <p id="achieved-des">{t("mission-8")}</p>
                </div>
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">100+</p>
                  <p id="achieved-des">{t("mission-9")}</p>
                </div>
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">20+</p>
                  <p id="achieved-des">{t("mission-10")}</p>
                </div>
              </div>
            </div>
            <div className="achievement-image flex flex-col items-center">
              <div className="achievement-image-up flex items-center mb-2">
                <img src="./images/achievement-up.png" alt="abc"></img>
              </div>
              <div className="achievement-image-down flex flex-row justify-center">
                <div className="achievement-image-down-1 mr-2">
                  <img src="./images/achievement-down1.png" alt="abc"></img>
                </div>
                <div className="achievement-image-down-1">
                  <img src="./images/achievement-down2.png" alt="abc"></img>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default About;
