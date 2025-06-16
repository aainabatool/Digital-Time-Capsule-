import React from 'react';

const FileUploader = ({ onFileSelect }) => {
  const handleChange = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Attach File (Optional)</label>
      <input type="file" className="form-control" onChange={handleChange} />
    </div>
  );
};

export default FileUploader;
