import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../component/loader/loader";
import style from './style.css'
import {useDispatch, useSelector} from "react-redux";
import {storeSelectedProduct} from "../../store/Actions/productAction";

const ProductDetails = () => {
    const dispatch = useDispatch();

    //selected or single product get
    const details = useSelector(state => state.productStore.selectedProduct)
    const [loading, setLoading] = useState(true);
    const param = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
            .then((response) => {
                setLoading(false);
                dispatch(storeSelectedProduct(response.data));
            }).catch((error) => {
            console.log(error)
        })
    }, []);
    return (
        <div className="container">

            {loading === true ? (
                <Loader/>
            ) : (
                <div className="product-details">
                    <p>Product Details of<strong> {details.title}</strong></p>
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