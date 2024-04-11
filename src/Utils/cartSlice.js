import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: []
    },
    reducers :{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0; //[] empty cart of items  
        }
    }
})

// export actions and reducer. actions for distach reducer for app store to update cartslice.
export const {addItem, removeItem, clearCart} = cartSlice.actions; 

export default cartSlice.reducer;