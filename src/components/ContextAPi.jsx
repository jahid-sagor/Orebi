import React, { useEffect, useState,then } from 'react'
import { createContext } from 'react'
import axios from 'axios';

let Apidata = createContext()


const ContextAPi = ({children}) => {
   
    let [info, setInfo] = useState([])
  
    useEffect(()=>{
        let getdata = () =>{
            axios.get("https://dummyjson.com/products").then((respone)=>{
                setInfo(respone.data.products);
            })
        }
        getdata()
     },[])


  return (
    <>
     <Apidata.Provider value={info}>
        {children}
     </Apidata.Provider>
    </>
  )
}

export  {ContextAPi,Apidata}