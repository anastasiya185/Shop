import { useState } from 'react';
import './App.css';

import ProductList from './components/ProductList';
import BasketList from './components/BasketList';
import basket from './components/basket.svg';
import house from './components/house.svg';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Full Stack Development',
      price: 20000,
      compound: 'Node.js, MongoDB, React, JavaScript',
      level: 'Advanced',
      duration: '8 months',
    },
    {
      id: 2,
      name: 'Backend Development',
      price: 18000,
      compound: 'Java, REST API, Spring Basics',
      level: 'Intermediate',
      duration: '6 months',
    },
    {
      id: 3,
      name: 'Frontend Development',
      price: 16000,
      compound: 'HTML, CSS, JavaScript, React',
      level: 'Beginner friendly',
      duration: '5 months',
    },
    {
      id: 4,
      name: 'Java Developer',
      price: 25000,
      compound: 'Java, REST Controllers, MongoDB',
      level: 'Advanced',
      duration: '9 months',
    },
    {
      id: 5,
      name: 'QA Automation',
      price: 22000,
      compound: 'Databases, SQL, test scripts, automation basics',
      level: 'Intermediate',
      duration: '6 months',
    },
  ];

  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const visibleProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const addToBasket = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (indexToDelete) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== indexToDelete)
    );
  };

  const showBasketProducts = () => {
    setShowBasket(true);
  };

  const showProductListMenu = () => {
    setShowBasket(false);
  };

  return (
    <div className="App">
      <div className="shopPage">
        <nav className="nav-main">
          <button className="iconButton" onClick={showProductListMenu}>
            <img src={house} className="navIcon" alt="home" />
          </button>

          <div className="brandBox">
            <span className="brandBadge">SV</span>
            <div>
              <h1>SV-SHOP</h1>
              <p>Online tech courses</p>
            </div>
          </div>

          <button className="iconButton basketIconButton" onClick={showBasketProducts}>
            <img src={basket} className="navIcon" alt="basket" />
            {selectedProducts.length > 0 && (
              <span className="basketBadge">{selectedProducts.length}</span>
            )}
          </button>
        </nav>

        <main className="shopLayout">
          <section className="heroSection">
            <p className="smallLabel">Career Courses</p>
            <h2>Choose your next tech path</h2>
            <p>
              Browse development and QA courses, explore course details, and add your favorite programs to the cart.
            </p>
          </section>

          <section className="contentCard">
            {showBasket ? (
              <BasketList
                selectedProducts={selectedProducts}
                deleteProduct={deleteProduct}
                goToProducts={showProductListMenu}
              />
            ) : (
              <>
                <ProductList
                  products={visibleProducts}
                  addToBasket={addToBasket}
                />

                {totalPages > 1 && (
                  <div className="pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;