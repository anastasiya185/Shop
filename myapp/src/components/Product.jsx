import React, { useState } from 'react'

export default function Product(props) {
    const [openCompound, setOpenCompound] = useState(false)
    const toggleOpen = () => {
        setOpenCompound(!openCompound)
    }

    const addToBasket = () => {
        props.addToBasket({ name: props.name, price: props.price });
    };


    return (
        <div className='product'>
            <h3>{props.name}</h3>
            <p>Price:{props.price}</p>
            <button className='openButton' onClick={toggleOpen}>for information</button>
            <button className='plusButton' onClick={addToBasket}>+</button>
            {openCompound && <div>{props.compound}</div>}

        </div>
    )
}