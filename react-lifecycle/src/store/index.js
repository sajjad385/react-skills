import {createStore} from "redux";

const INITIAL_STATE = {}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, cart : action.payload
            }
        default:
            return INITIAL_STATE;
    }
}
const store = createStore(CartReducer);
export  default store;