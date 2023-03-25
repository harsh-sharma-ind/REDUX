import {ADD_TO_CART, REMOVE_FROM_CART} from './constant'

export const cartData = (data = [0], action) => {
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
            return 1+1;

        case REMOVE_FROM_CART:
            console.log("reducer called", action)
            return 1+1;
        default:
            return "no case matched"
    }
}