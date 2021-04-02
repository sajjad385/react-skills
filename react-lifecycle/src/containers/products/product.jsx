import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Loader from "../../component/loader/loader";
import axios from "axios";
import style  from  './style.css'

const Product = ({productList}) => {
    const [loading, setLoading] = useState(true);
    const [products, setProduct] = useState({});

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setLoading(false);
                setProduct({data: response.data});
            })
            .catch((error) => {
                // console.log(error.response);
            });
    }, []);
    const history = useHistory();
    const handleChange = (id) => {
        history.push(`/product-details/${id}`);
    };

    return (
        <div className="container">
            {loading === true ? (
                <Loader/>
            ) : (
                products.data !== undefined && products.data.map((product, index) => (
                    <div className="product-list" key={index}>
                        <img src={product.image} alt="" width='100'/>
                        <p>{product.title.slice(0,20)}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleChange(product.id)}>Show Details</button>
                    </div>
                ))
            )}
        </div>
    );
};
export default Product;