import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import OAuthButtons from '../components/auth/OAuthButtons';

const Login = () => (
  <div className="d-flex justify-content-center align-items-center flex-column">
    <LoginForm />
    <OAuthButtons />
  </div>
);

export default Login;
