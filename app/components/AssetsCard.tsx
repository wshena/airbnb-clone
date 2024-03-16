'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { FaStar, FaHeart } from "react-icons/fa";

const CarouselBar = ({limit, numberId}:{limit:number, numberId:number}) => {
  const spanCount = limit;
  const spans = [];

  for (let i = 1; i <= spanCount; i++) {
    spans.push(<span key={i} className={`block w-[20px] h-[2px] ${numberId === i ? 'bg-white' : 'bg-gray-400'}`}></span>);
  }

  return <div className='absolute bottom-[15px] w-[100%] px-[20px]'>
    <div className="flex items-center justify-between">
      {spans}
    </div>
  </div>;
}

const AssetsCard = () => {
  const [number, setNumber] = useState(0);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [favourite, setFavourite] = useState(true);

  const handleFavourite = () => {
    setFavourite(!favourite)
  }

  const incrementNumber = () => {
    setNumber(prev => (prev + 1) % Images.length);
  }
  
  const decrementNumber = () => {
    setNumber(prev => (prev - 1 + Images.length) % Images.length);
  }

  const handleMouseEnter = () => {
    setMouseEnter(true);
  }
  const handleMouseLeave = () => {
    setMouseEnter(false);
  }

  useEffect(() => {
    handleMouseEnter(),
    handleMouseLeave(),
    handleFavourite()
  }, [])
  

  const Images = [
    {id: 1, alt: 'images 1', imagePath: '/download.jpg'},
    {id: 2, alt: 'images 2', imagePath: '/download (1).jpg'},
    {id: 3, alt: 'images 3', imagePath: '/download (2).jpg'},
    {id: 4, alt: 'images 4', imagePath: '/download (3).jpg'},
    {id: 5, alt: 'images 5', imagePath: '/download (4).jpg'},
    {id: 6, alt: 'images 6', imagePath: '/download (5).jpg'},
    {id: 7, alt: 'images 7', imagePath: '/download (6).jpg'},
    {id: 8, alt: 'images 8', imagePath: '/download (7).jpg'}
  ];

  return (
    <div className="flex flex-col gap-[10px] w-[280px] md:w-[300px]">
      <div className='w-[100%] h-[300px] hover:cursor-pointer rounded-[20px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative w-[100%] h-[100%] flex items-center justify-center rounded-[20px]">
          <img src={`${Images[number].imagePath}`} alt={`${Images[number].alt}`} className='w-[100%] h-[100%] absolute top-0 left-0 rounded-[20px]'/>
          <div className="absolute top-[20px] right-[20px]">
            <button onClick={handleFavourite}> <FaHeart color={`${favourite === true ? 'red' : 'gray'}`} size={24}/> </button>
          </div>
          
          <CarouselBar limit={Images.length} numberId={number + 1}/>
          
          <div className={`${mouseEnter === true ? 'visible' : 'hidden'} absolute p-[20px] flex items-center justify-between w-[100%]`}>
            <button onClick={decrementNumber} className={`${number === 0 ? 'invisible' : 'visible'}`}> <IoIosArrowDropleftCircle color='white' size={30}/> </button>
            <button onClick={incrementNumber} className={`${number === Images.length - 1 ? 'invisible' : 'visible'}`}> <IoIosArrowDroprightCircle color='white' size={30}/> </button>
          </div>
        </div>
      </div>

      <div className="text-[1rem]">
        <div className="flex items-center justify-between">
          <h1 className='font-bold'>Serijit, Indonesia</h1>
          <span className='flex items-center gap-[5px]'> <FaStar /> 5.0 </span>
        </div>
        <div className="text-gray-500">
          <p>Berjarak 1.907 kilometer</p>
          <p>1 - 6 Maret</p>
        </div>
        <span className='flex items-center gap-[5px]'>
          <p className='font-bold'>Rp2.125.310</p>
          <p>malam</p>
        </span>
      </div>
    </div>
  )
}

export default AssetsCard