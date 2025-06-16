import React, { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import DatePicker from '../ui/DatePicker';
import Button from '../ui/Button';
import FileUploader from './FileUploader';

const CapsuleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    unlockDate: '',
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (file) => {
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
      <h4 className="mb-3 text-primary">Create a Time Capsule</h4>
      <Input label="Title" name="title" value={formData.title} onChange={handleChange} />
      <TextArea label="Message" name="message" value={formData.message} onChange={handleChange} />
      <DatePicker label="Unlock Date" name="unlockDate" value={formData.unlockDate} onChange={handleChange} />
      <FileUploader onFileSelect={handleFile} />
      <Button type="submit" className="mt-3">Save Capsule</Button>
    </form>
  );
};

export default CapsuleForm;
