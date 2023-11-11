import React from 'react'

export default function Basket(props) {
    return (
        <div className='basket'>
            <h3>{props.name}</h3>
            <p>Price:{props.price}</p>
            <button className='button-delete' onClick={()=>{props.deleteProduct(props.index)}}>x</button>
        </div>
    )
}