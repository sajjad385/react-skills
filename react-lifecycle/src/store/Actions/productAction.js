import ActionType from "../actionTypes";
import axios from "axios";
import {setLoader} from "./loaderAction";

export const storeAllProduct =()=>async(dispatch,getStore)=>{
    dispatch(setLoader(true))
    const allProducts = await  axios.get("https://fakestoreapi.com/products");
    dispatch(storeProducts(allProducts.data))
    dispatch(setLoader(false))
}

export const storeProducts =(data)=>{
    return {
        type: ActionType.STORE_ALL_PRODUCT,
        payload : data
    }
}

export const storeSelectedProduct =(data)=>{
    return {
        type: 'STORE_SELECTED_PRODUCT',
        payload : data
    }
}

