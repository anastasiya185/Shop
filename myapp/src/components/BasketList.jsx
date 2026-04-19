import React from 'react';
import Basket from './Basket';

export default function BasketList({ selectedProducts, deleteProduct, goToProducts }) {
  const totalPrice = selectedProducts.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return (
    <div className="cartWrapper">
      <div className="cartHeader">
        <div>
          <p className="smallLabel">Shopping Cart</p>
          <h2>Your selected courses</h2>
        </div>

        <button className="secondaryButton" onClick={goToProducts}>
          Back to Shop
        </button>
      </div>

      {selectedProducts.length === 0 ? (
        <div className="emptyCart">
          <h3>Your cart is empty</h3>
          <p>Add a course to see it here.</p>
          <button className="primaryButton" onClick={goToProducts}>
            Browse Courses
          </button>
        </div>
      ) : (
        <>
          <div className="basketList">
            {selectedProducts.map((product, index) => (
              <Basket
                key={`${product.id}-${index}`}
                name={product.name}
                price={product.price}
                index={index}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>

          <div className="cartSummary">
            <div>
              <span>Total</span>
              <strong>{totalPrice.toLocaleString()} NIS</strong>
            </div>

            <button className="buyButton">
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}