import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';

const Loginform = () => {
  return (
    <section className='pt-[50px] lg:pt-[110px] mx-2 lg-mx-0'>
      <Container>
        <div className=''>
            <h2 className='font-dm font-bold text-[30px] lg:text-[49px] text-[#262626] pb-[15px]'>Login</h2>
            <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#222]'><Link to="/">Home</Link> / login</span>
        </div>
        <div className='pt-[70px] lg:pt-[120px]'>
            <p className='lg:w-[40%] font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-6 lg:leading-8 pb-[30px] lg:pb-[62px]' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div> <hr />
        <div className='w-[80%] pt-[40px] lg:pt-[57px] pb-[50px] lg:pb-0'>
           <h2 className='font-dm font-bold text-[25px] lg:text-[39px] text-[#262626] pb-[42px]'>Returning Customer</h2>
            <form className=' lg:pb-[70px]' action="">
              <div className='flex justify-between flex-wrap '>
                 <div className='w-[100%] lg:w-[45%]  pb-[20px] lg:pb-0'>
                    <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]' htmlFor="">Email address</label> <br /> 
                    <input className=' py-2 px-2 font-dm font-normal text-[12px] lg:text-[14px] placeholder:text-[#767676] w-full outline-2 outline-cyan-200' type="email" placeholder='company@domain.com'/> <hr />
                 </div>
                 <div className='w-[100%] lg:w-[45%]  pb-[20px] lg:pb-0'>
                 <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]' htmlFor="">Password</label> <br /> 
                 <input className=' py-2 px-2 font-dm font-normal  text-[12px] lg:text-[14px] placeholder:text-[#767676] w-full outline-2 outline-cyan-200' type="password" placeholder='Enter Your Password'/> <hr />
                 </div>
              </div> 
              <div className='pt-[20px] lg:pt-[40px]'>
                 <Link className='py-2 px-14 font-dm font-bold text-[14px] text-[#262626] border-[#2B2B2B] border-2 rounded-md hover:bg-[#262626] hover:text-[#ffff] duration-300' href="#">Log in</Link>
              </div>
            </form>
        </div> <hr />
      </Container>
    </section>
  )
}

export default Loginform