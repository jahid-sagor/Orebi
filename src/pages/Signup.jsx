import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { GoEye,GoEyeClosed  } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { IoHappyOutline } from "react-icons/io5";



const Signup = () => {
    let [show, setShow] = useState(false)
    let [showtwo, setShowTwo] = useState(false)
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [number, setNumber] = useState()
    let [addressone, setAddressOne] = useState('')
    let [addressTwo, setAddressTwo] = useState('')
    let [city, setCity] = useState()
    let [post, setPost] = useState()
    let [division, setDivision] = useState()
    let [district, setDistrict] = useState()
    let [password, setpassword] = useState()
    let [err, setErr] = useState()
    let [errr, setErrr] = useState()
    let Navigate = useNavigate()
 
    const auth = getAuth();
    const db = getDatabase();
    

    let handleNameOne = (e) =>{
        setFirstName(e.target.value);
    }
    let handleNameTwo = (e) =>{
        setLastName(e.target.value);
    }
    let handleEmail = (e) =>{
        setEmail(e.target.value);
        setErr('');
    }
    let handleNumber = (e) =>{
        setNumber(e.target.value);
    }
    let handleAddressOne = (e) =>{
        setAddressOne(e.target.value);
    }
    let handleAddressTwo = (e) =>{
        setAddressTwo(e.target.value);
    }
    let handleCity = (e) =>{
        setCity(e.target.value);
    }
    let handlePost = (e) =>{
        setPost(e.target.value);
    }
    let handledivision = (e) =>{
        setDivision(e.target.value);
    }
    let handledistrict = (e) =>{
        setDistrict(e.target.value);
    }
    let handlepassword = (e) =>{
        setpassword(e.target.value);
        setErrr('');
    }
    let handleSubmit = () =>{
       if(!email){
        setErr('* Oh, snapp!  Please enter your email.');
       }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setErr('* OOPS! Please enter a valid Email');
       }

 createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    set(ref(db, 'users/' + user.user.uid) , {
        username: firstName,
        usernametwo: lastName,
        number: number,
        email: email,
        addressone: addressone,
        addressTwo: addressTwo,
        city: city,
        post: post,
        division: division,
        district: district,
        password: password

      }).then(()=>{
        setEmail('');
        setErr('');
      })
  }).then(()=>{
    toast.success( 
        <div className=''>
            <div className='mx-[90px]'>
                <p className=""> <BsFillHandThumbsUpFill className='text-[60px] text-[green] '/> </p>
            </div>
            <div className='pt-3 mx-[20px]'>
               <h3 className='font-dm font-medium text-[green] text-[18px] '>   Congratulations, your account has been successfully created. </h3> 
            </div>
        </div> , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
  }).then(()=>{
    setTimeout(()=>{
        Navigate('/login')
    },4000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      
    }
   
  return (
    <section className='px-2 lg:px-0'>
       <Container>
       <div className='py-[20px] lg:py-[124px]'>
            <h2 className='font-dm font-bold text-[30px] lg:text-[49px] line-height:[63px] text-[#262626]'>Sign up</h2>
            <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#767676]'><Link to='/'>Home</Link> / Sign up </span>
         </div>
            <p className='lg:w-[45%] pb-[35px] lg:pb-[60px] font-dm font-normal text-[14px] lg:text-[16px] line-height:[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> <hr />
             <div className='py-6 lg:py-10'>
                <h2 className='font-dm font-bold text-[25px] lg:text-[39px] line-height:[36px] text-[#262626] pb-[20px] lg:pb-[42px]'>Your Personal Details</h2>
                <form  action="">
                   <div className='w-[100%] lg:w-[70%] flex justify-between flex-wrap'>
                    <div className='w-[90%] lg:w-[45%]'>
                        <label htmlFor="" className='font-dm font-bold text-[16px] text-[#262626]'> First Name</label> <br /> 
                        <input onChange={handleNameOne} className='w-full font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2  outline-2 outline-cyan-200' type="text" placeholder='First Name'/> <hr />
                    </div> 
                    <div className='w-[45%]'>
                        <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor=""> Last Name</label> <br />
                        <input onChange={handleNameTwo} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="email" placeholder='Last Name'/> <hr />
                    </div>  
                    </div>

                    <div className='w-[70%] flex justify-between pt-[24px]'>
                    <div className='w-[45%]'>
                        <label htmlFor="" className='font-dm font-bold text-[16px] text-[#262626]'> Email address</label> <br />
                        <input onChange={handleEmail} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="email" placeholder='company@domain.com'/> <hr />
                        <p className="mt-4 font-dm font-extrabold text-[16px] text-red-600 ">{err}</p>
                    </div> 
                    <div className='w-[45%] pb-12'>
                        <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor=""> Telephone</label> <br />
                        <input onChange={handleNumber} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="text" placeholder='Your phone number'/> <hr />
                    </div>
                    
                    </div> 
                    </form>
                     <hr />
                       <div className='pt-10 pb-14'>
                       <h2 className='font-dm font-bold text-[39px] line-height:[36px] text-[#262626] pb-[42px]'>New Customer</h2>
                       <div className='w-[70%] flex justify-between'>
                    <div className='w-[45%]'>
                        <label htmlFor="" className='font-dm font-bold text-[16px] text-[#262626]'>Address 1</label> <br /> 
                        <input onChange={handleAddressOne} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="text" placeholder='4279 Zboncak Port Suite 6212'/> <hr />
                    </div> 
                    <div className='w-[45%]'>
                        <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor=""> Address 2</label> <br />
                        <input onChange={handleAddressTwo} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="email" placeholder='--'/> <hr />
                    </div> 
                    </div>
                    <div className='w-[70%] flex justify-between pt-[24px]'>
                    <div className='w-[45%]'>
                        <label htmlFor="" className='font-dm font-bold text-[16px] text-[#262626]'>City</label> <br />
                        <input onChange={handleCity} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="text" placeholder='Your city'/> <hr />
                    </div> 
                    <div className='w-[45%]'>
                        <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor="">Post Code</label> <br />
                        <input onChange={handlePost} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type="code" placeholder='05228'/> <hr />
                    </div>
                    </div>
                    <div className='w-[70%] flex justify-between pt-[24px]'>
                    <div className='w-[45%]'>
                        <label htmlFor="" className=" font-dm font-bold text-[16px] text-[#262626]">Division</label>
                         <br />
                        <select onClick={handledivision} id="underline_select" className="cursor-pointer font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-1 outline-cyan-200 block text-sm text-gray-500 bg-transparent border-0 border-b-1 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer" size="3" >
                           <option selected>Choose a Division</option>
                           <option value="BAR">Barisal</option>
                           <option value="CTG">Chittagong</option>
                           <option value="DHA">Dhaka</option>
                           <option value="kHU">Khulna</option>
                           <option value="MYM">Mymensingh</option>
                           <option value="RAJ">Rajshahi</option>
                           <option value="RAN">Rangpur</option>
                           <option value="SYL">Sylhet</option>
                       </select> 
                         <hr />
                    </div> 
                    <div className='w-[45%] '>
                        <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor=""> District</label> <br />
                        <select onClick={handledistrict} id="underline_select" className="cursor-pointer font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-1 outline-cyan-200 block text-sm text-gray-500 bg-transparent border-0 border-b-1 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer " size="3" >
                           <option selected>Choose a District</option>
                           <option value="BAS">Barisal</option>
                           <option value="CTG">Chittagong</option>
                           <option value="DHA">Dhaka</option>
                           <option value="KHU">Khulna</option>
                           <option value="MYM">Mymensingh</option>
                           <option value="RAJ">Rajshahi</option>
                           <option value="RAN">Rangpur</option>
                           <option value="SYL">Sylhet</option>
                           <option value="COM">Comilla </option>
                           <option value="FAR">Faridpur</option>
                           <option value="NOA">Noakhali </option>
                           <option value="PAB">Pabna </option>
                           <option value="BOG">Bogra </option>
                           <option value="TAG">Tangail</option>
                           <option value="PAT">Patuakhali</option>
                           <option value="SIR">Sirajganj </option>
                           <option value="COX'S">Cox's Bazar</option>
                       </select>
                        <hr />
                    </div>
                    </div>
                    </div> <hr />
                    <div className='pt-10 pb-14'>
                        <h2 className='font-dm font-bold text-[39px] line-height:[36px] text-[#262626]'>Your Password</h2>
                    <div className='w-[70%] flex justify-between pt-[24px]'>
                    <div className='w-[45%] relative'>
                        <label htmlFor="" className='font-dm font-bold text-[16px] text-[#262626]'>Password</label> <br />
                        <input onChange={handlepassword} className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type={show ? 'text': 'password'} placeholder='Password'/> <hr />
                        <div onClick={()=>setShow(!show)} className='absolute top-[35px] right-[20px] cursor-pointer'>
                        {show ? <GoEyeClosed/> : <GoEye/>}
                        </div> 
                        <p className="mt-4 font-dm font-extrabold text-[16px] text-red-600 ">{errr}</p>
                    </div> 
                    <div className='w-[45%] relative'>
                        <label  className='font-dm font-bold text-[16px] text-[#262626]' htmlFor=""> Repeat Password</label> <br />
                        <input className='font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full outline-2 outline-cyan-200' type={showtwo ? 'text' : 'password'} placeholder='Repeat password'/> <hr />
                        <div onClick={()=>setShowTwo(!showtwo)} className='absolute top-[35px] right-[20px] cursor-pointer'>
                        {showtwo ? <GoEyeClosed/> : <GoEye/>}
                        </div>
                    </div>
                    </div>
                    </div>
                     <div className='py-10'>
                        <div className='flex gap-4 items-center'>
                       <input type="checkbox"  /> <p className='font-dm font-normal text-[14px] text-[#767676]'>I have read and agree to the Privacy Policy</p>
                        </div>
                        <div className='flex items-center gap-10 pt-8'>
                           <div>
                           <label className='font-dm font-normal text-[14px] text-[#767676]' htmlFor="">Subscribe Newsletter</label>
                           </div>
                            <div className='font-dm font-normal text-[14px] text-[#767676]'>
                            <input type="radio" name='ami'/> YES
                            </div>
                            <div className='font-dm font-normal text-[14px] text-[#767676]'>
                            <input type="radio" name='ami'/> NO
                            </div>
                        </div>
                     </div>
                    <div className='w-[156px] pb-14'>
                        <div onClick={handleSubmit}>
                        <Link className='py-2 px-12 bg-[#262626] font-dm font-bold text-[#ffff] text-[16px]'  to=''>Sign Up</Link>
                        <ToastContainer/>
                        </div>
                    </div>    
             </div>

       </Container>
    </section>
  )
}

export default Signup