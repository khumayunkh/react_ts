import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./producSlice/productSlice";


export const store = configureStore ({
    reducer :{
        products: productsSlice.reducer
    },
})