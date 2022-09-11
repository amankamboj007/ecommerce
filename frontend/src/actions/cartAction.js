import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstansts";

export const addToCart = (id, qty) => async (dispatch) => {
    const { data } = await axios.get(`http://localhost:5001/api/product/${id}`)
    console.log(data)
    let obj = {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }
    let tempCartItem = [];
    tempCartItem.push(obj)
    dispatch({
        type: CART_ADD_ITEM,
        payload: tempCartItem
    })


    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}