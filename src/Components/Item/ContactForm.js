import React from "react";
const ContactForm = () => {
  return (
    <div className="container mx-auto my-20 w-[55vw] h-[85vh] border border-white bg-[#005000] opacity-35 pt-[10px] ">
      <div className="flex flex-col justify-center items-center">
        <p className="w-[85%] text-left text-white text-[58px] font-extrabold font-['Inter']">
          {" "}
          Be come our sponsors
        </p>
        <p className="w-[85%] text-white text-left text-[20px] ">
          Please become a part of us, join hands in building a loving community.
        </p>
        <p className="w-[85%] text-white text-left text-[20px] ">
          Submit your information in this below form to start new journey.{" "}
        </p>
        <br />
        <form className="w-[85%] ">
          <div className="flex flex-col gap-5 justify-center items-center">
            <textarea
              required
              cols="10"
              rows="5"
              className="w-[100%] text-white text-xl border border-white bg-transparent px-3 py-2.5 font-sans font-normal placeholder-white col-span-2 rounded-[5px]"
              placeholder="Questions/ Contributions *"
            ></textarea>
            <div className="flex flex-row gap-20 justify-center items-center w-[100%]">
              <input
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal placeholder-white"
                placeholder="Your Name / Anonymous "
              />
              <input
                required
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal placeholder-white"
                placeholder="Your Email *"
              />
            </div>
            <div className="flex flex-row gap-20 justify-center items-center w-[100%]">
              <select
                required
                className=" text-white peer h-full w-full rounded-[5px] border border-blue-gray-200 bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:outline-none "
              >
                <option className="text-black" value="0">
                  Select *
                </option>
                <option className="text-black" value="Contribute">
                  Contribute
                </option>
                <option className="text-black" value="Volunteer">
                  Volunteer
                </option>
                <option className="text-black" value="Sponsor">
                  Sponsor
                </option>
              </select>
              <input
                type="file"
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Upload your CV"
              />
            </div>
            <div className="w-[100%] flex justify-end my-3">
              <button className="submit text-[#005000] text-opacity-85 font-bold text-base rounded-full px-8 py-3 bg-white">
                JOIN NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
