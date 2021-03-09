import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const [products, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProduct({ data: response.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.data !== undefined &&
            products.data.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><Link to={`edit/${134}`}>Edit</Link></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Product;
