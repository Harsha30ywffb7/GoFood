import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Utils/cartSlice'

import cartSlice from './cartSlice';
const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore;