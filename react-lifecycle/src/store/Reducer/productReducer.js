import ActionType from "../actionTypes";

const INITIAL = {
    selectedProduct: [],
    productList: [],
    cart: []
}
const ProductReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case ActionType.STORE_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        case ActionType.STORE_ALL_PRODUCT:
            return {...state, productList: action.payload}
        default:
            return INITIAL;
    }
}
export default ProductReducer