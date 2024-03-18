import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Abouttext = () => {
  return (
    <section className=''>
        <Container>
            <h2 className='font-dm font-normal text-[16px] lg:text-[38px] text-[#262626] line-height:52px lg:mr-[140px] mx-2 lg-mx-0'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
            <div className='py-[60px]'>
            <Flex className='justify-between'>
                <div className="w-[100%] lg:w-[30%] mx-2 lg:mx-0">
                <div className='py-[20px] lg:py-[60px]'>
                        <h2 className='font-dm font-bold text-[18px] lg:text-[25px] text-[#262626] line-height:36px pb-[11px]'>Our Vision</h2>
                        <p className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] line-height:36px pb-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="w-[100%] lg:w-[30%] mx-2 lg:mx-0">
                <div className='py-[20px] lg:py-[60px]'>
                        <h2 className='font-dm font-bold text-[18px] lg:text-[25px] text-[#262626] line-height:36px pb-[11px]'>Our Story</h2>
                        <p className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] line-height:36px pb-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                </div>
                <div className="w-[100%] lg:w-[30%] mx-2 lg:mx-0">
                    <div className='py-[20px] lg:py-[60px]'>
                        <h2 className='font-dm font-bold text-[18px] lg:text-[25px] text-[#262626] line-height:36px pb-[11px]'>Our Brands</h2>
                        <p className='font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] line-height:36px pb-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>
            </Flex>
            </div>
        </Container>
    </section>
  )
}

export default Abouttext