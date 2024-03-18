import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../components/Container'


const Contactform = () => {
  return (
    <section className='py-[30px] lg:py-[110px] mx-2 lg:mx-0'>
        <Container>
            <h2 className='font-dm font-bold text-[30px] lg:text-[49px] text-[#262626]'>Contacts</h2>
            <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#767676]'><Link to="/">Home</Link> / Contact</span>
             <div className='py-[30px] lg:py-[80px]'>
                 <h2 className='font-dm font-bold text-[30px] lg:text-[49px] text-[#262626] pb-[20px] lg:pb-[42px]'>Fill up a Form</h2>
                 <form>
                   <div className='w-[90%] lg:w-[40%]'>
                   <label className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Name</label> <br />
                   <input className='w-full py-2 lg:py-4 px-4 font-dm font-normal text-[14px] text-[#767676] ring-1 lg:ring-2 ring-[#F0F0F0] outline-2 outline-cyan-200' type="text" placeholder='Your name here'/>
                   </div>
                   <div className='w-[90%] lg:w-[40%] pt-[23px]'>
                   <label className='font-dm font-bold text-[16px] text-[#262626] pb-[10px]' htmlFor="">Email</label><br />
                   <input className='w-full py-2 lg:py-4 px-4 font-dm font-normal text-[14px] text-[#767676] ring-1 lg:ring-2 ring-[#F0F0F0] outline-2 outline-cyan-200' type="email" placeholder='Your email here'/>
                   </div>
                   <div className='w-[90%] lg:w-[40%] pt-[23px]'>
                   <label className='font-dm font-bold text-[16px] text-[#262626] pb-[10px]' htmlFor="">Message</label><br />
                   <textarea className='w-full px-4 font-dm font-normal text-[14px] text-[#767676] ring-1 lg:ring-2 ring-[#F0F0F0] outline-2 outline-cyan-200' placeholder='Your message here' name="" id="" cols="81" rows="5"></textarea>
                   </div>
                   <div className='mt-[30px]' >
                    <Link className='py-2 px-16 font-dm font-bold rounded-md ring-2 ring-[#f0f0f0] bg-[#ffff] hover:bg-[black] text-[14px] text-[black] hover:text-[#ffff] duration-500' to=''>Post</Link>
                   </div>
                 </form>
             </div>
        </Container>
    </section>
  )
}

export default Contactform