import React from 'react';
import "../styles/Filter.css";

function Filter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter">
      <label>Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter