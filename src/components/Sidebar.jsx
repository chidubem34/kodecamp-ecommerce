/* eslint-disable no-unused-vars */
import { ArrowRight } from 'phosphor-react';
import React, { useContext } from 'react';
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Trash } from 'phosphor-react';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 min-h-[100vh] overflow-auto shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-3`}>

      <div className='flex items-center justify-between py-4 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <ArrowRight />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[440px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>

      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl' onClick={clearCart}>
            <Trash />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
