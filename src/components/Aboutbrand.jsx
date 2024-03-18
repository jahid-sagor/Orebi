import React from 'react'
import Container from './Container'
import Flex from './Flex'
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"
import { Link } from 'react-router-dom'

const Aboutbrand = () => {
  return (
    <section className='py-[40px] lg:py-[80px]'>
        <Container>
         <div className='pb-[30px]'>
         <span className='font-dm font-bold text-[14px] lg:text-[16px] mx-2 lg:mx-0 line-height:[36px] text-[#222]'><Link to='/'>Home</Link> / About </span>
         </div>
            <h2 className='font-dm font-bold text-[30px] lg:text-[39px] text-[#262626] leading-10 mb-4 lg:mb-12 mx-2 lg:mx-0'>About</h2>
            <Flex className='justify-between'>
                <div className='w-[46%] lg:mx-0 mx-2'>
                    <div className='relative'>
                        <img src={About1} className='w-[100%]' alt="About1" />
                        <div className='absolute left-8 lg:left-[270px] bottom-2 lg:bottom-14'>
                            <a className='font-dm font-bold text-[12px] lg:text-[16px] text-[#ffff] py-1 lg:py-4 px-[10px] lg:px-[50px] bg-[#262626] border-2 border-[#262626]' href="#">Our Brands</a>
                        </div>
                    </div>
                </div>
                <div className='w-[46%]'>
                    <div className='relative'>
                        <img src={About2} className='w-[100%]' alt="About2" />
                        <div className='absolute left-8 lg:left-[270px] bottom-2 lg:bottom-14'>
                            <a className='font-dm font-bold text-[12px] lg:text-[16px] text-[#ffff] py-1 lg:py-4 px-[10px] lg:px-[50px] bg-[#262626] border-2 border-[#262626]' href="#">Our Brands</a>
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Aboutbrand