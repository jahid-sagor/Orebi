import React, { useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail  } from "firebase/auth";

const Loginform = () => {
  const auth = getAuth();
    let [email , setEmail] = useState('')
    let [password , setPassword] = useState('')
    let [err, setErr] = useState()
    let [ForgateModel, setForgateModel] = useState(false)
    let [updatePasswordMail, setUpdatePasswordMail] = useState()

  let handleEmail = (e) =>{
    setEmail(e.target.value);
    setErr('')
  }
  let handlePassworrd = (e) =>{
    setPassword(e.target.value);
    setErr('')
  }
  let handleLogin = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
      setErr('')
    })
    .catch((error) => {
      const errorCode = error.code;
      setErr('Invalid Account');
    });
  }
  
  let handleForgatePass = () =>{
      setForgateModel(true)
  }
  let handleUpdatePassword = () =>{
       sendPasswordResetEmail(auth, updatePasswordMail)
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
  });
  }

  return (
    <section className='pt-[50px] lg:pt-[110px] mx-2 lg-mx-0'>
      <Container>
        <div className=''>
            <h2 className='font-dm font-bold text-[30px] lg:text-[49px] text-[#262626] pb-[15px]'>Login</h2>
            <span className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[36px] text-[#222]'><Link to="/">Home</Link> / login</span>
        </div>
        <div className='pt-[70px] lg:pt-[120px]'>
            <p className='lg:w-[40%] font-dm font-normal text-[14px] lg:text-[16px] text-[#767676] leading-6 lg:leading-8 pb-[30px] lg:pb-[62px]' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div> <hr />
        <div className='w-[80%] pt-[40px] lg:pt-[57px] pb-[50px] lg:pb-0'>
           <h2 className='font-dm font-bold text-[25px] lg:text-[39px] text-[#262626] pb-[42px]'>Returning Customer</h2>
            <form className=' lg:pb-[70px]' action="">
              <div className='flex justify-between flex-wrap '>
                 <div className='w-[100%] lg:w-[45%]  pb-[20px] lg:pb-0'>
                    <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]' htmlFor="">Email address</label> <br /> 
                    <input onChange={handleEmail} className=' py-2 px-2 font-dm font-normal text-[12px] lg:text-[14px] placeholder:text-[#767676] w-full outline-2 outline-cyan-200' type="email" placeholder='company@domain.com'/> <hr />
                 </div>
                 
                 <div className='w-[100%] lg:w-[45%]  pb-[20px] lg:pb-0'>
                 <label className='font-dm font-bold text-[14px] lg:text-[16px] line-height:[23px] text-[#262626]' htmlFor="">Password</label> <br /> 
                 <input onChange={handlePassworrd} className=' py-2 px-2 font-dm font-normal  text-[12px] lg:text-[14px] placeholder:text-[#767676] w-full outline-2 outline-cyan-200' type="password" placeholder='Enter Your Password'/> <hr />
                 </div>
              </div> 
              <div>
                {err && 
                   <p className='text-red-500 font-dm font-semibold text-[16px]'>{err}</p>
                }
                 </div>
                 <div className='mt-6 w-[15%]'>
                   <h2 onClick={handleForgatePass} className='font-dm font-medium text-[18px] text-[#1f5d2c] cursor-pointer'>Forgotten password?</h2>
                 </div>
              <div className='pt-[20px] lg:pt-[40px]'>
                 <Link onClick={handleLogin} className='py-2 px-14 font-dm font-bold text-[14px] text-[#262626] border-[#2B2B2B] border-2 rounded-md hover:bg-[#262626] hover:text-[#ffff] duration-300' href="#">Log in</Link>
              </div>
            </form>
        </div> <hr />
        {ForgateModel &&
          <div className='absolute top-20 mx-auto left-2/4 translate-x-[-50%] h-[300px] w-[600px] bg-[#808080] p-10 '>
               <input onChange={(e)=>setUpdatePasswordMail(e.target.value)} type="email" name="email" id="email" className= " bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-0 block w-full h-[50px]" placeholder="name@company.com" required="true"/>
            <Link onClick={handleUpdatePassword} className='mt-10 text-center py-2 px-14 font-dm font-bold text-[14px] text-[white] hover:text-[#262626] border-[#ffff] hover:border-[#262626] border-2 rounded-md hover:bg-gray-300 duration-300 inline-block' href="#">Update Password</Link>
               
           </div>
        }
      </Container>
    </section>
  )
}

export default Loginform