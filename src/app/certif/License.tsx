import React from "react";

const License = ({ currentUser, generateCertificated }) => {
  return (
    <div className="certificate-container">
      <div className="certificate">
        <div className="water-mark-overlay"></div>
        <div className="certificate-header">
          <img
            src="/images/logo/aya.png"
            className="logo"
            alt=""
          />
        </div>
        <div className="certificate-body" style={{ marginTop: "-150px" }}>
          <p className="certificate-title" style={{ textAlign: "center" }}>
            <strong>Certification de donation</strong>
          </p>
          <h1 style={{ textAlign: "center" }}>Copyright Certificate</h1>
          <p className="student-name">{currentUser?.name}</p>
          <div className="certificate-content">
            <p className="topic-title">{generateCertificated?.fileName}</p>
            <div className="text-center">
              <p className="topic-description text-muted">
                {generateCertificated?.description}
              </p>
              <p>FILE HASH: {generateCertificated?.fileHash}</p>
            </div>
          </div>
          <div className="certificate-footer text-muted">
            <div className="row">
              <div className="col-md-6">
                <p>CopyRight Owner: {currentUser?.address}</p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <p>ID: {generateCertificated?.ID}</p>
                  </div>
                  <div className="col-md-6">
                    <p>Category: {generateCertificated?.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="signature">
            <img src="/images/logo/sig.png" alt="Signature" style={{ width: "150px", height: "auto",marginLeft:"350px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
