import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
    
}

export const cartItem = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartItem.actions

export default cartItem.reducer