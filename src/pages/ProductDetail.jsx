import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import { FaRegStar,FaStarHalf,FaStar  } from "react-icons/fa";
import { FaPlus,FaMinus  } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/singleSlice';



const ProductDetail = () => {
   let dispatch = useDispatch()
   let [show,setshow] = useState(false)  
   let [iconShow,setIconShow] = useState(false) 
   let [plusIconShow,setPlusIconShow] = useState(false)
   let [twoShow,setTwoShow] = useState(false)
   let plusRef = useRef() 
   let plusTwoRef = useRef()

   let [data, setData] = useState([])
   let productId = useParams()

   let handleproduct = (item) =>{
      dispatch(addToCart({...item, quantity:1}))
   }

   let dataId = () =>{
        axios?.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setData(response.data);
        })
    }
    
    
   useEffect(()=>{
      document.addEventListener('click',(e)=>{
         if(plusRef?.current?.contains(e.target) === true){
            setshow(!show);
            setIconShow(!iconShow);
         }else{
            setshow(false);
            setIconShow(false);
           }if(plusTwoRef?.current?.contains(e.target) === true){
            setPlusIconShow(!plusIconShow);
            setTwoShow(!twoShow);
           }else{
            setPlusIconShow(false);
            setTwoShow(false);
           }
       })
    dataId()
   },[show,iconShow,twoShow,plusIconShow])

   let clientRatig = Array.from({length: 5},(elm, index)=>{
      let number = index + 0.5;
      return(
         data?.rating >= index + 1 ? <FaStar className='text-[#FFD881]'/> : data?.rating >= number ? <FaStarHalf className='text-[#FFD881]'/> : <FaRegStar className='text-[#FFD881]'/>
      )
   })
   
   
