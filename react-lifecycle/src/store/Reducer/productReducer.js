import ActionType from "../actionTypes";

const INITIAL = {
    selectedProduct: [],
    productList: [],
}
const ProductReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case ActionType.STORE_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        case ActionType.STORE_ALL_PRODUCT:
            return {...state, productList: action.payload}
        default:
            return state;
    }
}
export default ProductReducer