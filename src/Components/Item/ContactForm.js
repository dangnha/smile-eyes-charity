import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("0");
  const [file, setFile] = useState(null);

  const { t } = useTranslation();

  const handleSendEmail = () => {
    const recipientEmail = "nhand.21it@vku.udn.vn"; // Replace with the recipient's email address
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
    <div className="container mx-auto lg:w-[55vw] md:w-[90%] w-[96%] pt-10 pb-8 border border-white bg-[#005000] opacity-35">
      <div className="flex flex-col justify-center items-center">
        <p className="w-[85%] text-left pb-3 text-white lg:text-4xl md:text-2xl text-lg font-extrabold font-['Inter']">
          {t("contact_form-title")}
        </p>
        <p className="w-[85%] text-white text-left text-[18px] ">
          {t("contact_form-encouragement1")}
        </p>
        <p className="w-[85%] text-white text-left text-[18px] ">
          {t("contact_form-encouragement2")}
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
              className="w-[100%] text-white lg:text-xl md:text-lg text-base border border-white bg-transparent px-3 py-2.5 font-sans font-normal placeholder-white col-span-2 rounded-[5px]"
              placeholder={t("contact_form-comments")}
            ></textarea>
            <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-center items-center w-[100%]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 lg:text-xl md:text-lg text-base py-5 font-sans font-normal placeholder-white"
                placeholder={t("contact_form-name")}
              />
              <input
                required
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 lg:text-xl md:text-lg text-base py-5 font-sans font-normal placeholder-white"
                placeholder={t("contact_form-email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-center items-center w-[100%]">
              <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                className=" text-white peer h-full w-full rounded-[5px] border border-blue-gray-200 bg-black bg-opacity-0 px-3 lg:text-xl md:text-lg text-base py-5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:outline-none "
              >
                <option className="text-black">
                  {t("contact_form-selection")}
                </option>
                <option value="Contributionaaa" className="text-black">
                  {t("contact_form-select_contribution")}
                </option>
                <option value="Volunteer" className="text-black">
                  {t("contact_form-select_volunteer")}
                </option>
                <option value="Sponsor" className="text-black">
                  {t("contact_form-select_sponsor")}
                </option>
              </select>
              <input
                type="text"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                className=" text-white peer h-full w-full rounded-[5px] border border-white bg-black bg-opacity-0 px-3 lg:text-xl md:text-lg text-base py-5 font-sans font-normal placeholder-white"
                placeholder={t("contact_form-profile_link")}
              />
            </div>
            <div className="w-[100%] flex justify-end my-3">
              <button
                onClick={handleSendEmail}
                className="submit text-[#005000] text-opacity-85 font-bold text-base rounded-full px-8 py-3 bg-white"
              >
                {t("contact_form-btn_join")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
