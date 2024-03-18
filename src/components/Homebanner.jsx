import React from 'react'
import Banimg from "../assets/banner1.png"
import Slider from "react-slick";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import Container from './Container';

const Homebanner = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
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
          {
            breakpoint: 734,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ],
        appendDots: dots => (
            <div
              style={{
                cursor:'pointer',
                fontFamily: "DM Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                borderRadius: "10px",
                padding: "10px",
                position:"absolute",
                top:'50%',
                transform: "translateY(-50%)",
                left:'80px',
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                padding:"15px 0",
                width: "30px",
                color: "#262626",
                borderRight: "4px #fff solid"
              }}
            >
              0{i + 1}
            </div>
          )
      };

  return (
    <section className=''> 
      <Slider {...settings}>
     <div className='cursor-pointer h-[200px] lg:h-full'>
        <img className='h-full'  src={Banimg} alt="Banimg" />
      </div>
     <div className='cursor-pointer h-[200px]  lg:h-full'>
        <img className='h-full' src={Banimg} alt="Banimg" />
      </div>
     <div className='cursor-pointer h-[200px] lg:h-full'>
        <img className='h-full' src={Banimg} alt="Banimg" />
      </div>
     </Slider>
     
      <Container>
      <div className='flex justify-between lg:pt-4 pt-2 lg:pb-6 pb-2'>
      <div className="w-[33%] flex items-center gap-2">
         <PiNumberTwoBold className='font-bold text-[18px]'/> <h2 className='font-dm font-normal lg:text-[16px] text-[12px] lg:leading-5 leading-4'>Two years warranty</h2>
      </div>
      <div className="w-[33%] flex justify-center items-center gap-2">
           <FaTruck className='font-bold text-[18px]'/> <h2 className='font-dm font-normal lg:text-[16px] text-[12px] lg:leading-5 leading-4'>Free shipping</h2>
      </div>
      <div className="w-[33%] flex justify-end items-center gap-2">
      <IoMdRefresh className='font-bold text-[18px]'/> <h2 className='font-dm font-normal lg:text-[16px] text-[12px] lg:leading-5 leading-4'>Return policy in 30 days</h2>
      </div>
      </div>
      </Container> <hr />
      
   
    </section>
  )
}

export default Homebanner