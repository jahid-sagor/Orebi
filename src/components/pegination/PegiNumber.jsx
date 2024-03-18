import React from 'react'
import { GrNext,GrPrevious  } from "react-icons/gr";


const PegiNumber = ({totalPage,perPage,paginate,next,prev,currentPage}) => {
    //  pegination number calculation start========================================
    let pageNumber = []
    for(let i = 0; i < Math.ceil(totalPage / perPage); i++){
       pageNumber.push(i)
    }
    //  pegination number calculation end===========================================
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10 pt-4 lg:pt-10">
           <li onClick={prev}>
              <a className="flex items-center justify-center px-2 lg:px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-300 hover:text-gray-700 cursor-pointer"><GrPrevious /></a>
           </li>
           {pageNumber.map((item,i)=>(
           <li  key={i} onClick={()=>paginate(item)} className={currentPage == i + 1 ? "flex items-center justify-center px-2 lg:px-4 h-10 leading-tight text-size-[12px] text-[black]  !bg-[rgba(181,178,178,0.73)] border border-gray-300  cursor-pointer overflow-auto"    :   "flex items-center justify-center px-2 lg:px-4 h-10 leading-tight text-gray-500  bg-white border border-gray-300 cursor-pointer"}>
              {item + 1}
           </li>
           ))}
           <li onClick={next}>
              <a className="flex items-center justify-center px-2 lg:px-4 h-10 leading-tight text-gray-500 bg-white  border border-gray-300 rounded-e-lg hover:bg-gray-300 hover:text-gray-700 cursor-pointer"><GrNext/></a>
           </li>
        </ul>
      </nav>
    </>
  )
}

export default PegiNumber