import React from 'react';

const Toast = ({ message, type = "success" }) => (
  <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
    {message}
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  </div>
);

export default Toast;
