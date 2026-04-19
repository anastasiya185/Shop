import React from 'react';
import Product from './Product';

export default function ProductList({ products, addToBasket }) {
  return (
    <div className="productGrid">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToBasket={addToBasket}
        />
      ))}
    </div>
  );
}