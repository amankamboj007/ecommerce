import { CART_ADD_ITEM } from "../constants/cartConstansts";


export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log(action.type)
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            console.log(item)
            // const existItem = state.cartItems.find(x => x.product === item[0].product)
            // console.log("exists ssssss", existItem)
            state.cartItems = [...item];
            console.log(state.cartItems)
            return state.cartItems
        // if (existItem) {
        //     return {
        //         ...state,
        //         cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        //     }
        // } else {
        //     console.log("REDUCERS SSSSS", [...state.cartItems, item])
        //     return { ...state, cartItems: [...state.cartItems, item] }
        // }
        default:
            return state
    }
}