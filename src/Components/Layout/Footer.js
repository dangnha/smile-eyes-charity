import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="text-wrapper">Projects are calling volunteer</div>
        <div className="text-wrapper-1">Project are running</div>
        <div className="text-wrapper-2">Who we are</div>
        <div className="text-wrapper-3">Our Achievements</div>
        <div className="text-wrapper-4">OUR PROJECTS</div>
        <u className="line">Link1</u>
        <u className="line-1">Link1.1</u>
        <u className="line-2">Link2</u>
        <u className="line-3">Link3</u>
      </div>
      <div className="content-2">
        <div className="text-wrapper-5">FOLLOW US</div>
        <div className="text-wrapper-6">SMILE EYE CHARITY</div>
        <p className="smile-eye-charity">
          Smile Eye Charity LLC <br/>
          Head office address: Pa-Ong Village, Ca Dy Commune, Nam Giang
          District, Quang Nam Province <br/>
          Charter capital: 100 000 000 <br/>
          Director: Dinh Thi Dong Phuong <br/>
          Phone number: 0962 414 125 <br/>
          Email: dinhdongphuong@gmail.com
        </p>
        <div className="group">
          <div className="overlap-group">
            <div className="group-2">
              <div className="text-wrapper-7">YouTube</div>
              <div className="text-wrapper-8">Facebook</div>
              <div className="text-wrapper-9">Instagram</div>
            </div>
            <u className="line-4">Link4</u>
            <u className="line-5">Link5</u>
          </div>
          <u className="line-6">Link6</u>
          <a
            className="icon-facebook"
            href="/facebook-link"
          >
            Facebook
          </a>
          <a
            className="icon-youtube"
            href="https://www.youtube.com/@SmileEyeCharity-hp2ck"
          >
            YouTube
          </a>
          <a
            className="icon-instagram"
            href="/instagram-link"
          >
            Instagram
          </a>
        </div>
      </div>
      <u className="line-7">Link7</u>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group-3">
            <a href="/Home" className="text-wrapper-10">Home</a>
            <u className="line-8">Link8</u>
          </div>
          <div className="group-4">
            <a href="/Programs" className="text-wrapper-10">Projects</a>
            <u className="line-9">Link9</u>
          </div>
          <div className="group-5">
            <a href="/About" className="text-wrapper-10">About Us</a>
            <u className="line-10">Link10</u>
          </div>
          <div className="group-6">
            <a href="/Contact" className="text-wrapper-10">Contact</a>
            <u className="line-11">Link11</u>
          </div>
          <div className="group-7">
            <a href="/Sponsor" className="text-wrapper-10">Sponsor</a>
            <u className="line-12">Link12</u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;