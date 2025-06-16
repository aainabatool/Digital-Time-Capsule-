import React from 'react';
import FilePreview from './FilePreview';
import Button from '../ui/Button';
import { format } from 'date-fns';

const CapsuleViewer = ({ capsule, onClose, onShare }) => {
  if (!capsule) return null;

  const { title, message, unlockDate, file } = capsule;

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-primary">{title}</h3>
          <button className="btn btn-outline-secondary btn-sm" onClick={onClose}>Close</button>
        </div>

        <p className="text-muted">
          <strong>Unlock Date:</strong> {format(new Date(unlockDate), 'PPP')}
        </p>

        <p className="lead">{message}</p>

        {file && (
          <div className="my-3">
            <FilePreview file={file} />
          </div>
        )}

        {onShare && (
          <Button className="mt-3" onClick={() => onShare(capsule)}>
            Share Capsule
          </Button>
        )}
      </div>
    </div>
  );
};

export default CapsuleViewer;
