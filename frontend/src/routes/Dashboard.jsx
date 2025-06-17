import React, { useState } from 'react';
import SearchBar from '../components/dashboard/SearchBar';
import FilterBar from '../components/dashboard/FilterBar';
import CapsuleList from '../components/dashboard/CapsuleList';
import CapsuleViewer from '../components/capsules/CapsuleViewer';
import useCapsules from '../hooks/useCapsules'; // <-- ✅ use capsule context
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { capsules } = useCapsules(); // ✅ get capsules from context
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ status: 'all', startDate: '', endDate: '' });
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const navigate = useNavigate();

  if (!capsules) return <div className="container py-5">Loading capsules...</div>;

  const filteredCapsules = capsules.filter((cap) => {
    const unlockDate = new Date(cap.unlockDate);
    const now = new Date();

    const matchesStatus =
      filter.status === 'all' ||
      (filter.status === 'locked' && unlockDate > now) ||
      (filter.status === 'unlocked' && unlockDate <= now);

    const matchesDate =
      (!filter.startDate || new Date(filter.startDate) <= unlockDate) &&
      (!filter.endDate || new Date(filter.endDate) >= unlockDate);

    const matchesSearch =
      cap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cap.message.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesDate && matchesSearch;
  });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Your Time Capsules</h2>
        <Button onClick={() => navigate('/create')} className="mt-0">New Capsule</Button>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <CapsuleList capsules={filteredCapsules} onOpen={setSelectedCapsule} />
      {selectedCapsule && (
        <CapsuleViewer capsule={selectedCapsule} onClose={() => setSelectedCapsule(null)} />
      )}
    </div>
  );
};

export default Dashboard;
