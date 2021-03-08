import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = ({ productList }) => {
  const param = useParams();
  const details = productList[param.id];

  return (
    <div>
      <p>Product Name: {details.name}</p>
      <p>Product Description: {details.description}</p>
      <p>Product Category: {details.category}</p>
      <p>Product Price: {details.price}</p>
    </div>
  );
};
export default ProductDetails;
