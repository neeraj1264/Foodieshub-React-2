import React from "react";
import "./AddToHome.css";

const AddToHomeModal = ({ installPrompt, onInstallClick, onCloseClick }) => {
  return (
    installPrompt && (
      <div className="install-popup-overlay">
        <div className="install-popup">
          <div className="installApp">
          <img src="img/logo1.png" alt="logo"  className="install-img"/>
            <p style={{ color: "white" }}> Install App in your device</p>
            <p style={{ margin: "0 1rem", color: "white" }}>|</p>
            <span onClick={onInstallClick} className="install">
              Install
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default AddToHomeModal;
