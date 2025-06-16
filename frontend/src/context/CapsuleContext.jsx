import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCapsules, saveCapsules } from '../lib/api';

export const CapsuleContext = createContext();

export const CapsuleProvider = ({ children }) => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    setCapsules(getCapsules());
  }, []);

  const addCapsule = (capsule) => {
    const updated = [...capsules, capsule];
    setCapsules(updated);
    saveCapsules(updated);
  };

  return (
    <CapsuleContext.Provider value={{ capsules, addCapsule }}>
      {children}
    </CapsuleContext.Provider>
  );
};

export const useCapsuleContext = () => useContext(CapsuleContext);
