import { useState, useEffect } from 'react';

const useCountdown = (unlockDate) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(unlockDate) - now;

      if (distance <= 0) {
        setTimeLeft({});
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / 1000 / 60) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unlockDate]);

  return timeLeft;
};

export default useCountdown;
