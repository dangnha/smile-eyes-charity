import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Document, Page } from "react-pdf";
import "./program_item.css";
import NormalBtn from "../../Button/NormalBtn";
import iconShare from "../../../images/share.png";
import iconHeart from "../../../images/heart.png";

function ProgramItem({ props }) {
  // State for handle pdf preview
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(null); // New state for the error

  const onDocumentSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentError = (error) => {
    setPdfError(error);
    console.error("Error loading PDF:", pdfError);
    // You can also set an error message in the state for rendering an error message to the user.
    setPdfError("Error loading PDF. Please try again later.");
  };

  const openPdfModal = (file) => {
    console.log(file);
    setPdfFile(file);
    setPdfModalOpen(true);
    setPdfError(null); // Reset error state
  };

  const closePdfModal = () => {
    setPdfModalOpen(false);
  };

  return (
    <div className="program-item mb-6">
      {/* header */}
      <div className="header mb-6">
        <div className="header_title flex justify-between">
          <h2 className="text-2xl font-medium">{props.title}</h2>
          <img
            src={iconShare}
            className="w-10 h-10 ms-5 hover:cursor-pointer"
            alt="icon share"
          />
        </div>
        <div className="header_date text-xl">
          <span>Time: </span>
          <span>{props.date}</span>
        </div>
      </div>

      {/* video */}
      <div className="video w-full mb-6">
        <iframe
          loading="lazy"
          width="500"
          height="300"
          src={props.linkYT}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* contents */}
      <div className="contents">
        <p className="contents_description text-xl text-left mb-3">
          {props.des}
        </p>
        {/* Update code to preview pitch file and plan file */}
        <div className="contents_files text-2xl mb-3">
          <Link to="" onClick={() => openPdfModal(props.pitchFile)}>
            <span className="underline underline-offset-2 mr-7">
              Pitch file
            </span>
          </Link>
          <Link to="" onClick={() => openPdfModal(props.planFile)}>
            <span className="underline underline-offset-2">Plan file</span>
          </Link>
        </div>

        <div className="contents_progress mb-2 text-2xl hover:cursor-pointer flex justify-between items-center">
          <span className="mr-7">Funding</span>
          <Tippy content="65%">
            <progress value="65" max="100"></progress>
          </Tippy>
        </div>

        <div className="contents_bottom flex justify-between gap-11">
          <div className="likes flex flex-col items-center ms-4">
            <span className="iconLove block">
              <img src={iconHeart} className="w-14 h-14" alt="icon love" />
            </span>
            <span className="amountOfLikes text-xl font-medium leading-4 block">
              {props.amoutOfLikes}
            </span>
          </div>

          <div className="button_sponsors">
            <NormalBtn text="Be a contributor or sponsor" />
          </div>
        </div>
      </div>

      {/* Code model pdf preview */}
      {pdfModalOpen && pdfFile && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentSuccess}
              onError={onDocumentError}
            >
              {Array(numPages)
                .fill()
                .map((_, i) => (
                  <Page pageNumber={i + 1} />
                ))}
            </Document>
            {pdfError && <p className="error-message">{pdfError}</p>}
            <button onClick={closePdfModal}>Close PDF</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgramItem;
