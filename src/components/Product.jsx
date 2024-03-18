import React, { useContext, useEffect, useState,useRef } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { Apidata } from './ContextAPi'
import Pegi from './pegination/Pegi'
import PegiNumber from './pegination/PegiNumber'
import { FaPlus,FaMinus  } from "react-icons/fa";
import { TiArrowSortedUp,TiArrowSortedDown  } from "react-icons/ti";




const Product = () => {
    let data = useContext(Apidata)
    
    // paginetion calculation start====================================================
    let [currentPage, setCurrentPage] = useState (1)
    let [perPage, SetPerPage] = useState(6)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage
    let allPage = data.slice(firstPage, lastPage)
    // paginetion calculation end=======================================================

    // Shop by Category dropdown start==================================================
    let [showIcon, setShowIcon] = useState(false)
    let [show, setShow] = useState(false)
    let categoryoneRef = useRef()
    
    let [shown, setShown] = useState(false)
    let [showcatTwoicon, setShowcatIcon] = useState(false)
    let categoryTwoRef = useRef()
    // Shop by Category dropdown end====================================================

    // Shop by color dropdown start====================================================
    let [showColorIcon, setShowColorIcon] = useState(false)
    let [showColor, setShowColor] = useState(false)
    let colowRef = useRef()
    // Shop by color dropdown end======================================================

    // Shop by brand dropdown start======================================================
     let [showbrandIcon, setshowbrandIcon] = useState(false)
     let [showBrand,setShowBrand] = useState(false)
     let brandRef = useRef()
    // Shop by brand dropdown end======================================================

    // Shop by price dropdown start======================================================
    let [showpriceIcon, setshowPriceIcon] = useState(false)
    let [showPrice,setShowPrice] = useState(false)
    let priceRef = useRef()
    // Shop by price dropdown end======================================================

    // paginetion number calculation start==============================================
    let paginate  = (pageNumber)=>{
      setCurrentPage(pageNumber + 1)
    }
    let next = () =>{
      if(currentPage < perPage - 1){
        setCurrentPage((state)=> state + 1)
      }
    }
    let prev = () =>{
      if(currentPage > 1){
        setCurrentPage((state)=> state - 1)
      }
    }
    // paginetion number calculation end ================================================

    // dropdown useeffect start =========================================================
    useEffect (()=>{
      document?.addEventListener('click',(e)=>{
        if(categoryoneRef?.current?.contains(e.target) === true){
          setShow(!show)
          setShowIcon(!showIcon)
        }else{
          if(e.target.tagName !== "A"){
            setShow(false)
            setShowIcon(false)
          }
        }
        if(categoryTwoRef?.current?.contains(e.target) === true){
          setShown(!shown)
          setShowcatIcon(!showcatTwoicon)
        }else{
          if(e.target.tagName !== "A"){
            setShown(false)
            setShowcatIcon(false)
          }
        }
        if(colowRef?.current?.contains(e.target) === true){
          setShowColor(!showColor)
          setShowColorIcon(!showColorIcon)
        }else{
          if(e.target.tagName !== "H2"){
            setShowColor(false)
            setShowColorIcon(false)
          }
        }
        if(brandRef?.current?.contains(e.target) === true){
          setShowBrand(!showBrand)
          setshowbrandIcon(!showbrandIcon)
        }else{
          if(e.target.tagName !== "H2"){
            setShowBrand(false)
            setshowbrandIcon(false)
          }
        }
        if(priceRef?.current?.contains(e.target) === true){
          setShowPrice(!showPrice) 
          setshowPriceIcon(!showpriceIcon)
        }else{
          if(e.target.tagName !== "H2"){
            setShowPrice(false) 
            setshowPriceIcon(false)
          }
        }
       
      })
    },[show,showIcon,shown,showcatTwoicon,showColor,showColorIcon,showBrand,showbrandIcon,showPrice,showpriceIcon])
    // dropdown useeffect end ===========================================================
  return (
    <section className='py-[40px] lg:py-[120px]'>
        <Container>
        <div className='pb-[30px]'>
         <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#222] lg:mx-0 mx-2'><Link to='/'>Home</Link> / Product </span>
         </div>
{/* Shop by Category design start ============================================== */}
        <div className='flex lg:justify-between'>

          <div className="w-[40%] lg:w-[19%]">
            <h2 className='font-dm font-bold text-[14px] lg:text-[20px] line-height:[26px] text-[#262626] z-50 '>Shop by Category</h2>
            <div ref={categoryoneRef} className='flex justify-between items-center px-2 py-4 cursor-pointer z-50'>
               <h2 className=' font-dm font-normal text-[12px] lg:text-[16px] line-height:[30px] text-[#767676]'>Category 1</h2>
               {showIcon ? <FaMinus /> : <FaPlus /> } 
            </div>  <hr />
            {show && 
               <ul className='bg-[#262626] w-[100%] py-1 lg:py-2 px-1 lg:px-2 z-50'>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 1</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 2</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 3</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 4</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 5</a></li>
               </ul>
            }
            <div className='px-2 py-4 cursor-pointer'>
            <h3 className='font-dm font-normal text-[12px] lg:text-[16px] line-height:[30px] text-[#767676]'>Category 2</h3>
            </div>  <hr />
            <div ref={categoryTwoRef} className='flex justify-between items-center  px-2 py-4 cursor-pointer'>
            <h3 className='font-dm font-normal text-[12px] lg:text-[16px] line-height:[30px] text-[#767676] z-40'>Category 3</h3>
            {showcatTwoicon ? <FaMinus /> : <FaPlus/> } 
            </div> <hr />
            {shown && 
            <ul className='bg-[#262626] lg:w-[98%] py-2 px-2'>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 1</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 2</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 3</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 4</a></li>
                <li className='py-2'> <a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Cat 5</a></li>
            </ul>  
            }
            <div className='px-2 py-4 cursor-pointer'>
            <h3 className='font-dm font-normal text-[12px] lg:text-[16px]  line-height:[30px] text-[#767676]'>Category 4</h3>
            </div> <hr />
            <div className='px-2 py-4 cursor-pointer'>
            <h3 className='font-dm font-normal text-[12px] lg:text-[16px]  line-height:[30px] text-[#767676]'>Category 5</h3>
            </div> <hr />      
{/* Shop by Category design end ============================================== */}

{/* Shop by Color design start ============================================== */}
       <div ref={colowRef} className='flex justify-between items-center pt-[20px] lg:pt-[50px] cursor-pointer z-50'>
        <h2 className='font-dm font-bold text-[14px] lg:text-[20px] line-height:[26px] text-[#262626] z-50'>Shop by Color</h2>
        {showColorIcon ? <TiArrowSortedUp /> : <TiArrowSortedDown/> } 
       </div>
       {showColor && 
       <div className='px-2 z-50'>
       <div className='flex justify-start items-center gap-4 pt-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#000000]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Black</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#FF8686]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Orange</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#7ED321]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Green</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[#B6B6B6]'></div>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Gray</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
        <div className='h-3 w-3 rounded-full bg-[red]'></div>
          <div>
             <h2 className='font-dm font-normal text-[16px] line-height:[30px] text-[#767676]'>Gray</h2>
          </div>
       </div> <hr />
       
       </div>
       }
{/* Shop by Color design end ============================================== */}

{/* Shop by Brand design start ============================================== */}
     <div ref={brandRef} className='flex justify-between items-center pt-[20px] lg:pt-[50px] cursor-pointer'>
        <h2 className='font-dm font-bold text-[14px] lg:text-[20px] line-height:[26px] text-[#262626]'>Shop by Brand</h2>
        {showbrandIcon ? <TiArrowSortedUp /> : <TiArrowSortedDown/> } 
       </div>
       {showBrand && 
       <div className='px-2'>
       <div className='flex justify-start items-center gap-4 pt-4 py-2'>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Yellow</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Mens World</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Free land</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Illiyeen</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Infinity</h2>
          </div>
       </div> <hr />
       
       </div>
       }
{/* Shop by Brand design end ============================================== */}

{/* Shop by Price design start ============================================== */}
    <div ref={priceRef} className='flex justify-between items-center pt-[20px] lg:pt-[50px] cursor-pointer'>
        <h2 className='font-dm font-bold text-[14px] lg:text-[20px] line-height:[26px] text-[#262626]'>Shop by Price</h2>
        {showpriceIcon ? <TiArrowSortedUp /> : <TiArrowSortedDown/> } 
       </div>
       {showPrice && 
       <div className='px-2'>
       <div className='flex justify-start items-center gap-4 pt-4 py-2'>
          <div>
             <h2 className='font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>$0.00 - $9.99</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal  text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>$10.00 - $19.99</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal  text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>$20.00 - $29.99</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal  text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>$30.00 - $39.99</h2>
          </div>
       </div> <hr />
       <div className='flex justify-start items-center gap-4 py-2'>
          <div>
             <h2 className='font-dm font-normal  text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>$40.00 - $69.99</h2>
          </div>
       </div> <hr />
       
       </div>
       }
     </div>
{/* Shop by price design end ============================================== */}
        <div className="w-[60%] lg:w-[80%] mx-2 lg:mx-0 ">
            <div className='flex justify-between flex-wrap'>
              <Pegi pegi={allPage}/>
            </div>
            <PegiNumber totalPage={data.length}
                        perPage={perPage}
                        paginate={paginate}
                        next={next}
                        prev={prev}
                        currentPage={currentPage}
            />
        </div>
      </div>
    </Container>
</section>
  )
}

export default Product