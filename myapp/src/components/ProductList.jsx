import React from 'react'
import Product from './Product'



export default function ProductList(props) {

    return (
        <div>
            {props.myProduct.map((val, index) => {
                return <Product key={index} index={index}
                                name={val.name} price={val.price} compound={val.compound} addToBasket={props.addToBasket} />
            })}
        </div>
    )
}