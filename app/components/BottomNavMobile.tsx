'use client'
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const BottomNav = ({label, icon, isClick}:{label:string,icon:JSX.Element}) => {
  return (
    <button onClick={isClick} className='flex flex-col gap-[5px] items-center bg-none text-black'>
      {icon}
      <span className='text-[12px]'>{label}</span>
    </button>
  )
}

const BottomNavMobile = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClick, setIsClick] = useState(false);
  
  const handleClick = () => setIsClick(!isClick);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 z-10 w-full border-t bg-white p-4 ${
          isVisible ? 'bottom-nav-enter bottom-nav-enter-active' : 'bottom-nav-exit bottom-nav-exit-active'
        } flex items-center justify-evenly px-[20px] py-[10px]`}
      >
        <BottomNav label='Telusuri' icon={<IoMdSearch color='black' size={24}/>} isClick={handleClick}/>
        <BottomNav label='Favorite' icon={<FaRegHeart color='black' size={24}/>} />
        <BottomNav label='Masuk' icon={<CgProfile color='black' size={24}/>} />
      </div>
    </>
  );
}

export default BottomNavMobile