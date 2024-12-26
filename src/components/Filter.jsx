import React from "react";
import "../App.css";

const Filter = ({ filter, setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    if (value >= 0 || value === "") {
      setFilter((prev) => ({ ...prev, rating: value }));
    }
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by title"
        value={filter.title}
        onChange={handleTitleChange}
        className="filter-input"
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={filter.rating}
        onChange={handleRatingChange}
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
