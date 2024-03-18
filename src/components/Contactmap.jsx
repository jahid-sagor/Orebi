import React from 'react'
import Container from './Container'

const Contactmap = () => {
  return (
     <section className='pb-[120px] w-full'>
        <Container>
        <div className='px-2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.372330416168!2d90.3671795917661!3d23.740739864707628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a5de53a75%3A0xf27ef22645e193c6!2sJigatola%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1707942154646!5m2!1sen!2sbd" width="100%" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </Container>
     </section>
     
  )
}

export default Contactmap