import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Simple mock login logic
    if (credentials.email === 'test@example.com' && credentials.password === '123456') {
      login({ name: 'Test User', email: credentials.email });
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Login to TimeCapsule</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded-4 bg-white">
        <Input
          label="Email"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <Button type="submit" className="w-100">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
