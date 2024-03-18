import React from 'react'
import Clock from '../assets/clock.png'

const Homeclock = () => {
  return (
    <section className='lg:pt-[130px] pt-[60px] lg:pb-[128px] pb-[30px]'>
        <div className='lg:flex justify-start flex-wrap'>
            <div className='lg:w-[37%] w-[100%] P-0'>
                <div className='lg:h-[300px] h-[200px] sm:w-[100%] md:w-[100%] lg:w-[625px]'>
                    <img className='h-full w-full' src={Clock} alt="Clock" />
                </div>
            </div>
            <div className='lg:w-[63%] w-[100%] P-0 bg-[#F3F3F3]'>
                 <div className='lg:w-[50%] w-[358px] lg:text-start text-start lg:ml-0 ml-4'>
                    <h2 className='font-dm font-bold lg:text-[39px] text-[30px] text-[#262626] leading-10 lg:pt-0 pt-4 lg:mt-16 mt-0 lg:mb-10 mb-4'>Phone of the year</h2>
                    <h3 className='font-dm font-normal text-[16px] text-[#262626] lg:leading-8 leading-6  lg:mb-12 mb-6 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</h3>
                    <div className='lg:py-0 py-4'>
                        <a className='font-dm font-bold text-[14px] text-[#ffff] leading-4 py-2 px-6 bg-[#262626] ' href="#">Shop Now</a>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Homeclock