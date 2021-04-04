import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Loader from "../../component/loader/loader";
import axios from "axios";
import style from './style.css'
import {useDispatch, useSelector} from "react-redux";
import {storeAllProduct} from "../../store/Actions/productAction";
import ActionType from "../../store/actionTypes";


const Product = ({productList}) => {
    const dispatch = useDispatch();//store data in reduxStore
    const products = useSelector(state => state.productStore.productList);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setLoading(false);
                dispatch(storeAllProduct(response.data))
            })
            .catch((error) => {
                // console.log(error.response);
            });
    }, []);
    const history = useHistory();
    const handleChange = (id) => {
        history.push(`/product-details/${id}`);
    };

    const cartStore = useSelector(state => state)

    console.log(cartStore,"===cartStore")
    const addToCart =()=>{
        dispatch({
            type: 'ADD_TO_CART',
            payload: cartStore.cartStore.cart ?cartStore.cartStore.cart +1: 1
        })
        console.log(cartStore)
    }
    return (
        <div className="container">
            {loading === true ? (
                <Loader/>
            ) : (
                products !== undefined && products.map((product, index) => (
                    <div className="product-list" key={index}>
                        <img src={product.image} alt="" width='100'/>
                        <p onClick={() => handleChange(product.id)}
                           style={{cursor: 'pointer'}}>{product.title.slice(0, 20)}</p>
                        <p>{product.price}</p>
                        <button onClick={addToCart}>Add to Cart</button>
                        <button onClick={() => handleChange(product.id)}>Show Details</button>
                    </div>
                ))
            )}
        </div>
    );
};
export default Product;