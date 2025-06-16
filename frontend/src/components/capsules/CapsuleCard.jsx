import React from 'react';
import CountdownTimer from './CountdownTimer';

const CapsuleCard = ({ capsule, onOpen }) => {
  const { title, unlockDate, message } = capsule;

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{message.slice(0, 100)}...</p>
        <CountdownTimer targetDate={unlockDate} />
        <button
          className="btn btn-outline-primary mt-auto"
          onClick={() => onOpen(capsule)}
          disabled={new Date(unlockDate) > new Date()}
        >
          Open Capsule
        </button>
      </div>
    </div>
  );
};

export default CapsuleCard;
