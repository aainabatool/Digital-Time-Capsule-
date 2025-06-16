// For now, dummy capsule functions with localStorage fallback
export const getCapsules = () => {
  const data = localStorage.getItem('capsules');
  return data ? JSON.parse(data) : [];
};

export const saveCapsules = (capsules) => {
  localStorage.setItem('capsules', JSON.stringify(capsules));
};
