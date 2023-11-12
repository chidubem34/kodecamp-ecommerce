// import React from 'react'
import lady from '../assets/images/shop-cart.jpg'
import { Link } from 'react-router-dom'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Login = () => {
    return (
        <section>
            <div className="h-screen">
                <div className='flex'>
                    <div className="md:w-[40vw]">
                        <div
                            className='h-[100vh] bg-no-repeat hidden md:block bg-cover bg-center p-10'
                            style={{
                                backgroundImage: `linear-gradient(45deg, #00000069, #00000069), url(${lady})`,
                            }}
                        >
                            <Link to={'/kodecamp-ecommerce/'}>
                                <span className='font-bold text-blue-500 text-xl lg:text-2xl'>Kodecamp <span className='text-green-500'>Ecommerce</span></span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-3/5 w-full flex justify-center items-center min-h-screen">
                        <div className='md:w-2/3 w-11/12'>
                            <div className='py-6 w-14'>
                                <Link to={"/kodecamp-ecommerce/"}>
                                <BsFillArrowLeftCircleFill size={40}/>
                                </Link>
                            </div>
                            <div>
                                <p className='text-3xl mb-4 font-extrabold'>Login</p>
                            </div>
                            <div>
                                <form>
                                    <div className='mb-6'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Your email</label>
                                        <input type="text" placeholder='name@flowbite.com' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none' />
                                    </div>
                                    <div className='mb-6'>
                                        <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Your password</label>
                                        <input type="password" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none'/>
                                    </div>

                                    <div className='text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-20 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Login</div>

                                    <p className='mt-3 text-sm font-medium text-gray-900'>Dont have an account? <Link className='text-blue-500' to={"/kodecamp-ecommerce/SignUP"}>register</Link> instead </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login