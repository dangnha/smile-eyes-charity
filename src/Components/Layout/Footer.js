import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from "react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer flex flex-col justify-around">
      <div className="footer-content flex flex-row">
        <div className="footer-content-1">
          <p className="footer-content-title">{t("footer_projects")}</p>
          <p className="underline">{t("footer_projects-about_us")}</p>
          <p className="underline">{t("footer_projects-rasing")}</p>
          <p className="underline">{t("footer_projects-running")}</p>
          <p className="underline">{t("footer_projects-done")}</p>
        </div>
        <div className="footer-content-2">
          <p className="footer-content-title">
            {t("footer_social-media-title")}
          </p>
          <div className="flex flex-row items-center">
            <i class="icon-footer fa-brands fa-square-facebook"></i>
            <p>Facebook</p>
          </div>
          <div className="flex flex-row items-center">
            <i class="icon-footer fa-brands fa-youtube"></i>
            <p>Youtube</p>
          </div>
          <div className="flex flex-row items-center">
            <i class="icon-footer fa-brands fa-square-instagram"></i>
            <p>Instagram</p>
          </div>
        </div>
        <div className="footer-content-3">
          <p className="footer-content-title">SMILE EYE CHARITY</p>
          <p>{t("footer_company-infor-name")}</p>
          <p>{t("footer_company-infor-address")}</p>
          <p>{t("footer_company-infor-charter-capital")}: 100 000 000</p>
          <p>{t("footer_company-infor-director")}: Dinh Thi Dong Phuong</p>
          <p>{t("footer_company-infor-phone")}: 0962 414 125</p>
          <p>Email: dinhdongphuong@gmail.com</p>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-tile-nav flex flex-row">
        <Link to="/">
          <p id="footer-title-line-right" className="underline">
            {t("home")}
          </p>
        </Link>
        <Link to="/programs">
          <p id="footer-title-line-right" className="underline">
            {t("projects")}
          </p>
        </Link>
        <Link to="/aboutus">
          <p id="footer-title-line-right" className="underline">
            {t("about")}
          </p>
        </Link>
        <Link to="/contact">
          <p id="footer-title-line-right" className="underline">
            {t("contact")}
          </p>
        </Link>
        <Link to="/sponsor">
          <p className="underline">{t("sponsor")}</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
