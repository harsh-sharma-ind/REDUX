import {ADD_TO_CART} from './constant'

export const cartData = (data = [], action) => {
    // if(action.type === ADD_TO_CART){
    //     console.log("reducer called", action)
    //     return action.data
    // } else {
    //     console.log("no action matched")
    //     return "abc"
    // }

    switch(action.type){
        case ADD_TO_CART:
            console.log("reducer called", action)
            return [action.data, ...data];

        
        default:
            return data;
    }
}