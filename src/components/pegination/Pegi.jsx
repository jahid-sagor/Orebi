import React from 'react'
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import { FiRefreshCw } from "react-icons/fi"
import { Link } from 'react-router-dom';

const Pegi = ({ pegi, catFilter }) => {

  return (
    <>
      {catFilter.length > 0 ?

        catFilter.map((item, index) => (
          <div className='w-[48%] lg:w-[32%]' key={index}>
            <Link to={`/product/${item.id}`}>
              <div className="relative group ">
                <div className=" h-[150px] lg:h-[350px] overflow-hidden">
                  <img className='h-full w-full cursor-pointer brightness-100 group-hover:brightness-75   scale-100 
                    group-hover:scale-105 duration-1000'  src={item.thumbnail} alt="Arry" />
                </div>
                <div className='absolute cursor-pointer overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:bottom-[-5px] group-hover:opacity-100 duration-500 ease-in scale-100 
                    group-hover:scale-105 '>
                  <div className='flex justify-end items-center h-full'>
                    <ul className=' px-2 lg:px-6 text-right'>
                      <li className='flex justify-end items-center gap-2 font-dm font-normal text-[8px] lg:text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[8px] lg:text-[18px] text-[#262626] ' /></li>
                      <li className='flex justify-end items-center gap-2 font-dm font-normal text-[8px] lg:text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[8px] lg:text-[18px] text-[#262626] ' /></li>
                      <li className='flex justify-end items-center gap-2 font-dm font-normal text-[8px] lg:text-[16px] text-[#767676]'>Add to Cart <FaShoppingCart className='inline-block text-[8px] lg:text-[18px] text-[#262626]' /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex justify-between items-center mt-2 lg:mt-4 mb-2 lg:mb-0  ">
              <h2 className='font-dm font-bold text-[12px] lg:text-[20px] text-[#262626] lg:leading-6 leading-2'>{item.title}</h2>
              <h3 className='font-dm font-normal text-[10px] lg:text-[16px] text-[#767676] leading-0 lg:leading-8'>${item.price}</h3>
            </div>

          </div>
        ))

        :

        pegi.map((item, index) => (
          <div className='w-[48%] lg:w-[32%]' key={index}>
            <Link to={`/product/${item.id}`}>
              <div className="relative group ">
                <div className=" h-[150px] lg:h-[350px] overflow-hidden">
                  <img className='h-full w-full cursor-pointer brightness-100 group-hover:brightness-75   scale-100 
                    group-hover:scale-105 duration-1000'  src={item.thumbnail} alt="Arry" />
                </div>
                <div className='absolute cursor-pointer overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:bottom-[-5px] group-hover:opacity-100 duration-500 ease-in scale-100 
                    group-hover:scale-105 '>
                  <div className='flex justify-end items-center h-full'>
                    <ul className=' px-2 lg:px-6 text-right'>
                      <li className='flex justify-end items-center gap-2 font-dm font-normal text-[8px] lg:text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[8px] lg:text-[18px] text-[#262626] ' /></li>
                      <li className='flex justify-end items-center gap-2 font-dm font-normal text-[8px] lg:text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[8px] lg:text-[18px] text-[#262626] ' /></li>
                      <li className='flex justify-end items-center gap-2 font-dm font-normal text-[8px] lg:text-[16px] text-[#767676]'>Add to Cart <FaShoppingCart className='inline-block text-[8px] lg:text-[18px] text-[#262626]' /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex justify-between items-center mt-2 lg:mt-4 mb-2 lg:mb-0  ">
              <h2 className='font-dm font-bold text-[12px] lg:text-[20px] text-[#262626] lg:leading-6 leading-2'>{item.title}</h2>
              <h3 className='font-dm font-normal text-[10px] lg:text-[16px] text-[#767676] leading-0 lg:leading-8'>${item.price}</h3>
            </div>

          </div>
        ))

      }
    </>
  )
}

export default Pegi