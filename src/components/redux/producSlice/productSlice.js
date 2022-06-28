import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products : [],
    error: null
}

export const fetchProducts = createAsyncThunk(
    'product/fetch',
    async function(){
        const response = await axios.get('http://localhost:3002/api/product')
        const data = response.data.products
        return data
    }
)

export const  productsSlice = createSlice({
    name : 'category',
    initialState : initialState,
    reducers: {
        setProducts:(state, action) => {
            state.products = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending,(state) =>{
            state.error = null
        })
        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.products = action.payload;
            console.log(state.products)
        })
        builder.addCase(fetchProducts.rejected,(state,action) =>{})
    }
})




export const {setProducts} = productsSlice.actions
export default productsSlice