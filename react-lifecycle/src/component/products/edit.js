import React, { useState } from "react";

const ProductCreate = () => {


const [inputData,setInputData]=useState({});

const handleSubmit = () => {};
  return (
    <div>
      <input name="title" value="" placeholder="Enter Product Title" />
      <input
        name="description"
        value=""
        placeholder="Enter Product Description"
      />
      <input name="price" value="" placeholder="Enter Product Price"/>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};
export default ProductCreate;
