import React from "react";
import UserItemsProfile from "../Components/UserItemsProfile/UserItemsProfile";
import Button from "../Components/Button/Button";

import "./AboutUs.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="aboutUS w-[100vw]">
        <div className="container-aboutUs">
          <div className="row-aboutUs">
            <div className="flex-aboutUs1 basis-[55%] flex justify-center items-center">
              <div className="container-image">
                <div className="image image1 bg-center"></div>
                <div className="image image2 bg-center"></div>
              </div>
            </div>
            <div className="flex-aboutUs2 basis-[33%] flex flex-col justify-center gap-5">
              <h3 className="title-page text-center">About Us</h3>
              <h4 className="text-heading">
                Step Forward Serve The Humanity Reach Out
              </h4>
              <p className="text-sub-heading">
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless. Spread sunshine in their
                lives no matter what the weather may be.
              </p>
              <div className="volunteer-banner flex gap-2">
                <div className="image-volunteer"> </div>
                <div className="text-volunteer">
                  <p className="text-volunteer-1">Work As An Volunteer</p>
                  <p className="text-volunteer-2">
                    You will have the opportunity to participate in charities
                    around the world
                  </p>
                </div>
              </div>
              <div className="volunteer-container-tel">
                <Button text="JOIN NOW" size="sz-small" color="cl-green" />
                <div className="volunteer-tel">
                  <i className="icon-tel fa-solid fa-phone"></i>
                  <div>
                    <p>Contact Us</p>
                    <p>0962 414 125</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-founder">
          <div className="heading-founder ">
            <h3 className="pl-[40px]">Our Founder</h3>
          </div>
          <div className="row-founder flex items-center justify-evenly">
            <div className="flex-founder basis-[45%] mt-8">
              <div className="text-sub-founder flex flex-col p-12 text-left">
                <i className="fa-solid fa-quote-left fa-xl mr-auto"></i>
                <p className="text-xl pl-10">
                  We provide opportunity support for children living in the
                  highlands, mountains and disadvantaged areas in Nam Giang. Our
                  main goal is to improve the quality of life of children so
                  that they develop comprehensively physically, mentally and
                  educationally.
                </p>
                <i className="fa-solid fa-quote-right fa-xl ml-auto"></i>
              </div>
            </div>
            <div className="flex-founder basis[50%] ">
              <div className="flex-founder-container -m-10">
                <div className="container-image-founder">
                  <div className="image-founder image3"></div>
                </div>
                <h1 className="name-founder">DINH THI DONG PHUONG</h1>
                <p className="position-founder uppercase">Founder</p>
                <p className="company-founder">From: Smile Eye Charity</p>
                <p className="email-founder">Email: dinhdongphuong@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-sponsor-main">
          <div div className="heading-founder">
            <h3>Our Founder</h3>
          </div>
          <div className="container-sponsor">
            <div className="sponsor-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Sponsor"
                address="Nghe An"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Sponsor"
                address="Nghe An"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Sponsor"
                address="Nghe An"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Sponsor"
                address="Nghe An"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Sponsor"
                address="Nghe An"
              />
            </div>
            <div className="sponsor-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Sponsor"
                address="Nghe An"
              />
            </div>
          </div>
        </div>

        <div className="container-volunteer-main">
          <div div className="heading-founder">
            <h3>Our Volunteers</h3>
          </div>
          <div className="container-volunteer">
            <div className="volunteer-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Volunteer"
                address="Nghe An"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Volunteer"
                address="Nghe An"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Volunteer"
                address="Nghe An"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Volunteer"
                address="Nghe An"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Volunteer"
                address="Nghe An"
              />
            </div>
            <div className="volunteer-item">
              <UserItemsProfile
                name="The Anh"
                url_Image="profile_user1.jpg"
                position="Volunteer"
                address="Nghe An"
              />
            </div>
          </div>
        </div>

        <div className="container-achievement-main">
          <p id="achievement-title">OUR MISSION</p>
          <div className="achievement-content flex flex-row">
            <div className="achievement-des">
              <p id="achieved">Achieved</p>
              <p id="achieved-des">
                We register and regulate charities in England and Wales, to
                ensure that the public can support charities with confidence. As
                registrar, we are responsible for maintaining an accurate.
              </p>
              <p id="aim-title">Our strategic priorities up to 2025 are:</p>
              <p id="achieved-des">
                Protecting charities from abuse or mismanagement
              </p>
              <p id="achieved-des">
                Enabling trustees to run their charities effectively
              </p>
              <p id="achieved-des">
                Encouraging greater transparency and accountability
              </p>
              <div className="achievement-aim flex flex-row mt-10">
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">132+</p>
                  <p id="achieved-des">Primary School</p>
                </div>
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">10+</p>
                  <p id="achieved-des">Hospitals</p>
                </div>
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">100+</p>
                  <p id="achieved-des">Volunteers</p>
                </div>
                <div className="achievement-aim-des mr-10">
                  <p id="number-achievement">20+</p>
                  <p id="achieved-des">Awards</p>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;