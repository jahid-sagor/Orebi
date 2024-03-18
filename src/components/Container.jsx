import React from 'react'

const Container = (props) => {
  return (
   <div className='container xl:container lg:container md:container sm:container mx-auto'>
        {props.children}
   </div>
  )
}

export default Container