import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items : [],
    },
    reducers: {
        addItem : (state, action) => {
        // we are mutating a state over here, we are modiifying the state over here
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem , removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;