import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchButtonMobile = () => {
  return (
    <button className='w-[100%] flex gap-[10px] md:hidden items-center p-[10px] rounded-[50px] shadow-md border'>
      <IoSearch size={20}/>
      <div className="flex flex-col text-start">
        <h1 className='text-[.9rem]'>Ke mana saja</h1>
        <p className='text-gray-400 text-[.7rem]'>Minggu ma... Tambahkan...</p>
      </div>
    </button>
  )
}

export default SearchButtonMobile