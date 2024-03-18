import React, { useState } from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
   let [show, setShow] = useState(false)

   let handleShow = () =>{
      setShow(!show)
   }
  return (
   <header>
      <Container>
         <div className='flex justify-between lg:py-8 py-4'>
            <div className='w-[10%]'>
            <div className='lg:ml-0 ml-2 sm:ml-2'>
            <a href="#"><img src={Logo} alt="Logo" /></a>
            </div>
            </div>
            <div className='w-[75%] z-50'>
             <ul className={`lg:flex lg:gap-14 lg:py-0 py-4 lg:pl-0 pl-2 absolute top-0 left-0 z-50 lg:static ${show == true ? 'bg-[#282828] top-[105px] left-[00px] w-[50%] h-[470px] lg:h-0 duration-700' : ' top-[105px] left-[-100px] w-[50%] h-[470px] lg:h-0 duration-1000'}`}>
                <li className='lg:py-0 py-2 underline-none hover:underline decoration-sky-500/30 font-dm  font-bold text-[16px] lg:text-[18px] md:text-[18px] text-[#767676]  hover:text-[#ffff]  lg:hover:text-[#262626] leading-4 hover:mx-2 lg:hover:mx-0 duration-500'><Link to="/">Home</Link></li>
                 <li className='lg:py-0 py-2 underline-none hover:underline decoration-sky-500/30 font-dm font-bold text-[16px] lg:text-[18px] text-[#767676]  hover:text-[#ffff] lg:hover:text-[#262626] leading-4 lg:mx-0 mx-0 hover:mx-2 lg:hover:mx-0 duration-500'><Link to="/product">Shop</Link></li>
                 <li className='lg:py-0 py-2 underline-none hover:underline decoration-sky-500/30 font-dm font-bold text-[16px] lg:text-[18px] text-[#767676] hover:text-[#ffff] lg:hover:text-[#262626] leading-4 lg:mx-0 mx-0 hover:mx-2 lg:hover:mx-0 duration-500'><Link to="/about">About</Link></li>
                 <li className='lg:py-0 py-2 underline-none hover:underline decoration-sky-500/30 font-dm font-bold text-[16px] lg:text-[18px] text-[#767676] hover:text-[#ffff] lg:hover:text-[#262626] leading-4 lg:mx-0 mx-0 hover:mx-2 lg:hover:mx-0 duration-500'><Link to="/contact">Contacts</Link></li>
                <li className='lg:py-0 py-2 underline-none hover:underline decoration-sky-500/30 font-dm font-bold text-[16px] lg:text-[18px] text-[#767676] hover:text-[#ffff] lg:hover:text-[#262626] leading-4 lg:mx-0 mx-0 hover:mx-2 lg:hover:mx-0 duration-500'><Link to="#">Journal</Link></li>
               </ul>
            </div>
            <div className='lg:hidden cursor-pointer mr-2' onClick={handleShow}> 
              {show == true ? <RxCross1 /> : <FaBars/>}
            </div>
         </div>
      </Container>
   </header>
  )
}

export default Header