import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CartReducer from "../Components/Cart/Cart.slice";
import ProductsReducer from "../Components/Products/Products.slice";
import FilterReducer from "../Components/Filter/Filter.splice"

const Root = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    filter: FilterReducer
})

export const myStore = configureStore({reducer:Root})