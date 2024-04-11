import React from 'react'
import ItemsList from './ItemsList';
import {useSelector, useDispatch} from 'react-redux'
import { clearCart } from '../Utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store)=>store.cart.items)
  console.log({msg:"cart",items:cartItems})
  
  const dispatcher = useDispatch();

  const handleRemovecart =()=>{
    dispatcher(clearCart());
  }
  return (
    <div>
      <div className='text-xl font-bold text-center my-5'>Cart
      {cartItems.length >0 && <button onClick={handleRemovecart} className='ml-40 bg-orange-500 text-white text-sm rounded-lg px-1 py-1'>Clear Cart</button>}
      </div>
      <div className='w-6/12 m-auto'>
         <ItemsList Items={cartItems}/> 
         {cartItems.length ===0 && <p className='text-xl font-semibold mt-40 text-center text-orange-500'>🛒cart is empty please add items</p>}
      </div>
    </div>
  )
}

export default Cart;