import React from 'react';
import { useParams } from 'react-router-dom';
import useCapsules from '../hooks/useCapsules';
import CountdownTimer from '../components/capsules/CountdownTimer';

const CapsuleDetails = () => {
  const { id } = useParams();
  const { capsules } = useCapsules();

  const capsule = capsules.find((c) => c.id === id);

  if (!capsule) return <div className="container py-4">Capsule not found.</div>;

  const isUnlocked = new Date(capsule.unlockDate) <= new Date();

  return (
    <div className="container py-5">
      <h2>{capsule.title}</h2>
      <p><strong>Unlocks at:</strong> {new Date(capsule.unlockDate).toLocaleString()}</p>
      {isUnlocked ? (
        <>
          <p><strong>Message:</strong> {capsule.message}</p>
          {capsule.files?.length > 0 && (
            <div>
              <h5>Attachments:</h5>
              {capsule.files.map((file, idx) => (
                <p key={idx}><a href={file.url} download>{file.name}</a></p>
              ))}
            </div>
          )}
        </>
      ) : (
        <CountdownTimer unlockDate={capsule.unlockDate} />
      )}
    </div>
  );
};

export default CapsuleDetails;
