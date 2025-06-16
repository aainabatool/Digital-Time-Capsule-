import React from 'react';

const DatePicker = ({ label, value, onChange, name }) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label fw-bold">{label}</label>}
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="form-control rounded-3 border-secondary"
      />
    </div>
  );
};

export default DatePicker;
