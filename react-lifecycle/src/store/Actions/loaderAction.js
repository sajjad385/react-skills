import ActionType from "../actionTypes";

export const setLoader =(data)=>{
    return {
        type: ActionType.LOADER,
        payload : data
    }
}

