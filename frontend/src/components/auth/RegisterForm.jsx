import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({ name: form.name, email: form.email }); // mock register
    navigate('/dashboard');
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Register</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded-4 bg-white">
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Choose a password"
        />
        <Button type="submit" className="w-100">Create Account</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
