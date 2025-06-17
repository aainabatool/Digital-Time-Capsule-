import React from 'react';
import CountdownTimer from './CountdownTimer';
import { FaLock } from 'react-icons/fa';

const CapsuleCard = ({ capsule, onOpen }) => {
  const { title, unlockDate, message } = capsule;
  const isLocked = new Date(unlockDate) > new Date();

  return (
    <div className="capsule-card card h-100 border border-0 rounded-4 bg-white shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold text-dark">{title}</h5>

        <p className="card-text text-muted mb-3">
          {message.slice(0, 100)}...
        </p>

        <div className="mb-3">
          <span className="badge countdown-badge">
            <CountdownTimer targetDate={unlockDate} />
          </span>
        </div>

        <button
          className={`btn mt-auto ${isLocked ? 'btn-capsule-locked' : 'btn-capsule-open'}`}
          onClick={() => onOpen(capsule)}
          disabled={isLocked}
        >
          {isLocked ? <>Locked <FaLock className="ms-1" /></> : 'Open Capsule'}
        </button>
      </div>
    </div>
  );
};

export default CapsuleCard;
