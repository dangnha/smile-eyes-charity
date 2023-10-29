import React from "react";
import Button from "../Components/Button/Button";
import "./Sponsor.css";

const Sponsor = () => {
  const sponsors = [
    { type: "Gold Sponsors", logos: ["NSW.png", "Rectangle 98.png", "Rectangle 99.png"] },
    { type: "Bronze Sponsors", logos: ["Rectangle 106.png"] },
    { type: "Silver Sponsors", logos: ["Rectangle 101.png", "Rectangle 102.png", "Rectangle 103.png", "Rectangle 104.png", "Rectangle 105.png"] },
  ];

  const awards = ["IconAward1.png", "IconAward2.png"];

  const renderSponsors = (sponsorType) => {
    return sponsors.map((sponsor, kindofspons) => {
      if (sponsor.type === sponsorType) {
        return (
          <div key={kindofspons}>
            <div className="text-wrapper">{sponsor.type}</div>
            <div className="overlap-4">
            {sponsor.logos.map((logo, losspons) => (
              <img className="rectangle" alt="Rectangle" src={logo} key={losspons} />
            ))}
            {sponsor.logos.length > 1 && <div className="div-3"></div>}
            </div>
          </div>
        );
      }
      return null;
    });
  };

  const renderAwards = () => {
    return awards.map((award, sponsawa) => (
      <img className="rectangle" alt="Rectangle" src={award} key={sponsawa} />
    ));
  };  

  return (
    <div className="sponsor">
      <div className="div-wrapper">
        <div className="overlap-6">
          <p className="content-3">
            Improve the quality of life, comprehensive mental and educational development for children in Nam Giang
          </p>
          <div className ="button_our_projects">
              <Button text="Our Projects" />
          </div>
          <img className="rectangle" alt="Rectangle" src="Rectangle 30.png" />
        </div>
      </div>
      <div className="div-2 overlap-2">
        <div className="section">
          <div className="text-wrapper-14">OUR SPONSORS</div>
          <img className="line" alt="Line" src="Line 30.png" />
          <p className="p">
            We feel very appreciated and grateful for your sponsorship. Thank you for contributing to building our organization further.
          </p>
          <div className="text-wrapper">Gold Sponsors</div>
          {renderSponsors("Gold Sponsors")}
          <div className="text-wrapper">Bronze Sponsors</div>
          {renderSponsors("Bronze Sponsors")}
          <div className="text-wrapper">Silver Sponsors</div>
          {renderSponsors("Silver Sponsors")}
          <div className ="button_become_our_sponsor">
              <Button text="Become Our Sponsor" />
          </div>
        </div>
        <img className="icon-award" alt="Icon award" src="IconAward.png" />
        <div className="group-11">{renderAwards()}</div>
        <div className="group-12">
          {Array(5).fill().map((_, sponsawa1) => (
            <div key={sponsawa1}>
              <div className="overlap-5">
                <div className="ellipse" />
                <img className="ellipse" alt="Ellipse" src="Ellipse 35.png" />
                {renderAwards()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;