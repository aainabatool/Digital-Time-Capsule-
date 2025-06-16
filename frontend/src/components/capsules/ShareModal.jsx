import React from 'react';

const ShareModal = ({ capsuleLink, onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(capsuleLink);
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: '#00000080' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title">Share Capsule</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input type="text" readOnly className="form-control" value={capsuleLink} />
            <button className="btn btn-primary mt-2 w-100" onClick={copyToClipboard}>Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
