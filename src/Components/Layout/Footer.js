import { Link } from "react-router-dom";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-around">
      <div className="footer-content flex flex-row">
        <div className="footer-content-1">
          <p className="footer-content-title">OUR PROJECT</p>
          <p className="underline">Who we are</p>
          <p className="underline">Projects are calling volunteer</p>
          <p className="underline">Projects are running</p>
          <p className="underline">Our achievements</p>
        </div>
        <div className="footer-content-2">
          <p className="footer-content-title">FOLLOW US</p>
          <div className="flex flex-row items-center">
            <i class="icon-footer fa-brands fa-square-facebook"></i>
            <p>Facebook</p>
          </div>
          <div className="flex flex-row items-center">
            <i class="icon-footer fa-brands fa-youtube"></i>
            <p>YouTube</p>
          </div>
          <div className="flex flex-row items-center">
            <i class="icon-footer fa-brands fa-square-instagram"></i>
            <p>Instagram</p>
          </div>
        </div>
        <div className="footer-content-3">
          <p className="footer-content-title">SMILE EYE CHARITY</p>
          <p>Smile Eye Charity LLC</p>
          <p>Head office address: Pa-Ong Village, Cà Dy Commune, Nam Giang District, Quang Nam Province</p>
          <p>Charter capital: 100 000 000</p>
          <p>Director: Dinh Thi Dong Phuong</p>
          <p>Phone number: 0962 414 125</p>
          <p>Email: dinhdongphuong@gmail.com</p>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-tile-nav flex flex-row">
        <Link to="/"><p id="footer-title-line-right" className="underline">Home</p></Link>
        <Link to="/programs"><p id="footer-title-line-right" className="underline">Projects</p></Link>
        <Link to="/aboutus"><p id="footer-title-line-right" className="underline">About Us</p></Link>
        <Link to="/contact"><p id="footer-title-line-right" className="underline">Contact</p></Link>
        <Link to="/sponsor"><p className="underline">Sponsors</p></Link>
      </div>
    </div>
  );
};

export default Footer;
