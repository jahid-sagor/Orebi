import React, { useContext, useEffect, useRef, useState,} from 'react'
import Container from './Container'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaUser,FaShoppingCart,FaSearch  } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Apidata } from './ContextAPi';

const Navbar = () => {
    let info = useContext(Apidata)
    let [cartshow, setCartshow] = useState(false)
    let categoryRef = useRef()
    let [usershow, setusershow] = useState(false)
    let userRef = useRef()
    let [shopshow, setshopshow] = useState(false)
    let shopRef = useRef()
    let [searchFilter, setSearchFilter] = useState([])
    
    useEffect(()=> {
       document.addEventListener('click', (e)=>{
          if(categoryRef?.current?.contains(e.target) === true){
            setCartshow(!cartshow)
          }else{
            if(e.target.tagName !== "A"){
            setCartshow(false)
         }
          }
          if(userRef?.current?.contains(e.target) === true){
            setusershow(!usershow)
          }else{
              setusershow(false)
          }if(shopRef?.current?.contains(e.target) === true){
            setshopshow(!shopshow)
          }else{
              setshopshow(false)
          }
       })
    },[cartshow,usershow,shopshow])


    let data = useSelector((state)=>state.single.cartItem)

    let handleSearch = (e) => {
        if(e.target.value == ''){
            setSearchFilter([])
        }else{
            let searchOne = info.filter((item)  => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne);
        }
    }
  return (
    <nav className='bg-[#F5F5F3] lg:py-4 py-2'>
        <Container>
            <div className='flex justify-between lg:gap-0 gap-2 items-center'>
                <div className="lg:w-[11%] w-[25%] flex lg:gap-2 relative z-50  items-center" ref={categoryRef}>
                    <p className='cursor-pointer lg:ml-0 ml-2'><HiBars3BottomLeft className='lg:text-[25px] text-[18px] text-[#262626]'/> </p>   
                    <h2 className='cursor-pointer font-dm font-normal lg:text-[16px] text-[12px] text-[#262626]'>Shop by Category</h2>
                </div>
                {cartshow && 
                    <div className='bg-[#262626] rounded-sm absolute lg:top-[160px] top-[100px] lg:w-[250px] w-[200px] lg:py-4 py-2 z-50 '>
                        <ul>
                            <li className='py-2'><a className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 text-[rgba(255,255,255,0.7)] hover:text-[#ffff] hover:mx-6 duration-300' href="#">Accesories</a></li>
                            <li className='py-2'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] hover:text-[#ffff] mx-4 hover:mx-6 duration-300' href="#">Furniture</a></li>
                            <li className='py-2'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] hover:text-[#ffff] mx-4 hover:mx-6 duration-300' href="#">Electronics</a></li>
                            <li className='py-2'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] hover:text-[#ffff] mx-4 hover:mx-6 duration-300' href="#">Clothes</a></li>
                            <li className='py-2'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] hover:text-[#ffff] mx-4 hover:mx-6 duration-300' href="#">Bags</a></li>
                            <li className='py-2'><a className='font-dm font-normal lg:text-[16px] text-[14px] text-[rgba(255,255,255,0.7)] hover:text-[#ffff] mx-4 hover:mx-6 duration-300' href="#">Home appliances</a></li>
                        </ul>
                    </div>
                }


                    <div className="w-[50%] relative" >
                       <input onChange={handleSearch} type="search" className= 'w-full border-2  rounded-md outline-3 outline-cyan-200 py-2 lg:py-3 px-2 lg:text-[18px]  text-[16px]' placeholder='Search' /> <FaSearch className='absolute lg:top-5 top-3 lg:right-8 right-2 text-[#262626]'/>

                      {searchFilter.length > 0 &&
                          <div className=' lg:w-[60%] w-[250px] h-[540px] overflow-y-scroll bg-[#ffff] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-b-md absolute z-50 top-[52px] lg:left-1 right-[5px] '>
                              {searchFilter.map((item, m) => (
                                  <div key={m} className=''>
                                      <div className='flex items-center hover:bg-[#F5F5F3] rounded-t-md lg:py-6 py-2'>
                                          <div className='ml-4'>
                                              <img className='h-[150px] w-[250px]' src={item.thumbnail} alt="image" />
                                          </div>
                                          <div className='lg:ml-4 ml-2'>
                                              <h2 className='font-dm font-bold lg:text-[16px] text-[10px] text-[#262626]'>{item.title}</h2>
                                              <p className='font-dm font-bold lg:text-[16px] text-[10px] text-[#262626] mt-2'>${item.price}</p>
                                          </div>
                                      </div>
                                  </div>
                              ))
                              }
                          </div>
                      }
                    </div>

                    <div className="lg:w[39%] w-[25%] relative flex justify-end lg:gap-6 gap-2">
                        <div className='flex cursor-pointer' ref={userRef}>
                            <FaUser className='text-[18px] text-[#262626]'/>
                            <IoMdArrowDropdown className='text-[18px] text-[#262626]'/>
                        </div>
                    {usershow && 
                        <div className='absolute top-[35px] lg:left-40 lg:right-0 right-[50px]  bg-[#262626] rounded-md  lg:w-[50%] w-[150px] z-50'>
                            <ul>
                                <li className='py-2 rounded-t-md hover:bg-[#fff] text-[#ffff] hover:text-[#262626] '><Link to='/myaccount' className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 hover:mx-6  duration-500'>My Account</Link></li>
                                <li className='py-2 rounded-b-md hover:bg-[#fff] text-[#ffff] hover:text-[#262626]'><Link to='/login' className='font-dm font-normal lg:text-[16px] text-[14px] mx-4 hover:mx-6 duration-500 cursor-pointer'>Login</Link></li>
                            </ul>
                        </div>
                    }
                         <div className='cursor-pointer lg:mr-0 mr-2 z-50' ref={shopRef}>
                             <FaShoppingCart className='text-[18px] text-[#262626]'/>
                         </div>
                    {shopshow && 
                    data?.map((item, i)=>(
                        <div key={i} className=' lg:w-[80%] w-[250px] bg-[#F5F5F3] rounded-b-md absolute z-50 top-[35px] lg:right-0 right-[5px] '>
                            <div className='flex items-center hover:bg-[#ffff] rounded-t-md lg:py-6 py-2'>
                            <div className='ml-4'>
                                <img className='h-[100px] w-[150px]' src={item.thumbnail} alt="Cart" />
                            </div>
                            <div className='lg:ml-4 ml-2'>
                                <h2 className='font-dm font-bold lg:text-[14px] text-[10px] text-[#262626]'>{item.title}</h2>
                                <p className='font-dm font-bold lg:text-[14px] text-[10px] text-[#262626] mt-2'>${item.price}</p>
                            </div>
                            <div>
                                <RxCross2 className='ml-8'/>
                            </div>
                            </div>
                            <div className=' hover:bg-[#ffff] rounded-b-md lg:py-6 py-2'>
                              <h2 className='ml-5 font-dm font-bold lg:text-[16px] text-[12px] text-[#262626]'><span className='font-normal text-[#767676]'>Subtotal:</span> $44.00</h2>
                            <div className='ml-5 mt-4 mb-4 lg:mb-0'>
                                <Link to='/cart' className='font-dm font-bold lg:text-[14px] text-[10px] border-2 border-[#2B2B2B] rounded-sm bg-[#ffff] hover:bg-[#262626] text-[#262626] hover:text-[#ffff] py-2 px-6 duration-300'>View Cart</Link>  &nbsp;  &nbsp;
                                <Link className='font-dm font-bold lg:text-[14px] text-[10px] border-2 border-[#2B2B2B] rounded-sm bg-[#ffff] hover:bg-[#262626] text-[#262626] hover:text-[#ffff] py-2 px-6 duration-300' to='/cheakout'>Checkout</Link>
                            </div>
                           </div>
                        </div>
                    ))
                    }
                    </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar