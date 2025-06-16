import React from 'react';

const Input = ({ label, type = "text", name, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label fw-bold">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control rounded-3 border-primary"
      />
    </div>
  );
};

export default Input;
