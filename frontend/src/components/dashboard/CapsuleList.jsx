import React from 'react';
import CapsuleCard from '../capsules/CapsuleCard';

const CapsuleList = ({ capsules, onOpen }) => {
  if (!capsules || capsules.length === 0) {
    return <p className="text-muted">No capsules found.</p>;
  }

  return (
    <div className="row g-3">
      {capsules.map((capsule, index) => {
        // Use capsule.id if available; fallback to a unique string
        const key = capsule.id || `${capsule.title}-${capsule.unlockDate}-${index}`;
        return (
          <div className="col-md-6 col-lg-4" key={key}>
            <CapsuleCard capsule={capsule} onOpen={onOpen} />
          </div>
        );
      })}
    </div>
  );
};

export default CapsuleList;
