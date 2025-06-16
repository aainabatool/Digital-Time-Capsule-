import React from 'react';
import useAuth from '../hooks/useAuth';
const Settings = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container py-5">
      <h2>Account Settings</h2>
      <p>Email: {user?.email}</p>
      <button onClick={logout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default Settings;
