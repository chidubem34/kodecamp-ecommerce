/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import kce from "../images/kce.png";
import { ShoppingBag } from 'phosphor-react'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header
      className={`${isActive ? 'bg-white py-4 shadow-xl' : 'py-4 bg-white'} fixed w-full z-10 transition-all flex justify-between shadow-md px-[35px] py-4 items-center`}
    >
      <Link to={'/kodecamp-ecommerce/'}>
        <span className='font-bold text-blue-500 text-xl'>Kodecamp <span className='text-green-500'>Ecommerce</span></span>
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
        <ShoppingBag className='text-2xl' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{cart.length}</div>
      </div>
    </header>
  )
}

export default Header