import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar setSearch={setSearch} toggleCart={() => setShowCart(!showCart)} />
        


      {showCart ? (
        <Cart cart={cart} />
      ) : (
        <ProductList addToCart={addToCart} search={search} />
      )}
    </div>
  );
}

export default App;