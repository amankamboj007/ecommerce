import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducers, productDetailReducers } from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducer.js';
const reducer = combineReducers({
    productList: productReducers,
    productDetail: productDetailReducers,
    cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const intialState = {
    cart: { cartItems: cartItemsFromStorage }
};

const middleware = [thunk]

const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
