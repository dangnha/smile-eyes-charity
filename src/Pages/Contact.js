import { useTranslation } from "react-i18next";

import ContactForm from "../Components/Item/ContactForm";
import bgimg from "../images/Rectangle.png";
import infoimg from "../images/Rectangle73.png";
import finalimg from "../images/Rectangle77.png";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact flex flex-col justify-center items-center">
      <div className="w-[100vw] lg:h-full md:h-[1200px] h-[1000px] py-10 relative">
        <img
          className="w-full h-full object-center object-cover "
          src={bgimg}
          alt="Not Found"
        />
        <div className="w-full h-full bg-black bg-opacity-20 absolute top-0 flex justify-center items-center">
          <div className="absolute">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="contact-info w-[100vw] bg-[#F6FFF6] flex justify-center items-center py-20">
        <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
          <div className="self-mid mb-10 text-4xl uppercase contact_information-title">
            {t("contact_information-title")}
          </div>
          <div className="w-full flex md:flex-row flex-col justify-center md:gap-16 gap-8">
            <div className="basis-[50%]">
              {/* <img src={infoimg} alt="Not found" /> */}
              <p className="contact-des">{t("contact_information-content")}</p>
            </div>
            <div className=" basis-[50%]">
              <div className="text-2xl font-serif flex flex-col justify-center items-start gap-8">
                <div className="">
                  <i className="pr-3 w-8 fa-solid fa-location-pin"></i>
                  {t("contact_information-address")}
                </div>
                <a href="mailto:dinhdongphuong@gmail.com">
                  <i className="pr-3 w-8 fa-solid fa-envelope"></i>
                  {t("contact_information-email")}: dinhdongphuong@gmail.com
                </a>
                <a href="">
                  <i className="pr-3 w-8 fa-solid fa-building-columns"></i>{" "}
                  {t("contact_information-bank_account")}: Techcombank,
                  22296699, Smile Eye Charity
                </a>
                <a href="">
                  <i className="pr-3 w-8 fa-solid fa-person"></i>{" "}
                  {t("contact_information-representative")}: DINH THI DONG
                  PHUONG
                </a>
                <a href="tel:+84962414125">
                  <i className="pr-3 w-8 fa-solid fa-phone"></i>{" "}
                  {t("contact_information-phone")}: 0962 414 125
                </a>
                <a href="tel:+">
                  <i className="pr-3 w-8 fa-solid fa-sitemap"></i>{" "}
                  {t("contact_information-organization")}: 4001273487
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[70vh] relative">
        <img
          className="w-full h-full object-cover object-center"
          src={finalimg}
          alt="Not found"
        />
        <div className="lg:w-[50%] w-[100%] h-full bg-black bg-opacity-40 absolute top-0 left-0 bottom-0 right-0 text-white font- flex flex-col justify-center px-[120px] gap-[30px]">
          <div className="text-4xl font-semibold">
            {t("contact_information-the_lie1")}
          </div>
          <div className="text-2xl">{t("contact_information-the_lie2")}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
