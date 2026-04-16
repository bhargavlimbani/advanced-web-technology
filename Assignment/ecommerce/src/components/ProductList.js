import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ addToCart, search }) {
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;