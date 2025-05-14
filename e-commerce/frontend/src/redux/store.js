import { configureStore } from '@reduxjs/toolkit'
import cartItem from './cartItem'


export const store = configureStore({
    reducer: {
        cartItem: cartItem,
    },
})