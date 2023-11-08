import React, { useState } from "react";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("0");
  const [file, setFile] = useState(null);

  const handleSendEmail = () => {
    const recipientEmail = "minhltb.21it@vku.udn.vn"; // Replace with the recipient's email address
    const subject = email;
    const body = `Message contribution: ${message}\nName: ${name}\nPurpose: ${option}\nProfile Link: ${file}`;

    // Create a mailto link with subject, body, and attachments
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mx-auto my-20 w-[55vw] h-[85vh] border border-white bg-[#005000] opacity-35 pt-[10px] ">
      <div className="flex flex-col justify-center items-center">
        <p className="w-[85%] text-left text-white text-[30px] font-extrabold font-['Inter']">
          {" "}
          Be come our sponsors
        </p>
        <p className="w-[85%] text-white text-left text-[18px] ">
          Please become a part of us, join hands in building a loving community.
        </p>
        <p className="w-[85%] text-white text-left text-[18px] ">
          Submit your information in this below form to start new journey.{" "}
        </p>
        <br />
        <form className="w-[85%]">
          <div className="flex flex-col gap-5 justify-center items-center">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              cols="10"
              rows="5"
              className="w-[100%] text-white text-xl border border-white bg-transparent px-3 py-2.5 font-sans font-normal placeholder-white col-span-2 rounded-[5px]"
              placeholder="Questions/ Contributions *"
            ></textarea>
            <div className="flex flex-row gap-20 justify-center items-center w-[100%]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal placeholder-white"
                placeholder="Your Name / Anonymous "
              />
              <input
                required
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal placeholder-white"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-20 justify-center items-center w-[100%]">
              <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                className=" text-white peer h-full w-full rounded-[5px] border border-blue-gray-200 bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:outline-none "
              >
                <option className="text-black">Select *</option>
                <option value="Contribution" className="text-black">
                  Contribution
                </option>
                <option value="Volunteer" className="text-black">
                  Volunteer
                </option>
                <option value="Sponsor" className="text-black">
                  Sponsor
                </option>
              </select>
              <input
                type="text"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 text-xl py-5 font-sans font-normal placeholder-white"
                placeholder="Send your profile link"
              />
            </div>
            <div className="w-[100%] flex justify-end my-3">
              <button
                onClick={handleSendEmail}
                className="submit text-[#005000] text-opacity-85 font-bold text-base rounded-full px-8 py-3 bg-white"
              >
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
