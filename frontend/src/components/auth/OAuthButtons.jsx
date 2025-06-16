import React from 'react';

const OAuthButtons = () => {
  const handleGoogleLogin = () => {
    // Placeholder for real OAuth
    alert('Google login not implemented yet!');
  };

  return (
    <div className="d-flex flex-column gap-2 my-3">
      <button onClick={handleGoogleLogin} className="btn btn-outline-dark">
        <i className="bi bi-google me-2"></i> Continue with Google
      </button>
    </div>
  );
};

export default OAuthButtons;
