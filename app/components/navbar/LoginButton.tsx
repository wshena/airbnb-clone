'use client';
import React, { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const LoginButton = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }
  
  return (
    <>
      <button onClick={handleClick} className='relative flex items-center border ml-[10px] py-[10px] px-[15px] rounded-[30px] hover:shadow-lg'>
        <IoMdMenu size={24}/>
        <IoPersonCircleSharp size={30}/>
      </button>
      {
        isClick && (
          <div className="duration-300 transition-all absolute py-[10px] rounded-[10px] shadow-xl md:right-[60px] lg:right-[100px] top-[80px] -bottom-[90px] bg-white z-20 border flex flex-col w-[250px] h-[220px]">
            <a href="" className='p-[10px] hover:bg-gray-100'>Daftar</a>
            <a href="" className='p-[10px] hover:bg-gray-100'>Masuk</a>
            <span className="block w-[100%] h-[1px] bg-gray-300 my-[10px]"></span>
            <a href="" className='p-[10px] hover:bg-gray-100'>Jadikan rumah Anda Airbnb</a>
            <a href="" className='p-[10px] hover:bg-gray-100'>Pusat bantuan</a>
          </div>
        )
      }
    </>
  )
}

export default LoginButton