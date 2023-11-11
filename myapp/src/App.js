
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import BasketList from './components/BasketList';
import basket from './components/basket.svg'
import house from './components/house.svg'


function App() {
  const [myProduct, setMyProduct] = useState([
    {name:"FullStack", price: "20000 NIS", compound: "JS, NodeJS, Reakt"},
    {name:"Back-end", price: "18000 NIS", compound: "JAVA"},
    {name:"Front-end", price: "16000 NIS", compound: "JS"}
  ])

  const [selectedProducts, setSelectedProducts] = useState([]);
  const addToBasket = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const [showBasket, setShowBasket] = useState(false)
  const showBasketProducts =()=>{
    setShowBasket(!showBasket)}

  const deleteProduct = (i)=>{
    const newArr = selectedProducts.filter((_, index)=> index!==i)
    setSelectedProducts(newArr)
  }

  return (
      <div className="App">
        {showBasket ? (<BasketList
            selectedProducts={selectedProducts}
            deleteProduct={deleteProduct} />) : (<ProductList
            myProduct={myProduct}
            addToBasket={addToBasket} />)}
        <div className='nav-main'>
          <img src={house} className='house-logo' alt='house' />
          <h1>SV-SHOP</h1>
          <button className="basket-button" onClick={showBasketProducts}>
            <img src={basket} className="basket-logo" alt="basket" />
          </button>
        </div>

      </div>
  );
}

export default App;
