import React from 'react';
import CapsuleForm from '../components/capsules/CapsuleForm';
import { useNavigate } from 'react-router-dom';
import useCapsules from '../hooks/useCapsules';

const CreateCapsule = () => {
  const { addCapsule } = useCapsules();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    addCapsule(formData); // you might want to handle ID generation, etc.
    navigate('/dashboard');
  };

  return (
    <div className="container py-5">
      <CapsuleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateCapsule;
