import ActionType from "../actionTypes";

const INITIAL = {
    loading: true,
}

const LoaderReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case ActionType.LOADER:
            return {...state, loading: action.payload}
        default:
            return state;
    }
}
export default LoaderReducer


















