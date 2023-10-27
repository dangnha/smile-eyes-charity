import React from "react";
import { Footer } from "/Users/minhp/OneDrive/Documents/GitHub/smile-eyes-charity/src/Components/Layout/Footer";
import { Header } from "/Users/minhp/OneDrive/Documents/GitHub/smile-eyes-charity/src/Components/Layout/Header";
import "./Sponsor.css";

export const Sponsor = () => {
  return (
    <div className="sponsor">
      <div className="div-2">
        <Footer/>
        <div className="overlap-2">
          <div className="section">
            <div className="text-wrapper-14">OUR SPONSORS</div>
            <img className="line-13" alt="Line" src="Line 30.png" />
            <img className="line-14" alt="Line" src="Line 30.png" />
            <div className="group-10">
              <div className="overlap-group-3">
                <img
                  className="icon-quote-up"
                  alt="Icon quote up"
                  src="IconQuoteUp.png"
                />
                <p className="p">
                  We feel very appreciated and grateful for your sponsorship. Thank you for contributing to building our organization further.
                </p>
                <img
                  className="icon-quote-down"
                  alt="Icon quote down"
                  src="IconQuoteDown.png"
                />
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-3">
                <img
                  className="advance"
                  alt="Advance"
                  src="IconAdvance.png"
                />
                <div className="text-wrapper-15">
                  <a href="#" className="sponsor-link">Become Our Sponsor</a>
                </div>
              </div>
            </div>
            <div className="text-wrapper-16">Gold Sponsors</div>
            <div className="text-wrapper-17">Bronze Sponsors</div>
            <div className="text-wrapper-18">Silver Sponsors</div>
          </div>
          <img className="icon-award" alt="Icon award" src="IconAward.png" />
          <div className="group-11">
            <div className="overlap-4">
              <img
                className="rectangle-2"
                alt="Rectangle"
                src="NSW.png"
              />
              <div className="div-3" />
            </div>
            <div className="div-3">
              <img
                className="rectangle-3"
                alt="Rectangle"
                src="Rectangle 98.png"
              />
            </div>
            <div className="rectangle-wrapper">
              <img
                className="rectangle-4"
                alt="Rectangle"
                src="Rectangle 99.png"
              />
            </div>
          </div>
          <div className="group-12">
            <div className="overlap-5">
              <div className="ellipse" />
              <img
                className="ellipse-2"
                alt="Ellipse"
                src="Ellipse 35.png"
              />
              <img
                className="icon-award-2"
                alt="Icon award"
                src="IconAward1.png"
              />
              <img
                className="icon-award-3"
                alt="Icon award"
                src="IconAward2.png"
              />
            </div>
            <div className="group-13">
              <img
                className="rectangle-5"
                alt="Rectangle"
                src="Rectangle 101.png"
              />
              <img
                className="rectangle-6"
                alt="Rectangle"
                src="Rectangle 102.png"
              />
              <img
                className="rectangle-7"
                alt="Rectangle"
                src="Rectangle 103.png"
              />
              <img
                className="rectangle-8"
                alt="Rectangle"
                src="Rectangle 104.png"
              />
              <img
                className="rectangle-9"
                alt="Rectangle"
                src="Rectangle 105.png"
              />
            </div>
            <div className="group-14">
              <img
                className="rectangle-10"
                alt="Rectangle"
                src="Rectangle 106.png"
              />
              <img
                className="rectangle-11"
                alt="Rectangle"
                src="Rectangle 106.png"
              />
              <img
                className="rectangle-12"
                alt="Rectangle"
                src="Rectangle 106.png"
              />
              <img
                className="rectangle-13"
                alt="Rectangle"
                src="Rectangle 106.png"
              />
              <img
                className="rectangle-14"
                alt="Rectangle"
                src="Rectangle 106.png"
              />
            </div>
          </div>
        </div>
        <Header/>
        <div className="div-wrapper">
          <div className="overlap-6">
            <img
              className="rectangle-15"
              alt="Rectangle"
              src="link-to-rectangle-30.png"
            />
            <a href="#" className="button">
              <div className="overlap-group-4">
                <img
                  className="icon-arrow-right"
                  alt="Icon arrow right"
                  src="IconArrowRight.png"
                />
                <div className="text-wrapper-19">Our Projects</div>
              </div>
            </a>
            <p className="content-3">
              Improve the quality of life, comprehensive mental and educational development for children in Nam Giang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;