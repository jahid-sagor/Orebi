import React, { useContext, useState,useRef, useEffect } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { Apidata } from './ContextAPi'
import Pegi from './pegination/Pegi'
import PegiNumber from './pegination/PegiNumber'




const Product = () => {
    let data = useContext(Apidata)
    
    // paginetion calculation start====================================================
    let [currentPage, setCurrentPage] = useState (1)
    let [perPage, SetPerPage] = useState(6)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage
    let allPage = data.slice(firstPage, lastPage)
    // paginetion calculation end=======================================================

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
    let [category, setCartegory] = useState([])
    let [catFilter , setCatFilter] = useState([])
    let [brand, setBrand] = useState([])
    let [brandFilter , setBrandFilter] = useState([])
    let [price, setPrice] = useState([])
    let [priceFilter , setPriceFilter] = useState([])

    useEffect(()=>{
      setCartegory([...new Set(data.map((item)=> item.category))])
      setBrand([...new Set(data.map((item)=> item.brand))])
      setPrice([...new Set(data.map((item)=> item.price))])
       
    },[data])
  
    let handlecategory = (catitem)=>{
     let categoryFilter = data.filter((item)=> item.category == catitem)
     setCatFilter(categoryFilter)
    }
    let handleBrand = (branditem)=>{
     let catBrandFilter = data.filter((item)=> item.brand == branditem)
     setBrandFilter(catBrandFilter)
    }
    let handlePrice = (priceitem)=>{
     let catPriceFilter = data.filter((item)=> item.brand == priceitem)
     setPriceFilter(catPriceFilter)
    }
  return (
    <section className='py-[40px] lg:py-[120px]'>
        <Container>
        <div className='pb-[30px]'>
         <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#222] lg:mx-0 mx-2'><Link to='/'>Home</Link> / Product </span>
         </div>
{/* Shop by Category design start ============================================== */}
        <div className='flex lg:justify-between'>

          <div className="w-[40%] lg:w-[19%]">
            <h2 className='font-dm font-bold text-[20px]  line-height:[26px] text-[#262626] z-50 '>Shop by Category</h2>
            
             <ul>
              {category.map((item, m)=>(
                <li key={m} onClick={()=>handlecategory(item)} className='font-dm font-normal py-2 text-[17px] line-height:[26px] text-[#262626] cursor-pointer'>{item}</li>
              ))}
             </ul>
           
{/* Shop by Category design end ============================================== */}

{/* Shop by Brand design start ============================================== */}
     <div className='flex justify-between items-center pt-[20px] lg:pt-[50px] cursor-pointer'>
        <h2 className='font-dm font-bold text-[20px] line-height:[26px] text-[#262626]'>Shop by Brand</h2>
       </div>
       <ul className='h-[250px] overflow-y-scroll '>
          {brand.map((item, m)=>(
              <li key={m} onClick={()=>handleBrand(item)} className='font-dm font-normal py-2 text-[17px] line-height:[26px] text-[#262626] cursor-pointer'>{item}</li>
          ))}
        </ul>
{/* Shop by Brand design end ============================================== */}

{/* Shop by Price design start ============================================== */}
    <div  className='flex justify-between items-center pt-[20px] lg:pt-[50px] cursor-pointer'>
        <h2 className='font-dm font-bold text-[20px] line-height:[26px] text-[#262626]'>Shop by Price</h2>
       </div>
       <ul className='h-[200px] overflow-y-scroll '>
          {price.map((item, m)=>(
              <li key={m} onClick={()=>handlePrice(item)} className='font-dm font-normal py-2 text-[17px] line-height:[26px] text-[#262626] cursor-pointer'>$ {item}</li>
          ))}
        </ul>
     </div>
{/* Shop by price design end ============================================== */}
        <div className="w-[60%] lg:w-[80%] mx-2 lg:mx-0 ">
            <div className='flex justify-between flex-wrap'>
              <Pegi pegi={allPage} catFilter={catFilter} brandFilter={brandFilter}/>
            </div>
            <PegiNumber totalPage={data.length}
                        perPage={perPage}
                        paginate={paginate}
                        next={next}
                        prev={prev}
                        currentPage={currentPage}
                        catFilter={catFilter}
            />
        </div>
      </div>
    </Container>
</section>
  )
}

export default Product