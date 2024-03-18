import React, { useDebugValue, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { TiArrowSortedUp,TiArrowSortedDown  } from "react-icons/ti";
import { FaPlus,FaMinus  } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { decrementProduct, incerementProduct, removeProduct } from '../components/slice/singleSlice';



const Cart = () => {
  let data = useSelector((state)=> state.single.cartItem)
  let [showCartIcon, setShowCartIcon] = useState(false)
  let [showCart, setShowCart] = useState(false)
  let cartRef = useRef()
  let dispatch = useDispatch()


    useEffect(()=>{
        document.addEventListener('click',(e)=>{
          if(cartRef?.current?.contains(e.target) === true){
            setShowCart(!showCart)
            setShowCartIcon(!showCartIcon)
          }else{
                setShowCart(false)
                setShowCartIcon(false)
            }
        })
      },[showCart,showCartIcon])
 // cart page total price and total quantity calculation start=============================
 const {totalPrice, totalQuantity} = data.reduce((acc , item)=>{
   acc.totalPrice += item.price * item.quantity 
   acc.totalQuantity += item.quantity
   return acc;
  },{totalPrice:0, totalQuantity:0})
  // cart page total price and total quantity calculation end=============================

  return (
    <section className='px-2 lg:px-0'>
      <Container>
        <div className=''>
        <div className='py-[20px] lg:py-[124px]'>
            <h2 className='font-dm font-bold text-[30px] lg:text-[49px] line-height:[63px] text-[#262626]'>Cart</h2>
            <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#222]'><Link to='/'>Home</Link> / Cart </span>
         </div>
           <div className=''>
              <div className='flex justify-between bg-[#F5F5F3] items-center py-2 lg:py-4 px-2 lg:px-4 border border-slate-200'>
                  <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626] '>Product</h2> 
                  <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626] ml-20 lg:ml-0'>Price</h2>
                  <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>Quantity</h2>
                  <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>Total</h2>
              </div>
              {data.map((item,index)=>(
              <div key={index}  className='flex py-4 border border-slate-200'>

                  <div className='w-[45%] lg:w-[33%] flex gap-2 lg:gap-4 items-center px-1 lg:px-4 '>
                    <div className=''>
                     <span className=' cursor-pointer' onClick={()=>dispatch(removeProduct(index))}><RxCross2 className='text-[14px] lg:text-[22px]'/></span>
                      </div>
                      <div className='h-[60px] lg:h-[200px] w-[120px] lg:w-[200px]'>
                        <img className='h-full w-full'  src={item.thumbnail} alt="Cartimg" />
                      </div>
                      <div className='w-[150px]'>
                          <h2 className='font-dm font-bold text-[12px] lg:text-[16px] line-height:[23px] text-[#262626]'>{item.title}</h2>
                      </div>
                  </div>

                  <div className='w-[67%] flex justify-between items-center px-2'>
                    <div className=''>
                     <h2 className='jusity-center font-dm font-bold text-[12px] lg:text-[20px] line-height:[26px] text-[#262626]'>${item.price}</h2>
                    </div>
                     <div className='flex justify-between gap-4 lg:gap-10 py-1 lg:py-2 px-2 lg:px-6 border border-slate-200'>
                        <button onClick={()=>dispatch(decrementProduct(index))}><FaMinus className='text-[10px] lg:text-[18px]'/></button>
                          <h2 className='jusity-center font-dm font-bold text-[12px] lg:text-[20px] line-height:[26px] text-[#262626]'>{item.quantity}</h2>
                        <button onClick={()=>dispatch(incerementProduct(index))}><FaPlus className='text-[10px] lg:text-[18px]'/></button>
                     </div>
                     <div className=''>
                         <h2 className='jusity-center font-dm font-bold text-[12px] lg:text-[20px] line-height:[26px] text-[#262626]'>${item.price * item.quantity}</h2>
                     </div>
                  </div>
              </div>
              ))}
           </div>
           <div className='flex justify-between items-center border border-slate-200'>
              <div className='w-[35%] flex justify-between items-center px-2 lg:px-4 py-2 lg:my-4'>
                   <div ref={cartRef} className=' flex justify-between items-center gap-6 lg:gap-[200px] py-2 border border-slate-200 px-2 lg:px-4 cursor-pointer'>
                      <h2  className=' font-dm font-bold text-[14px] lg:text-[20px] line-height:[26px] text-[#767676]'>SIZE</h2>
                      {showCartIcon ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
                   </div>
                   
                   <div className=''>
                       <h2 className='font-dm font-bold text-[12px] lg:text-[16px] line-height:[26px] text-[#262626]'>Apply coupon</h2>
                   </div>
              </div>
              <div className='mr-2'>
                 <h2 className='jusity-center font-dm font-bold text-[14px] lg:text-[18px] line-height:[26px] text-[#262626]'>Update cart</h2>
              </div>
           </div>
           {showCart &&
                      <div className='w-[19%] bg-[#262626] mx-4 px-[20px]'>
                         <ul className='py-2'>
                            <li className='font-dm font-bold text-[16px] line-height:[26px] text-[#fff] py-2 cursor-pointer'>34</li>
                            <li className='font-dm font-bold text-[16px] line-height:[26px] text-[#fff] py-2 cursor-pointer'>35</li>
                            <li className='font-dm font-bold text-[16px] line-height:[26px] text-[#fff] py-2 cursor-pointer'>36</li>
                            <li className='font-dm font-bold text-[16px] line-height:[26px] text-[#fff] py-2 cursor-pointer'>37</li>
                            <li className='font-dm font-bold text-[16px] line-height:[26px] text-[#fff] py-2 cursor-pointer'>38</li>
                            <li className='font-dm font-bold text-[16px] line-height:[26px] text-[#fff] py-2 cursor-pointer'>39</li>
                         </ul>
                      </div>
                      }
              <div className='flex justify-between'>
                <div className='w-[40%] lg:w-[60%]'>

                </div>
                <div className='w-[60%] lg:w-[40%] pt-[54px]'>
                    <h2 className='text-end px-2 pb-[15px] lg:pb-[24px] font-dm font-bold text-[16px] lg:text-[20px] line-height:[26px] text-[#262626]'>Cart totals</h2>
                    <table className="w-full border-collapse border border-slate-400">
            <thead >
            <tr>
              <td className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626] text-start px-2 lg:px-4 py-2 lg:py-4 border border-slate-200">Total Quantity</td>
                <td className="font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] px-4 border border-slate-200 ">{totalQuantity}</td>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <th className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626] text-start px-2 lg:px-4 py-2 lg:py-4 border border-slate-200 ">Subtotal</th>
                <th className="font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] text-start px-4 border border-slate-200 ">${totalPrice}</th>
              </tr>

              <tr>
                <td className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626] text-start px-2 lg:px-4 py-2 lg:py-4 border border-slate-200 ">Total</td>
                <td className="font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] text-start px-4 border border-slate-200 ">${totalPrice}</td>
              </tr>
            </tbody>
        </table>        
                 <div className='text-right pt-10 pb-[100px]'>
                  <Link to="/cheakout" className=' py-2 px-2 lg:px-8  border-2 border-[#767676] hover:bg-[#262626] font-dm font-bold text-[12px] lg:text-[14px] text-[#262626] hover:text-[#fff] hover:border-transparent duration-300'>Proceed to Checkout</Link>
                  </div> 
                </div>
              </div>
        </div>
      </Container>
    </section>
  )
}

export default Cart