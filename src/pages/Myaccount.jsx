import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Myaccount = () => {
  return (
    <section className='py-[30px] lg:py-[110px] px-2 lg:px-0'>
        <Container>
            <div className=''>
               <h2 className='font-dm font-bold text-[30px] lg:text-[49px] line-height:[63px] text-[#262626]'>My Account</h2>
               <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#767676]'><Link to='/'>Home</Link> /  My Account</span>
            </div>
            <div className='flex justify-between pt-[70px] lg:pt-[127px]'>
                <div className="w-[25%] lg:w-[15%]">
                    <ul>
                        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Dashboard</Link></li> <hr />
                        <li className='py-2 lg:py-4'> <Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] lg:hover:mx-2 hover:mx-1 duration-300'>Others</Link></li> <hr />
                        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Donwloads</Link></li> <hr />
                        <li className='py-2 lg:py-4'> <Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Addresses</Link></li> <hr />
                        <li className='py-2 lg:py-4'><Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Account details</Link></li> <hr />
                        <li className='py-2 lg:py-4'> <Link className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] hover:mx-2 duration-300'>Logout</Link></li> <hr />
                    </ul>
                </div>
                <div className="w-[55%] lg:w-[75%]">
                    <h2 className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] pt-4'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span>? <span className='text-[#262626]'>Log out</span> )</h2>
                    <p className='ont-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-5 lg:leading-8 pt-10 lg:pr-[280px]'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'>shipping and billing addresses</span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Myaccount