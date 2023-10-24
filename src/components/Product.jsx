import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Eye } from 'phosphor-react'
import {CartContext} from '../contexts/CartContext'

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  // console.log(product)
  // eslint-disable-next-line react/prop-types
  const { id, title, price, image, rating } = product
  return (
    <div> 
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative group transition overflow-hidden'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* {img} */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' alt="" />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 p-1 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-10 h-10 bg-red-500'>
              <Plus className='text-xl' />
            </div>
          </button>

          <Link
            to={`/products/${id}`}
            className='w-10 h-10 bg-white flex justify-center items-center text-black drop-shadow-xl'><Eye />
          </Link>
        </div>

      </div>
      <Link to={`/products/${id}`}>
      <div className='font-semibold font-sans text-gray-500 mb-1'>{title}</div>
      </Link>
      <div className='font-semibold'>${price}</div> 
    </div> 
  )
}

export default Product