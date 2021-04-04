import {createStore, combineReducers,compose} from "redux";
import CartReducer from "./Reducer/cartReducer";
import ProductReducer from "./Reducer/productReducer";

const mainReducer = combineReducers({
    cartStore: CartReducer,
    productStore: ProductReducer
})

const composeEnhancers  =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(mainReducer,composeEnhancers());


export default store;