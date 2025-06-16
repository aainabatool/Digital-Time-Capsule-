import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container text-center py-5">
    <h1 className="mb-4">Welcome to Digital Time Capsule</h1>
    <p className="mb-4">Preserve your thoughts, memories and secrets for the future.</p>
    <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
  </div>
);

export default Home;
