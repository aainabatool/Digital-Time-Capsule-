import React from 'react';
import { format } from 'date-fns';

const TimelineView = ({ capsules }) => {
  if (!capsules.length) return <p className="text-muted">No capsules in timeline.</p>;

  return (
    <ul className="list-group list-group-flush">
      {capsules
        .sort((a, b) => new Date(a.unlockDate) - new Date(b.unlockDate))
        .map((cap) => (
          <li key={cap.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <span>{cap.title}</span>
              <span className="text-muted">{format(new Date(cap.unlockDate), 'PPP')}</span>
            </div>
            <small className="text-secondary">{cap.message.slice(0, 60)}...</small>
          </li>
        ))}
    </ul>
  );
};

export default TimelineView;
