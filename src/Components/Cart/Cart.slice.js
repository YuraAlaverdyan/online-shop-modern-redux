import { createSlice } from "@reduxjs/toolkit"

const state = {
    items:[],
    subtotal: 0
}

const CartSlice = createSlice({
    name:"CartSlice",
    initialState:state,
    reducers:{
        addToCart: (state, action) => {
            if (state.items.some(elm => elm.id === action.payload.id)) {
                state.items.find(elm => elm.id === action.payload.id).quantity++
            } else {
                state.items.push({...action.payload, quantity:1})
            }
        },
        quantityUp: (state, action) => {
            state.items.find(elm => elm.id === action.payload).quantity++
        },
        quantityDown: (state, action) => {
            if(state.items.find(elm => elm.id === action.payload).quantity !== 1) {
                state.items.find(elm => elm.id === action.payload).quantity--
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(elm => +elm.id !== +action.payload)
        },
        clearCart: (state, action) => {
            state.items = []
        },
        calculateSubtotal: (state,action) => {
            state.subtotal = state.items.reduce((a,b) => a + (b.quantity * b.price),0)
        }

    }
})

export default CartSlice.reducer

export const {addToCart, quantityUp, quantityDown, deleteItem, clearCart, calculateSubtotal} = CartSlice.actions