import React from 'react';

const FilePreview = ({ file }) => {
  if (!file) return null;

  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');
  const isAudio = file.type.startsWith('audio/');

  return (
    <div className="mt-3">
      {isImage && <img src={URL.createObjectURL(file)} alt="preview" className="img-fluid rounded" />}
      {isVideo && (
        <video controls className="w-100 rounded">
          <source src={URL.createObjectURL(file)} type={file.type} />
        </video>
      )}
      {isAudio && (
        <audio controls className="w-100">
          <source src={URL.createObjectURL(file)} type={file.type} />
        </audio>
      )}
    </div>
  );
};

export default FilePreview;
