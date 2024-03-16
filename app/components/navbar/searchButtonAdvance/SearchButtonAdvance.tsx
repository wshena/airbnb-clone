'use client';
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const LocationThumbnail = ({label}:{label:string}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-[100px] h-[100px] rounded-[10px]">
        <img className="rounded-[10px] w-[100%] h-[100%]" alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" />
      </div>
      <h2>{label}</h2>
    </div>
  )
}

const LocationButton = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }

  return (
    <div className="relative">
      <button onClick={handleClick} className={`md:w-[90%] lg:w-fit flex flex-col md:p-[15px] lg:py-[15px] lg:px-[20px] rounded-[30px] hover:bg-gray-300 ${isClick ? 'shadow-2xl bg-white hover:bg-white' : ''}`}>
        <span className='font-bold'>Lokasi</span>
        <input type="text" name="lokasi" id="lokasi" placeholder='Cari destinasi' autoComplete='false' className='focus:outline-none bg-transparent text-[1rem]'/>
      </button>

      {
        isClick && (
          <div className="absolute top-[90px] left-0 w-[170%] bg-white text-black rounded-[20px] shadow-2xl p-[20px] text-start">
            <h1 className='font-bold text-[1rem] mb-[10px]'>Cari bedasarkan wilayah</h1>
            <div className="grid grid-cols-3 gap-[10px]">
              <LocationThumbnail label={'Fleksible'} />
              <LocationThumbnail label={'Amerika'} />
              <LocationThumbnail label={'Eropa'} />
              <LocationThumbnail label={'Asia'} />
              <LocationThumbnail label={'Australia'} />
              <LocationThumbnail label={'Jepang'} />
            </div>
          </div>
        )
      }
    </div>
  )
}

const GuestButton = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }

  const [countDewasa, setCountDewasa] = useState(0);
  const handleIncrementDewasaCount = () => {
    setCountDewasa(prev => prev + 1);
  }
  const handleDecrementDewasaCount = (count:number) => {
    if (count === 0) {
      setCountDewasa(0);
    } else {
      setCountDewasa(count - 1);
    }
  }

  const [countAnak, setCountAnak] = useState(0);
  const handleIncrementAnakCount = () => {
    setCountAnak(prev => prev + 1);
  }
  const handleDecrementAnakCount = (count:number) => {
    if (count === 0) {
      setCountAnak(0);
    } else {
      setCountAnak(count - 1);
    }
  }

  const [countBalita, setCountBalita] = useState(0);
  const handleIncrementBalitaCount = () => {
    if (countBalita == 0 || countBalita < 5) {
      setCountBalita(prev => prev + 1);
    }
  }
  const handleDecrementBalitaCount = (count:number) => {
    if (count === 0) {
      setCountBalita(0);
    } else {
      setCountBalita(count - 1);
    }
  }

  const handleCancle = () => {
    setCountDewasa(0);
    setCountAnak(0);
    setCountBalita(0);
  }

  return (
    <div className="relative">
      <button onClick={handleClick} className={`w-[300px] flex justify-between items-center py-[15px] px-[20px] rounded-[30px] hover:bg-gray-300 ${isClick ? 'shadow-2xl bg-white hover:bg-white' : ''}`}>
        {
          countDewasa === 0 && countAnak === 0 && countBalita === 0 ? (
            <div className="flex flex-col items-start">
              <span className='font-bold'>Peserta</span>
              <span className='text-[1rem]'>Tambahkan tamu</span>
            </div>
          ) : (
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex flex-col items-start">
                <span className='font-bold'>Peserta</span>
                <span className='text-[1rem]'>{countDewasa + countAnak} tamu, {countBalita} bayi</span>
              </div>
              <button onClick={handleCancle} className='z-30'> <IoClose size={25}/> </button>
            </div>
          )
        }
        
        <div className="bg-red-500 p-[10px] rounded-full ml-[15px] flex items-center gap-[5px]">
          <IoSearch color='white' size={20}/>
          {
            isClick && (
              <span className='text-white font-bold text-[1rem]'>Cari</span>
            )
          }
        </div>
      </button>

      {
        isClick && (
          <div className="absolute top-[90px] right-0 w-[150%] bg-white text-black rounded-[20px] shadow-2xl p-[20px] text-start">
            <div className="flex items-center justify-between pb-[15px] border-b">
              <div className="flex flex-col">
                <h3 className='font-bold text-[15px]'>Dewasa</h3>
                <span>Usia 13 tahun ke atas</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <button onClick={() => handleDecrementDewasaCount(countDewasa)} className={`${countDewasa === 0 ? 'opacity-20 hover:cursor-not-allowed' : ''}`}> <CiCircleMinus size={30}/> </button>
                <span className='text-[1.4rem]'>{countDewasa}</span>
                <button onClick={handleIncrementDewasaCount}> <CiCirclePlus size={30}/> </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-[15px] border-b">
              <div className="flex flex-col">
                <h3 className='font-bold text-[15px]'>Anak-anak</h3>
                <span>Usia 2 - 12 tahun</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <button onClick={() => handleDecrementAnakCount(countAnak)} className={`${countAnak === 0 ? 'opacity-20 hover:cursor-not-allowed' : ''}`}> <CiCircleMinus size={30}/> </button>
                <span className='text-[1.4rem]'>{countAnak}</span>
                <button onClick={handleIncrementAnakCount}> <CiCirclePlus size={30}/> </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-[15px] border-b">
              <div className="flex flex-col">
                <h3 className='font-bold text-[15px]'>Balita</h3>
                <span>Di bawah 2 tahun</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <button onClick={() => handleDecrementBalitaCount(countBalita)} className={`${countBalita === 0 ? 'opacity-20 hover:cursor-not-allowed' : ''}`}> <CiCircleMinus size={30}/> </button>
                <span className='text-[1.4rem]'>{countBalita}</span>
                <button onClick={handleIncrementBalitaCount}> <CiCirclePlus size={30}/> </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

const CheckButton = ({ label }:{label:string}) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }
  return (
    <button onClick={handleClick} className={`flex flex-col md:p-[15px] lg:py-[15px] lg:px-[20px] rounded-[30px] hover:bg-gray-300 ${isClick ? 'shadow-2xl bg-white hover:bg-white' : ''}`}>
      <span className='font-bold'>{label}</span>
      <span className='hidden lg:block text-[1rem]'>Tambahkan...</span>
      <span className='block lg:hidden text-[.8rem]'>Tambah...</span>
    </button>
  )
}

const SearchButtonAdvance = () => {
  return (
    <button className="mt-[100px] absolute flex gap-0 items-center border rounded-[30px] text-[14px] bg-gray-200 shadow-2xl w-fit z-50">
			<LocationButton />
			<span className="hidden lg:block w-[1px] h-[20px] bg-gray-400 mx-[15px]"></span>
			<CheckButton label={'Check in'} />
      <span className="hidden lg:block w-[1px] h-[20px] bg-gray-400 mx-[15px]"></span>
      <CheckButton label={'Check out'} />
			<span className="hidden lg:block w-[1px] h-[20px] bg-gray-400 mx-[15px]"></span>
			<GuestButton />
		</button>
  )
}

export default SearchButtonAdvance