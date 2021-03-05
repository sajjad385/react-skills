import React, { useEffect, useState } from "react";
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
import "./App.css";
function App() {
  var product = "";
  const [singleProduct, setSingleProduct] = useState("");
  const [productList, setProducts] = useState([
    {
      name: "Product Name 1",
      description: "lorem      ipsum",
      price: "1100",
      category: "LifeStyle",
    },
    {
      name: "Product Name 2",
      description: "lorem  ipsum",
      price: "120",
      category: "Home and Decorator",
    },
    {
      name: "Product Name 3",
      description: "lorem lorem ipsum lorem ipsum ipsum",
      price: "100",
      category: "Electronics",
    },
  ]);

  const handleClick = (productIndex) => {
    if (productIndex !== "") {
      product = productList.find((element, index) => index === productIndex);
    }
    setSingleProduct(product);
  };

  return (
    <div>
      {singleProduct === "" ? (
        <div>
          <p>Welcome Home</p>
          <Product productList={productList} clickHandler={handleClick} />
        </div>
      ) : (
        <div>
          <p 
          style={{color: "green" }}
           onClick={()=>handleClick("")}>Back to Home</p>
          <ProductDetails product={singleProduct} />
        </div>
      )}
    </div>
  );
}

export default App;
