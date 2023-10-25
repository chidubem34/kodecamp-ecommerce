/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'phosphor-react';
import { Minus } from 'phosphor-react';
import { Plus } from 'phosphor-react';
import { CartContext } from '../contexts/CartContext'

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  const { id, title, image, price, amount } = item;
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/kodecamp-ecommerce/products/${id}`}>
          <img src={image} className='max-w-[80px]' alt="" />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link
              to={`/kodecamp-ecommerce/products/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)}>
              <X className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>

          <div className='flex items-center gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-black font-medium'>

              <div className='flex-1 flex justify-center items-center cursor-pointer h-full' onClick={() => decreaseAmount(id)}>
                <Minus />
              </div>

              <div className='h-full flex justify-center items-center px-2'>{amount}</div>

              <div
                className='flex-1 h-full flex justify-center items-center cursor-pointer'
                onClick={() => increaseAmount(id)}>
                <Plus />
              </div>
            </div>

            <div className='flex-1 flex items-center justify-around'> $ {price}</div>

            <div className='flex-1 flex justify-end items-center text-black font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem