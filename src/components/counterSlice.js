import { createSlice } from "@reduxjs/toolkit";


const initialSlice = {
    count : 10,
    name : []   
}

export const countSlice = createSlice({
    name: 'counter',
    initialState: initialSlice,
    reducers:{
        increment: (state) => {
            state.count += 1
        },
        decrement:(state) => {
            state.count -= 1
        }
    }
})

export const {increment, decrement} = countSlice.actions
export default countSlice.reducer
