import ActionType from "../actionTypes";

const INITIAL = {
    cart: [],
    cartProduct:[]
}

const CartReducer = (state = INITIAL, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return {...state,
                cart: action.payload,
                cartProduct:action.payload.product}
        default:
            return state;
    }
}
export default CartReducer


















