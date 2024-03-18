import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";


const Error = () => {
  return (
         <section className='py-[20px] lg:py-[50px] mx-2 lg:mx-0'>
      <Container>
       <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#767676]'><Link to='/'>Home</Link> / Error </span>
        <div className='w-[100%] lg:w-[50%]'>
          <h2 className='font-dm font-bold text-[150px] lg:text-[200px] line-height:[203px] text-[#262626]'>404</h2>
          <p className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[36px] text-[#767676] w-[90%]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
          <div className='w-[100%] py-4 lg:py-12 relative'>
            <input type="text" className='w-[90%] lg:w-[82%] ring-2 ring-[#F0F0F0] outline-gray-500  outline-offset-6 py-2 lg:py-4 text-[14px] lg:text-[16px] font-dm font-medium pl-2 lg:pl-4'  placeholder='Type to search'/>
            <span className='absolute top-[28px] lg:top-[68px] right-[40px] lg:right-[150px]'><IoIosSearch className='text-[18px] lg:text-[20px] text-[gray]'/> </span>
          </div>
           <div className='w-[40Z%] lg:w-[22%] pt-4 lg:pt-0'>
             <Link className='py-2 lg:py-3 px-6 lg:px-8 font-dm font-bold rounded-md ring-2 ring-[#f0f0f0] bg-[#ffff] hover:bg-[black] text-[12px] lg:text-[14px] text-[black] hover:text-[#ffff] duration-500'  to="/">Back to Home</Link>
           </div>
        </div>
      </Container>
    </section>
  )
}

export default Error