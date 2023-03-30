import { React, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Products from "./components/Products";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import "./App.css";
function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='toolbar'>
        <div className='filterBy'>
          {/* <FilterBy setFilterBy={FilterBy} /> */}
          <SortBy setSortBy={() => setProducts(products)} />
        </div>
        <Products products={products} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
