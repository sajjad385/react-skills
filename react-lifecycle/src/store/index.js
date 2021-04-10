import {createStore, combineReducers,compose,applyMiddleware} from "redux";
import CartReducer from "./Reducer/cartReducer";
import ProductReducer from "./Reducer/productReducer";
import thunk from 'redux-thunk';
import LoaderReducer from "./Reducer/loaderReducer";
const mainReducer = combineReducers({
    cartStore: CartReducer,
    productStore: ProductReducer,
    loaderStore: LoaderReducer
})

const composeEnhancers  =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));


export default store;