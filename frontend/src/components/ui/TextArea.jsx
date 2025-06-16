import React from 'react';

const TextArea = ({ label, name, value, onChange, rows = 4, placeholder }) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label fw-bold">{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="form-control rounded-3 border-primary"
      />
    </div>
  );
};

export default TextArea;
