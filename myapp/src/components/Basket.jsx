import React from 'react';

export default function Basket({ name, price, deleteProduct, index }) {
  return (
    <div className="basket">
      <div>
        <h3>{name}</h3>
        <p>{price.toLocaleString()} NIS</p>
      </div>

      <button
        className="button-delete"
        onClick={() => deleteProduct(index)}
      >
        ×
      </button>
    </div>
  );
}