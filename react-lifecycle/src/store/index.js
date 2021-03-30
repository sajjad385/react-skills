import {createStore, combineReducers} from "redux";
import CartReducer from "./Reducer/cartReducer";
import ProductReducer from "./Reducer/productReducer";

const mainReducer = combineReducers({
    cartStore: CartReducer,
    productStore: ProductReducer
})
const store = createStore(mainReducer);
export default store;