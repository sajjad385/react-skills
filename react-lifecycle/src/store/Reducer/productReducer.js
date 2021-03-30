const INITIAL = {}

const ProductReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case 'PRODUCT_REDUCER':
            return {
                ...state, cart : action.payload
            }
        default:
            return INITIAL;
    }
}
export default ProductReducer