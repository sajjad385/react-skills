export const storeAllProduct =(data)=>{
    return {
        type: 'STORE_ALL_PRODUCT',
        payload : data
    }
}

export const storeSelectedProduct =(data)=>{
    return {
        type: 'STORE_SELECTED_PRODUCT',
        payload : data
    }
}