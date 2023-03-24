import React, { useState, useEffect } from 'react';
import { ProductItem } from "./Components";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=5`)
      .then(res => res.json())
      .then(json => setProductData(json));
  }, []);

  return (
    <div className="App">
      {productData.length > 0 ? productData.map((el, i) => <ProductItem props={el} key={`product-${i}`} />) : `No productData`}
    </div>
  );
}

export default App;
