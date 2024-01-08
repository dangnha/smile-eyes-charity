import React, { useRef, useEffect } from "react";
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";

const BlogModel = ({ onClose }) => {
  const secondDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        secondDivRef.current &&
        !secondDivRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className=" fixed z-50 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div
        className="w-[90vw] max-h-[90vh] bg-[#EFF4FB] overscroll-auto overflow-auto"
        ref={secondDivRef}
      >
        <div className="flex flex-col gap-10 justify-center items-center mb-14">
          <div className="w-[100%] flex justify-end">
            <button onClick={onClose} className="text-xl font-normal px-3 py-4">
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-[20px] gap-5 mb-10">
            <div className="text-3xl font-serif uppercase font-semibold">
              SUPPORT FOOD AND CLOTHES BEFORE RAINY SEASONS-2023
            </div>
            <div className="text-xl font-serif uppercase ">July 2023</div>
          </div>

          {/* <div className="w-[60%] mb-6">
            <div className="font-sans text-2xl text-[#993300] mb-3">
              Overview
            </div>
            <div className="font-sans text-xl text-justify">
              The exceptional charities on this list have earned perfect scores
              across all four beacons in our Encompass Rating System. Based on
              our metrics, these organizations are highly impactful in their
              given cause area, are fiscally responsible and transparent, and
              follow leadership and organizational culture best practices. Less
              than one-tenth of one percent of charities we rate earn a perfect
              score!
              <br />
              <div className="h-[20px]"></div>
              We applaud these charities for being highly impactful and
              outperforming other organizations performing similar work.
              <br />
              <div className="h-[20px]"></div>
              Please click on the names of the high-performing charities
              included in our list to learn more about their mission, programs,
              and services and to make a donation via the Giving Basket.
            </div>
          </div> */}
          <div className="w-[70%] mb-6">
            <div className="font-sans text-xl text-justify">
              Business owner of Cortex Textile{" "}
              <a href="www.cortextextile.com">(www.cortextextile.com)</a> and
              his employees prepared food, clothes, toothbrushes and toothpaste,
              sanitary napkins for girls, milk for special children, and more.
              They personally brought the items back to the village and
              explained to the villagers how to use them with love. The
              villagers welcomed everyone with a lunch of special dishes from
              the mountains and forests. We all had a fun together.
            </div>
            <br />
            <div className="font-sans text-xl text-justify">
              We feel happy because all of us have a warmer winter.
            </div>
          </div>

          <div className="w-[75%] flex">
            <img src={image1} alt="Not found" className="w-[50%]" />
            <img src={image2} alt="Not found" className="w-[50%]" />
          </div>

          {/* <div className="w-[60%] mb-6">
            <div className="font-sans text-2xl text-[#993300] mb-3">
              Our Mission
            </div>
            <div className="font-sans text-xl text-justify">
              The exceptional charities on this list have earned perfect scores
              across all four beacons in our Encompass Rating System. Based on
              our metrics, these organizations are highly impactful in their
              given cause area, are fiscally responsible and transparent, and
              follow leadership and organizational culture best practices. Less
              than one-tenth of one percent of charities we rate earn a perfect
              score!
              <br />
              <div className="h-[20px]"></div>
              We applaud these charities for being highly impactful and
              outperforming other organizations performing similar work.
              <br />
              <div className="h-[20px]"></div>
              Please click on the names of the high-performing charities
              included in our list to learn more about their mission, programs,
              and services and to make a donation via the Giving Basket.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogModel;
