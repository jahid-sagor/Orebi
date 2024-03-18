import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Loginnewcustomer = () => {
  return (
    <section className= 'lg:px-0 px-2 pt-[30px] lg:pt-[58px] pb-[60px] lg:pb-[140px]'>
      <Container>
        <div className=''>
            <h2 className='font-dm font-bold text-[25px] lg:text-[39px] text-[#262626] pb-[38px]'>New Customer</h2>
            <p className='lg:w-[40%] font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-6 lg:leading-8 pb-[30px] lg:pb-[62px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className=''>
               <Link className='py-2 px-14 font-dm font-bold text-[14px] text-[#262626] border-[#2B2B2B] border-2 rounded-md hover:bg-[#262626] hover:text-[#ffff] duration-300' to='/signup'>Continue</Link>
               {/* <Link className='py-2 px-14 font-dm font-bold text-[14px] text-[#262626] border-[#2B2B2B] border-2 rounded-md hover:bg-[#262626] hover:text-[#ffff] duration-300' href="#">Log in</Link> */}
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Loginnewcustomer