return (
    <section className='py-[40px] lg:py-[120px] mx-2 lg:mx-0'>
       <Container>
          <div className='flex gap-x-2 lg:gap-x-6 flex-wrap '>
            {data?.images?.map((item,a)=>(
              <div key={a} className='w-[48%] lg:w-[32%] h-[200px] lg:h-[600px] py-2 lg:py-6'>
                <img src={item} alt="" className='w-full h-full' />
             </div>
            ))}
         </div>
         <div  className='w-[100%] lg:w-[40%] pt-8 lg:pt-0'>
            <h2 className='font-dm font-bold text-[30px] lg:text-[39px] line-height:[63px] text-[#262626]'>Product</h2>
            <div className='flex gap-4 items-center pt-2 lg:pt-4 pb-[20px] lg:pb-[39px]'>
              <span className='flex'>
               {clientRatig}
              </span>
               <h3 className='font-dm font-normal text-[14px] line-height:[18px] text-[#767676]'>1 Review</h3>
            </div>
           
            <div className='flex gap-8  pb-[24px]'>
            <h4 className='line-through font-dm font-normal text-[16px] lg:text-[20px] line-height:[18px] text-[#767676]'>${data.price}</h4>
             <h5 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[26px] text-[#262626]'>$ {data.price - (data.price * data.discountPercentage / 100)}</h5>
             {/* discount price ber korte hbe */}
            </div> 
            <hr />
            <div className='flex gap-4 items-center pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]'>
               <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>COLOR:</h2>
               <div className='h-[15px] w-[15px] rounded-full bg-[rgba(0,0,0,0.27)] cursor-pointer'></div>
               <div className='h-[15px] w-[15px] rounded-full bg-[#FF8686] cursor-pointer'></div>
               <div className='h-[15px] w-[15px] rounded-full bg-[#7ED321] cursor-pointer'></div>
               <div className='h-[15px] w-[15px] rounded-full bg-[#B6B6B6] cursor-pointer'></div>
               <div className='h-[15px] w-[15px] rounded-full bg-[#15CBA5] cursor-pointer'></div>
            </div> <hr />
            <div className='flex items-center gap-6 pt-[20px] pb-[20px]'> 
               <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>STATUS:</h2>
               <h3 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#767676]'>In stock</h3>
            </div> <hr />
            <div className='flex gap-4 pt-[25px] pb-[25px]'>
               <div className=''>
                <Link to=" " className='py-2 px-2 lg:px-8 border-2 border-[#262626] font-dm font-bold text-[12px] lg:text-[16px] line-height:[23px] text-[#262626] hover:text-[#ffff]  hover:bg-[#262626] hover:border-transparent duration-300'>Add to Wish List</Link>
               </div>
               <div className=''>
                <Link onClick={()=>handleproduct(data)} to="/cart" className='py-2 px-6 lg:px-12 border-2 border-[#262626] font-dm font-bold text-[12px] lg:text-[16px] line-height:[23px] text-[#262626] hover:text-[#ffff]  hover:bg-[#262626] hover:border-transparent duration-300'>Add to Cart</Link>
               </div>
            </div> <hr />
            <div ref={plusRef} className='flex justify-between item-center pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px] cursor-pointer'>
             <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>FEATURES  & DETAILS</h2>
             {iconShow ? <FaMinus/> : <FaPlus/>}
            </div> 
             {show && 
               <div className=''>
                  <ul>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>1. one</li>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>2. two</li>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>3. three</li>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>4. four</li>
                  </ul>
               </div>
             } <hr />
            <div ref={plusTwoRef} className='flex justify-between item-center pt-[20px] pb-[20px] cursor-pointer'>
            <h2 className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]'>SHIPPING & RETURNS</h2>
            {plusIconShow ? <FaMinus/> : <FaPlus/>}
            </div> 
            {twoShow && 
               <div className=''>
                  <ul>
                  <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>1. one</li>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>2. two</li>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>3. three</li>
                     <li className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'>4. four</li>
                  </ul>
               </div>
             } <hr />
            <div className='pt-[20px]'>
              <p className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
         </div>
         



         <div className='flex gap-8 pt-[50px] lg:pt-[123px]'>
            <h2 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[30px] hover:text-[#262626] text-[#767676]'>Description</h2>
            <h3 className='font-dm font-bold text-[16px] lg:text-[20px] line-height:[30px] text-[#767676] hover:text-[#262626]'>Reviews (1)</h3>
         </div>
         <div className='pt-[20px] lg:pt-[42px] pb-[16px]'>
            <h2 className='font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] text-[#767676]'>1 review for Product</h2>
         </div> <hr />
         <div className='flex justify-between items-center pt-[23px] pb-[14px]'>
            <div className='flex items-center gap-6' >
              <h2 className='font-dm font-normal text-[15px] lg:text-[16px] line-height:[30px] text-[#262626]'>John Ford</h2>
              <span className='flex '>
               <FaStar className='text-[#FFD881]'/>
               <FaStar  className='text-[#FFD881]'/>
               <FaStar className='text-[#FFD881]'/>
               <FaStar className='text-[#FFD881]'/>
               <FaStar className='text-[#FFD881]'/>
               </span>
            </div>
            <div className=''>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[20px] text-[#767676]'>6 months ago</h2>
            </div>
         </div>
         <div className='pb-[15px]'>
         <p className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         </div> <hr />




         <div className='pt-[53px] w-[90%] lg:[w-40%] lg:w-[40%]'>
            <h2 className='font-dm font-bold text-[18px] lg:text-[20px] line-height:[30px] text-[#262626] pb-[25px] lg:pb-[48px]'>Add a Review</h2>
             <form action="">
               <div className=''>
               <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[30px] text-[#262626]' htmlFor="">Name</label> <br />
               <input className='w-full placeholder:text-[#767676] font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] py-2 px-2 !required:border-red-500 outline-2 outline-cyan-200' type="text"  placeholder='Your name here'/> <hr />
               </div>
               <div className='pt-[23px]'>
               <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[30px] text-[#262626]' htmlFor="">Email</label> <br />
               <input className='w-full placeholder:text-[#767676] font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] py-2 px-2 required:true outline-2 outline-cyan-200' type="email"  placeholder='Your name here'/>
               </div> <hr />
               <div className=' pt-[23px]'>
               <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[30px] text-[#262626]' htmlFor="">Review</label> <br />
               <textarea className= 'w-full placeholder:text-[#767676] font-dm font-normal text-[12px] lg:text-[14px] line-height:[30px] py-2 px-2 outline-2 outline-cyan-200' name="" id="" cols="81" rows="5" placeholder='Your review here'></textarea>
               </div> <hr />
               <div className='pt-[50px]'>
                 <a className='py-2 px-12 border-2 border-[#262626] font-dm font-bold text-[14px] line-height:[30px] text-[#262626] hover:border-transparent hover:text-[#fff] hover:bg-[#262626] duration-300' >Post</a>
               </div>
             </form>
         </div>
       </Container>
    </section>
  )
}

export default ProductDetail