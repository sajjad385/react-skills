import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../component/loader/loader";
import style  from  './style.css'

const ProductDetails = () => {
    const [loading, setLoading] = useState(true);
    const param = useParams();
    const [details, setDetails] = useState('');
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
            .then((response) => {
                setLoading(false);
                setDetails(response.data)
            }).catch((error) => {
            console.log(error)
        })
    }, []);
    return (
        <div className="container">
            <p>Product Details of<strong> {details.title}</strong></p>
            {loading === true ? (
                <Loader/>
            ) : (

                <div className="product-details">
                    <img src={details.image} alt="" width='100'/>
                    <p>Product Name: {details.category}</p>
                    <p>Product Description: {details.description}</p>
                    <p>Product Price: {details.price}</p>
                </div>
            )}
        </div>
    );
}
export default ProductDetails;