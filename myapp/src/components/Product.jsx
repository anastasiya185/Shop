import React, { useState } from 'react';

export default function Product({ product, addToBasket }) {
  const [openCompound, setOpenCompound] = useState(false);

  const toggleOpen = () => {
    setOpenCompound((prev) => !prev);
  };

  return (
    <article className="product">
      <div className="productHeader">
        <span className="courseTag">{product.level}</span>
        <span className="courseDuration">{product.duration}</span>
      </div>

      <h3>{product.name}</h3>

      <p className="productPrice">
        {product.price.toLocaleString()} NIS
      </p>

      <button className="openButton" onClick={toggleOpen}>
        {openCompound ? 'Hide details' : 'Course details'}
      </button>

      {openCompound && (
        <div className="compoundBox">
          <p>{product.compound}</p>
        </div>
      )}

      <button className="plusButton" onClick={() => addToBasket(product)}>
        Add to Cart
      </button>
    </article>
  );
}