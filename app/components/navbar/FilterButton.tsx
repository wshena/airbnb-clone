'use client';
import React, { useState } from 'react'
import { LuSettings2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { FaBuilding, FaHome } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { amenitas, opsiPemilihan } from '@/app/consts';
import Switch from '@mui/material/Switch';

const TipeTempat = () => {
  const [active, setActive] = useState(0);
  const buttonContent = [
    {
      sentence: 'Cari kamar, seluruh rumah, atau tempat apa saja',
      label: 'Tipe apa saja'
    },
    {
      sentence: 'Kamar di dalam rumah, serta akses ke ruang bersama.',
      label: 'Kamar'
    },
    {
      sentence: 'Seluruh rumah untuk Anda sendiri.',
      label: 'Seluruh rumah'
    }
  ]

  return (
    <div className="border-b">
      <h1 className='font-bold text-[1.4rem] mb-[10px]'>Tipe tempat</h1>
      <h3 className='text-gray-500 text-[15px]'>{buttonContent[active].sentence}</h3>
      <div className="p-[20px] flex items-center justify-center w-[100%]">
        <div className="flex items-center">
          {
            buttonContent.map((item, idx) => {
              return (
                <button key={idx} onClick={() => setActive(idx)} className={`p-[15px] font-bold ${active === idx ? 'text-white bg-black' : 'text-black bg-white'} border w-[200px] hover:border-black text-[18px]`}>{item.label}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const KamarTempatTidur = () => {
  
  const QuantityButton = ({label}:{label:string}) => {
    const [active, setActive] = useState(0);
    const buttonLabel = ['Bebas','1','2','3','4','5','6','7','8+']

    return (
      <div className="pb-[15px]">
        <h3 className='text-gray-700 text-[1.1rem] mb-[10px]'>{label}</h3>
        <div className="flex items-center gap-[10px]">
          {buttonLabel.map((item, idx) => {
            return (
              <button key={idx} onClick={() => setActive(idx)} className={`p-[10px] text-[14px] min-w-[60px] max-w-[100px] border font-bold rounded-[20px] ${active === idx ? 'text-white bg-black' : 'text-black bg-white'}`}>{item}</button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-[10px] border-b pb-[15px]">
      <h1 className='font-bold text-[1.4rem] mb-[10px]'>Kamar tidur dan tempat tidur</h1>
      <QuantityButton label='Kamar tidur'/>
      <QuantityButton label='Tempat tidur'/>
      <QuantityButton label='Kamar mandi'/>
    </div>
  )
}

const TipeProperty = () => {
  
  const Button = ({icon, label}:{icon:JSX.Element, label:string}) => {
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => setIsClick(!isClick);
    return (
      <button onClick={handleClick} className={`p-[20px] border rounded-[15px] flex flex-col items-start gap-10 w-[150px] hover:border-black transition-transform scale-100 duration-500 ease-in-out ${isClick ? 'border-black bg-gray-100 scale-80' : ''}`}>
        {icon}
        <p>
          <strong>{label}</strong>
        </p>
      </button>
    )
  }

  return (
    <div className="py-[20px] border-b">
      <h1 className='font-bold text-[1.4rem] mb-[20px]'>Tipe properti</h1>
      <div className="flex items-center justify-between">
        <Button icon={<FaHouse size={25}/>} label='Rumah' />
        <Button icon={<FaBuilding size={25}/>} label='Apartement' />
        <Button icon={<HiOutlineBuildingOffice2 size={25}/>} label='Hotel' />
        <Button icon={<FaHome size={25}/>} label='Guesthouse' />
      </div>
    </div>
  )
}

const Amenitas = () => {
  return (
    <div className="py-[20px] border-b">
      <h1 className='font-bold text-[1.4rem] mb-[20px]'>Amenitas</h1>
      <div className="flex flex-col gap-10 items-start">
        {
          amenitas.map((item, idx) => {
            return (
              <div className="flex flex-col gap-[10px]" key={idx}>
                <h3 className='font-bold text-[15px]'>{item.title}</h3>
                <div className="grid grid-cols-2 gap-y-[20px] gap-x-[50px]">
                  {
                    item.item.map((fitur, idx) => {
                      return (
                        <div className="flex gap-[20px] text-gray-700" key={idx}>
                          <input type="checkbox" name={`${fitur}`} id={`${idx}`} className={'scale-[200%] border p-[5px]'}/>
                          <label htmlFor={`${fitur}`}>{fitur}</label>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const OpsiPemesanan = () => {
  const label = { inputProps: { 'aria-label': 'toggle' } };
  const Opsi = () => {
    return (
      <div className="w-[100%]">
        {
          opsiPemilihan.map((item, idx) => {
            return (
              <div className="flex items-center justify-between mb-[20px]" key={idx}>
              <div className="flex flex-col gap-[7px]">
                <h2 className='text-[1.1rem]'>{item.title}</h2>
                <p className='text-gray-600'>{item.desc}</p>
                </div>
                <Switch {...label} />
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div className="py-[20px]">
      <h1 className='font-bold text-[1.4rem] mb-[20px]'>Opsi pemesanan</h1>
      <Opsi />
    </div>
  )
}

const FilterButton = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }

  return (
    <>
    <button onClick={handleClick} className='hidden md:flex items-center py-[10px] px-[15px] border rounded-[10px] gap-[5px]'>
      <LuSettings2 />
      <span>filter</span>
    </button>

    {
      isClick && (
        <div className="z-50 absolute top-0 left-0 w-[100%] h-[100vh] flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-[80%] rounded-[20px] border text-black">
            <div className="fixed flex items-center text-center border-b pb-[15px] p-[20px] z-20 bg-white rounded-t-[20px] w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
              <button onClick={handleClick}> <IoClose size={25}/> </button>
              <h1 className='w-[100%] block text-[18px] font-bold'>filter</h1>
            </div>

            <div className="mt-[70px] flex flex-col gap-[20px] z-10 h-[70%] overflow-y-scroll px-[20px] pb-[10px]">
              <TipeTempat />
              <KamarTempatTidur />
              <TipeProperty />
              <Amenitas />
              <OpsiPemesanan />
            </div>

            <div className="border-t bg-white z-20 flex justify-between items-center p-[20px] rounded-b-[20px]">
              <button className='text-[15px]'>Hapus semua</button>
              <button className='text-[15px] text-white font-bold bg-black py-[10px] px-[15px] rounded-[10px]'>Tampilan 785 tempat</button>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default FilterButton