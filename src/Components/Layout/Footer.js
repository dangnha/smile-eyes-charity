import "./Footer.css"
import React from "react";

const Footer = ({
  className,
  contentClassName,
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  lineClassName,
  line,
  lineClassNameOverride,
  img,
  imgClassName,
  line1,
  imgClassNameOverride,
  line2,
  contentClassNameOverride,
  smileEyeCharityClassName,
  groupClassName,
  overlapGroupClassName,
  groupClassNameOverride,
  divClassName3,
  divClassName4,
  line3,
  lineClassName1,
  line4,
  lineClassName2,
  line5,
  iconFacebookClassName,
  iconYoutubeClassName,
  iconInstagramClassName,
}) => {
  return (
    <div className="footer">
    <div className="content">
      <div className="text-wrapper">Projects are calling volunteer</div>
      <div className="div">Project are running</div>
      <div className="text-wrapper-2">Who we are</div>
      <div className="text-wrapper-3">Our Achievements</div>
      <div className="text-wrapper-4">OUR PROJECTS</div>
      <img className="line" alt="Line" src= "./images/Line23.svg" />
      <img className="img" alt="Line" src="./images/Line24.svg" />
      <img className="line-2" alt="Line" src="./images/Line25.svg" />
      <img className="line-3" alt="Line" src="./images/Line26.svg" />
    </div>
    <div className="content-2">
      <div className="text-wrapper-5">FOLLOW US</div>
      <div className="text-wrapper-6">SMILE EYE CHARITY</div>
      <p className="smile-eye-charity">
        Smile Eye Charity LLC <br />
        Head office address: Pa-Ong Village, Ca Dy Commune, Nam Giang District, Quang Nam Province <br />
        Charter capital: 100 000 000 <br />
        Director: Dinh Thi Dong Phuong <br />
        Phone number: 0962 414 125 <br />
        Email: dinhdongphuong@gmail.com
      </p>
      <div className="group">
        <div className="overlap-group">
          <div className="group-2">
            <div className="text-wrapper-7">YouTube</div>
            <div className="text-wrapper-8">Facebook</div>
            <div className="text-wrapper-9">Instagram</div>
          </div>
          <img className="line-4" alt="Line" src="./images/Line23-F.png" />
          <img className="line-5" alt="Line" src="./images/Line25-Y.png" />
        </div>
        <img className="line-6" alt="Line" src="./images/Line26-F.png" />
        <img className="icon-facebook" alt="Icon facebook" src="./images/IconFacebook.png" />
        <img className="icon-youtube" alt="Icon youtube" src="./images/IconYoutube.png" />
        <img className="icon-instagram" alt="Icon instagram" src="./images/IconInstagram.png" />
      </div>
    </div>
    <img
      className="line-7"
      alt="Line"
      src="./images/Line27.svg"
    />
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="group-3">
          <div className="QA-contact">QA & Contact</div>
          <div className="text-wrapper-10">Project</div>
          <img
            className="line-8"
            alt="Line"
            src="./images/Line29.svg"
          />
        </div>
        <div className="group-4">
          <div className="text-wrapper-10">Contributor</div>
          <img
            className="line-9"
            alt="Line"
            src="./images/Line29.svg"
          />
        </div>
        <div className="group-5">
          <div className="text-wrapper-10">Blogs</div>
          <img
            className="line-10"
            alt="Line"
            src="./images/Line29.svg"
          />
        </div>
        <div className="group-6">
          <div className="text-wrapper-10">Achievement</div>
          <img
            className="line-11"
            alt="Line"
            src="./images/Line29.svg"
          />
        </div>
        <div className="group-7">
          <div className="text-wrapper-10">Activities</div>
          <img
            className="line-12"
            alt="Line"
            src="./images/Line29.svg"
          />
        </div>
      </div>
    </div>
  </div>
);
};

export default Footer;
