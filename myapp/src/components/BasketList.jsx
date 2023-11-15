import React from 'react'
import Basket from './Basket'

export default function BasketList(props) {

    const totalPrice = props.selectedProducts.reduce(
        (accumulator, product) => accumulator + parseFloat(product.price),0);
    return (
        <div>
            <h1>Cart</h1>
            {props.selectedProducts.map((product, index) => {
                return <Basket key={index} name={product.name} price={product.price} deleteProduct={props.deleteProduct} index= {index}/>
            })}
            <p>Total: {totalPrice.toFixed(2)}</p>
            <button className='button-buy'>BUY</button>
        </div>
    )
}
