export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};

export const isUnlocked = (unlockDate) => {
  return new Date(unlockDate) <= new Date();
};
