import React from "react";
import Navbar from "./Navbar";

const FilteredItemsPage = ({ filteredItems }) => {
  return (
    <div>
        <Navbar/>
      <h1>Filtered Items</h1>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredItemsPage;
