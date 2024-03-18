import React from 'react'
import Flex from './Flex'
import Container from './Container'
import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import Special1 from '../assets/special1.png'
import Special2 from '../assets/special2.png'
import Special3 from '../assets/special3.png'
import Special4 from '../assets/special4.png'

const Homespecial = () => {
  return (
    <section>
        <Container>
            <h2 className='font-dm font-bold lg:text-[39px] text-[28px] text-[#262626] lg:leading-10 leading-6 lg:mb-12 mb-6'>Special Offers</h2>
            <div className='lg:flex justify-between flex-wrap '>
            <div className='lg:w-[24%] w-[100%] p-2'>
                       <div className="relative group overflow-hidden">
                           <img className='h-[350px] w-full brightness-100 group-hover:brightness-75  scale-100  group-hover:scale-105 duration-300'  src={Special1}  alt="Special1" />
                          <div className='absolute overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:opacity-100 duration-500 ease-in'>
                           <div className='flex justify-end items-center h-full'>
                           <ul className=' px-6 text-right'>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Cart <FaShoppingCart className='inline-block text-[#262626]'/></li>
                           </ul>
                           </div>
                          </div>
                          <div className='w-[20%] absolute top-4 left-4 z-50'>
                           <h2 className='font-dm font-bold text-[14px] lg:text-[16px]  text-[#ffff] py-[4px] px-5 bg-[#262626]'>New</h2>
                          </div>
                       </div>
                       <div className="flex justify-between mt-4">
                           <h2 className='font-dm font-bold text-[16px] lg:text-[20px] text-[#262626] leading-6'>Basic Crew Neck Tee</h2>
                           <h3 className='font-dm font-normal text-[14] lg:text-[16px] text-[#767676] leading-8'>$44.00</h3>
                       </div>
                       
               </div>
               <div className='lg:w-[24%] w-[100%]   p-2'>
                       <div className="relative group overflow-hidden">
                           <img className='h-[350px] w-full brightness-100 group-hover:brightness-75  scale-100  group-hover:scale-105 duration-300'  src={Special2}  alt="Special2" />
                          <div className='absolute overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:opacity-100 duration-500 ease-in'>
                           <div className='flex justify-end items-center h-full'>
                           <ul className=' px-6 text-right'>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Cart <FaShoppingCart className='inline-block text-[#262626]'/></li>
                           </ul>
                           </div>
                          </div>
                          <div className='w-[20%] absolute top-4 left-4 z-50'>
                           <h2 className='font-dm font-bold text-[14px] lg:text-[16px]  text-[#ffff] py-[4px] px-5 bg-[#262626]'>New</h2>
                          </div>
                       </div>
                       <div className="flex justify-between mt-4">
                           <h2 className='font-dm font-bold text-[16px] lg:text-[20px] text-[#262626] leading-6'>Basic Crew Neck Tee</h2>
                           <h3 className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-8'>$44.00</h3>
                       </div>
                       
               </div>
               <div className='lg:w-[24%] w-[100%]  p-2'>
                       <div className="relative group overflow-hidden">
                           <img className='h-[350px] w-full brightness-100 group-hover:brightness-75  scale-100  group-hover:scale-105 duration-300'  src={Special3}  alt="Special3" />
                          <div className='absolute overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:opacity-100 duration-500 ease-in'>
                           <div className='flex justify-end items-center h-full'>
                           <ul className=' px-6 text-right'>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Cart <FaShoppingCart className='inline-block text-[#262626]'/></li>
                           </ul>
                           </div>
                          </div>
                          <div className='w-[20%] absolute top-4 left-4 z-50'>
                           <h2 className='font-dm font-bold text-[14px] lg:text-[16px]  text-[#ffff] py-[4px] px-5 bg-[#262626]'>New</h2>
                          </div>
                       </div>
                       <div className="flex justify-between mt-4">
                           <h2 className='font-dm font-bold text-[16px] lg:text-[20px] text-[#262626] leading-6'>Basic Crew Neck Tee</h2>
                           <h3 className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-8'>$44.00</h3>
                       </div>
                       
               </div>
               <div className='lg:w-[24%] w-[100%]  p-2'>
                       <div className="relative group overflow-hidden">
                           <img className='h-[350px] w-full brightness-100 group-hover:brightness-75  scale-100  group-hover:scale-105 duration-300'  src={Special4}  alt="Special4" />
                          <div className='absolute overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:opacity-100 duration-500 ease-in'>
                           <div className='flex justify-end items-center h-full'>
                           <ul className=' px-6 text-right'>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[#262626]'/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Cart <FaShoppingCart className='inline-block text-[#262626]'/></li>
                           </ul>
                           </div>
                          </div>
                          <div className='w-[20%] absolute top-4 left-4 z-50'>
                           <h2 className='font-dm font-bold text-[14px] lg:text-[16px]  text-[#ffff] py-[4px] px-5 bg-[#262626]'>New</h2>
                          </div>
                       </div>
                       <div className="flex justify-between mt-4 lg:mb-14">
                           <h2 className='font-dm font-bold text-[20px] text-[#262626] leading-6'>Basic Crew Neck Tee</h2>
                           <h3 className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-8'>$44.00</h3>
                       </div>
                       
               </div>
            </div>
        </Container>
    </section>
  )
}

export default Homespecial