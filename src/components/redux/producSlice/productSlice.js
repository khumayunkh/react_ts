import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products : [],
    productsContainer :[],
    productsCategory: [],
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
        },
        filteredProducts : (state,action) => {
            state.products = state.productsContainer.filter(item => item.category.toLowerCase().includes(action.payload) 
                || item.title.toLowerCase().includes(action.payload) 
                || item.brand.toLowerCase().includes(action.payload)); 
        },
        filterCategory :(state, action) =>{
            state.products = state.productsCategory.filter(item =>item.category.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending,(state) =>{
            state.error = null
        })
        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.products = action.payload;
            state.productsContainer = action.payload
            state.productsCategory = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action) =>{})
    }
})




export const {setProducts,filteredProducts, 
    filterCategory} = productsSlice.actions
export default productsSlice