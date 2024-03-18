import React from 'react'
import Container from './Container'
import Banbtm1 from '../assets/banbtm1.png'
import Banbtm2 from '../assets/banbtm2.png'
import Banbtm3 from '../assets/banbtm3.png'
import Flex from './Flex'

const Homeshop = () => {
  return (
    <section className='lg:py-[100px] py-[30px]'>
        <Container>
            <Flex className='justify-between'> 
             <div className='w-[49%]'>
                <img className='cursor-pointer'  src={Banbtm1}  alt="Banbtm1" />
             </div>
             <div className='w-[49%]'>
             <div>
                 <img className='cursor-pointer' src={Banbtm2}  alt="Banbtm2" />
             </div>
             <div className='lg:mt-10 mt-2'>
                <img  className='cursor-pointer' src={Banbtm3}  alt="Banbtm3" />
             </div>
             </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Homeshop