import React, { useState, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoIosArrowDown, IoIosArrowRoundForward, IoMdTime, IoIosArrowBack, IoMdDownload } from "react-icons/io";
import { MdAddToPhotos, MdDeleteSweep, MdOutlineAttachMoney, MdVerifiedUser, MdLogin, MdDateRange, MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaClipboardList, FaPlay } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import License from "./License";

const Certificate = ({ getFileRights, currentUser }) => {
  const [generateCertificated, setGenerateCertificated] = useState();
  const licenseCertificatedRef = useRef(null);

  const handleGeneratePdf = async () => {
    const inputData = licenseCertificatedRef.current;
    try {
      const canvas = await html2canvas(inputData);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: "a4",
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("License.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-page">
      <div className="container-fluid">
        <div className="row">
          {getFileRights?.length ? (
            <>
              <div ref={licenseCertificatedRef}>
                <License
                  currentUser={currentUser}
                  generateCertificated={generateCertificated}
                />
              </div>
              <button onClick={handleGeneratePdf} className="btn btn-outline-primary view-more mt-4 mb-4">
                Download Certificate
              </button>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="icon icon-grid i-grid">.</div>
        <div className="icon icon-grid i-grid">.</div>
      </div>
    </div>
  );
};

export default Certificate;
