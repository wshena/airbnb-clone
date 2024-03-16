'use client';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import SearchButtonAdvance from './searchButtonAdvance/SearchButtonAdvance';

const SearchButton = () => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick);
	}

  return (
		<>
    <button onClick={handleClick} className="hidden md:flex items-center justify-between py-[10px] px-[10px] border rounded-[20px] text-[14px] hover:shadow-md md:w-[40%]">
			<span className='font-bold truncate'>Ke mana saja</span>
			<span className="block w-[1px] h-[20px] bg-gray-400 mx-[15px]"></span>
			<span className='font-bold truncate'>Minggu mana pun</span>
			<span className="block w-[1px] h-[20px] bg-gray-400 mx-[15px]"></span>
			<span className='opacity-70 truncate'>Tambahkan tamu</span>

			<div className="bg-red-500 p-[7px] rounded-full ml-[15px]">
				<IoSearch color='white' size={17}/>
			</div>
		</button>

		{
			isClick && (
				<div className="absolute top-0 left-0 w-screen h-screen flex justify-center z-50">
					<div className="relative w-[100%] h-[100%] bg-black bg-opacity-50" onClick={handleClick}></div>
					<SearchButtonAdvance />
				</div>
			)
		}
		</>
  )
}

export default SearchButton