import React, { useEffect, useState } from "react";

const Product = ({ productList, clickHandler }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {loading === true ? (
        <div>
          <img
            src={
              "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
            }
            alt={""}
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
      ) : (
        productList.map((product, index) => (
          
          <div className="product-list" key={index}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => clickHandler(index)}>Show Details</button>
          </div>
        ))
      )}
    </div>
  );
};
export default Product;
