import React, {useEffect, useState} from "react";
import "./style.css";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const Product = () => {
    const history = useHistory();
    const [products, setProduct] = useState({});
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products")
            .then((response) => {
                setProduct({data: response.data});
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);
    // const handleDelete = (id) => {
    //     axios.delete(`http://127.0.0.1:8000/api/product/delete/${id}`).then((res) => {
    //     })
    // }
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.data !== undefined &&
                products.data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title
                        }</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={`edit/${item.product_id}`}>Edit</Link>
                            {/*<button onClick={(e) => handleDelete(item.product_id)}>Delete</button>*/}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default Product;
