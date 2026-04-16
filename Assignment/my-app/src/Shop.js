import React, { useState } from "react";

const products = [
  { id: 1, name: "Shirt", category: "Clothing" },
  { id: 2, name: "Laptop", category: "Electronics" },
  { id: 3, name: "Mobile", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Clothing" }
];

function Shop() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Clothing")}>Clothing</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>

      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;