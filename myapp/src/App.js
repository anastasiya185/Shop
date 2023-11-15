
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import BasketList from './components/BasketList';
import basket from './components/basket.svg'
import house from './components/house.svg'


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [myProduct, setMyProduct] = useState([
    {name:"FullStack", price: "20000 NIS", compound: "NodeJS, MongoDB, React, JS"},
    {name:"Backend", price: "18000 NIS", compound: "JAVA"},
    {name:"Frontend", price: "16000 NIS", compound: "HTML, CSS, JS"},
    {name: "Java-Developer", price: "25000 NIS", compound: "JAVA, REST Controller, MongoDB, "},
    {name: "QA", price:"22000 NIS", compound: "DATA Base, SQL, writing test scripts"}
  ])

  const ProductsPerPage = 3;

  const totalPages = Math.ceil(myProduct.length / ProductsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const visibleProducts = myProduct.slice(
      (currentPage - 1) * ProductsPerPage,
      currentPage * ProductsPerPage
  );

  const [selectedProducts, setSelectedProducts] = useState([]);
  const addToBasket = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const [showBasket, setShowBasket] = useState(false)
  const [showProductList, setShowProductList] = useState(true)
  const showBasketProducts = () => {
    setShowBasket(true);
    setShowProductList(false);
  };

  const showProductListMenu = () => {
    setShowBasket(false);
    setShowProductList(true);
  };



  const deleteProduct = (i)=>{
    const newArr = selectedProducts.filter((_, index)=> index!==i)
    setSelectedProducts(newArr)
  }

  return (
      <div className="App">

        <div className="container_main">
          <div className='nav-main'>
            <button className="house-button" onClick={showProductListMenu}>
              <img src={house} className='house-logo' alt='house' />
            </button>
            <h1>SV-SHOP</h1>
            <button className="basket-button" onClick={showBasketProducts}>
              <img src={basket} className="basket-logo" alt="basket" />
            </button>
          </div>

          <div className="container">
            {showBasket ? (<BasketList
                  selectedProducts={selectedProducts}
                  deleteProduct={deleteProduct}
              />
          ) : (
              <ProductList
                  myProduct={visibleProducts}
                  addToBasket={addToBasket} />
          )}
            {totalPages > 1 && (
                <div className="pagination">
                  {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          className={currentPage === index + 1 ? 'active' : ''}
                      >
                        {index + 1}
                      </button>
                  ))}
                </div>
            )}
          </div>

        </div>
      </div>
  );
}

export default App;
