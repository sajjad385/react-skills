import ActionType from "../actionTypes";

const INITIAL = {
    cart: []
}

const CartReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return {...state, cart: action.payload}
        default:
            return INITIAL;
    }
}
export default CartReducer


















