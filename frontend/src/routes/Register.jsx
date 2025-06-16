import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import OAuthButtons from '../components/auth/OAuthButtons';

const Register = () => {
  return (
    <div className="container py-5">
      <RegisterForm />
      <OAuthButtons />
    </div>
  );
};

export default Register;
