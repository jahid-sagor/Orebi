import React, { useEffect, useState,then,useContext } from 'react'
import Container from './Container'
import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import Slider from "react-slick";
import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight  } from "react-icons/hi2";
import { Apidata } from './ContextAPi';
import { Link } from 'react-router-dom';



function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        style={{ position:'absolute', top:'40%', left:'0px', height:'50px', width:'50px', borderRadius:'50%', backgroundColor:'#00000033', zIndex:'1', lineHeight:'50px', textAlign:'center', cursor:'pointer' }}
        onClick={onClick}
      > <HiOutlineArrowLongLeft className='inline-block text-[25px] text-[#ffff] '/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        style={{ position:'absolute', top:'40%',right:'20px', height:'50px', width:'50px', borderRadius:'50%', backgroundColor:'#00000033', zIndex:'1', lineHeight:'50px', textAlign:'center', cursor:'pointer'}}
        onClick={onClick}
      ><HiOutlineArrowLongRight className='inline-block text-[25px] text-[#ffff] '/></div>
    );
  }
  

const Homearrivals = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      };

  let data = useContext(Apidata)

return (
    <section className=''>
        <Container>
            <h2 className='font-dm font-bold lg:text-[39px] text-[28px] text-[#262626] leading-10 lg:mb-12 mb-4'>New Arrivals</h2>
                <Slider {...settings}>
                {data?.map((item,index)=>(
                   <div className='!w-[95%] ml-auto ' key={index}>
                       <div className="relative group overflow-hidden">
                        <Link to='/product'>
                           <img className='h-[350px] w-full brightness-100 group-hover:brightness-75 scale-100  group-hover:scale-105 duration-700 lg:mx-0 mx-2'  src={item.thumbnail}  alt="Arry" />
                        
                          <div className='absolute overflow-y-hidden left-0 bottom-0 w-[100%] h-[0%] opacity-0 bg-[#fff] group-hover:h-[50%] group-hover:opacity-100 duration-500 ease-in'>
                           <div className='flex justify-end items-center h-full'>
                           <ul className=' px-6 text-right'>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Add to Wish List <FaHeart className='inline-block text-[#262626] '/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676] '>Compare <FiRefreshCw className='inline-block text-[#262626] '/></li>
                               <li className='flex justify-end items-center gap-2 font-dm font-normal text-[16px] text-[#767676]'>Add to Cart <FaShoppingCart className='inline-block text-[#262626]'/></li>
                           </ul>
                           </div>
                          </div>
                          </Link>
                       </div>
                       
                       <div className="flex justify-between mt-4 ">
                           <h2 className='font-dm font-bold text:-[16px] lg:text-[20px] text-[#262626] leading-6 lg:mx-0 mx-2'>{item.title}</h2>
                           <h3 className='font-dm font-normal text-[16px] text-[#767676] leading-8 lg:mr-0 mr-2'>${ item.price}</h3>
                          
                       </div>
                       
                       
               </div>
                ))}
                </Slider>
        </Container>
    </section>
  )
}

export default Homearrivals