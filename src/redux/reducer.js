import {ADD_TO_CART, REMOVE_FROM_CART} from './constant'

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

        case REMOVE_FROM_CART:
            console.log("reducer called", action)
            //data.length= data.length? data.length-1:[]
            const remainingItem = data.filter((item) => item.id !== action.data)
            return [...remainingItem];
        default:
            return data;
    }
}