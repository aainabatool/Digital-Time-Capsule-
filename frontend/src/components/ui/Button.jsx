import React from 'react';

const Button = ({ type = "button", className = "", children, ...props }) => {
  return (
    <button
      type={type}
      className={`btn btn-primary rounded-pill px-4 py-2 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;