import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import foodSlice from "./foodSlice";

const appStore = configureStore({
    reducer : {
        cart: cartReducer,
        food: foodSlice,
    }
})

export default appStore;