import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="d-flex gap-2 mb-3">
      <select className="form-select" value={filter.status} onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value }))}>
        <option value="all">All</option>
        <option value="locked">Locked</option>
        <option value="unlocked">Unlocked</option>
      </select>

      <input
        type="date"
        className="form-control"
        value={filter.startDate}
        onChange={(e) => setFilter(prev => ({ ...prev, startDate: e.target.value }))}
      />
      <input
        type="date"
        className="form-control"
        value={filter.endDate}
        onChange={(e) => setFilter(prev => ({ ...prev, endDate: e.target.value }))}
      />
    </div>
  );
};

export default FilterBar;
