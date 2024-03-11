import React from 'react';
import './AddToHome.css';

const AddToHomeModal = ({ installPrompt, onInstallClick, onCloseClick }) => {
  return (
    installPrompt && (
      <div className="install-popup-overlay">
        <div className="install-popup">
          <button className="close-button" onClick={onCloseClick}>
            <span aria-hidden="true">&times;</span>
          </button>
          <p>Install this app on your home screen for a better experience!</p>
                    <button onClick={onInstallClick}>  Add to home screen</button>
        </div>
      </div>
    )
  );
};

export default AddToHomeModal;
