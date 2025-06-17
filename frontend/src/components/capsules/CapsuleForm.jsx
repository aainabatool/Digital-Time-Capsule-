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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-4 shadow-sm border border-light-subtle"
    >
      <h4 className="mb-4 fw-bold text-dark text-center">Create Your Time Capsule</h4>

      <div className="mb-3">
        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <DatePicker
          label="Unlock Date"
          name="unlockDate"
          value={formData.unlockDate}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <FileUploader onFileSelect={handleFile} />
      </div>

      <div className="text-end">
        <Button type="submit" className="btn-capsule-open text-black">
          Save Capsule
        </Button>
      </div>
    </form>
  );
};

export default CapsuleForm;
