import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from '../assets/footlogo.png'
import { FaFacebookF,FaInstagram  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <footer className='bg-[#F5F5F3]'>
      <Container>
        <div className='lg:flex justify-between flex-wrap  lg:py-[100px] py-[40px]'>
             <div className='lg:w-[50%] w-[100%] lg:p-0 p-2'>
               <div className='flex justify-between'>
            <div className='lg:w-[15%] w-[30%]'>
                <h2 className='font-dm font-bold text-[#262626] lg:text-[18px] text-[16px] line-height:"23px" pb-4 '>MENU</h2>
                <ul>
                    <li className='py-1'><Link to='/' className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"'>Home</Link></li>
                    <li className='py-1'><Link to='/product' className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"'>Shop</Link></li>
                    <li className='py-1'><Link to='/about' className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"'>About</Link></li>
                    <li className='py-1'><Link to='/contact' className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"'>Contact</Link></li>
                    <li className='py-1'><Link to='/' className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' >Journal</Link></li>
                </ul>
            </div>
            <div className='lg:w-[15%] w-[30%]'>
            <h2 className='font-dm font-bold text-[#262626] lg:text-[18px] text-[16px] line-height:"23px" pb-4 '>SHOP</h2>
                <ul>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px]lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Category 1</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px]lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Category 2</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px]lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Category 3</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px]lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Category 4</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px]lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Category 5</a></li>
                </ul>
            </div>
            <div className='lg:w-[20%] w-[40%]'>
            <h2 className='font-dm font-bold text-[#262626] lg:text-[18px] text-[16px] line-height:"23px" pb-4 '>HELP</h2>
                <ul>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Privacy Policy</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Terms & Conditions</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Special E-shop</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Shipping</a></li>
                    <li className='py-1'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[#6D6D6D] hover:text-[#262626] line-height:"23px"' href="#">Secure Payments</a></li>
                </ul>
            </div>
               </div>
             </div>
              <div className='lg:w-[50%] w-[100%] lg:mt-0 mt-8 lg:p-0 p-2'>
               <div className='flex justify-between'>
            <div className='lg:w-[25%] w-[50%] mx-auto'>
                <h2 className='font-dm font-bold text-[16px] text-[#262626] line-height:"27px" pb-2'>(052) 611-5711</h2>
                <a className='font-dm font-bold text-[16px] text-[#262626] line-height:"27px"' href="#">company@domain.com</a>
                <p className='font-dm font-normal text-[14px] text-[#6D6D6D] line-height:"23px" pt-2'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className='lg:w-[8%] w-[50%] lg:mx-0 mx-[25px]'>
                <a href="#"> <img src={Logo} alt="" /></a>
            </div>

               </div>
              </div>
        </div>
           <div className='flex justify-between items-center pb-14'>
            <div className='w-[30%] flex gap-4 lg:p-0 pl-2'>
              <FaFacebookF/>
              <FaLinkedinIn/>
              <FaInstagram />
           </div>
           <div className='w-[70%] lg:p-0 pr-2'>
              <h2 className='text-right font-dm font-normal text-[#6D6D6D] lg:text-[14px] text-[12px] line-height:"23px"  '>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
           </div>
           </div>
      </Container>
   </footer>
  )
}

export default Footer