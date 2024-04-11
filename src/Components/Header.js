import React from 'react'
import logo from '../Assets/logo.png';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';
import userContext from '../Utils/userContext';
import {useSelector} from 'react-redux'

const Header = () => {

  const [isLogged, setIsLogged] = useState(false);
  const isOnline = useOnline(true);
  const {username}  = useContext(userContext);

  const cartList = useSelector((state)=>state.cart.items);
  console.log(cartList)
  
  //if(!isOnline) return <h1>🔴User offline . Try to connect with internet</h1>
  return (
    <div className='flex justify-between bg-pink-50 align-middle'>
        <div className="logo">
            <a href=""><img className="h-16  ml-10"src={logo} alt="AppLogo" /></a>
        </div>
        <div>
          <ul className='flex my-5'>
              <li>{isOnline?'status:Online✅':'Offline🔴'}</li>
              <li className='px-4'><Link to="/">Home</Link></li>
              <li className='px-4'><Link to="/about">About</Link></li>
              <li className='px-4 font-bold'><Link to="/cart">Cart-({cartList.length} items)</Link></li>
              <li className='px-4'><Link to="/support">Support</Link></li>
              <li className='px-4'><Link to="/instamart">Instamart</Link></li>
              <li className='px-4 font-bold'>{username}</li>

          </ul>
        </div>
       <div className='my-5 mr-10'>
       <button className="bg-red-500 text-white px-1 rounded-lg" onClick={()=>setIsLogged(!isLogged)}>{isLogged?'logout':'login'}</button>
       </div>   
    </div>
  )
}

export default Header;