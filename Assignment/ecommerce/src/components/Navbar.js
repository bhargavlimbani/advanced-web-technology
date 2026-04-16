import React from "react";
import "./Navbar.css";

function Navbar({ setSearch, toggleCart }) {
  return (
    <div className="navbar">
      <h2>MyShop</h2>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={toggleCart}>Cart 🛒</button>
    </div>
  );
}

export default Navbar;