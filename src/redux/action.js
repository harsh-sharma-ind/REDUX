import {ADD_TO_CART, REMOVE_FROM_CART} from './constant'
export const addToCart = (data) => {
    console.log("action called", data)
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}