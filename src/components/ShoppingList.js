import React, { useState } from 'react';
import Item from './Item'; // Add this import

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div>
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;