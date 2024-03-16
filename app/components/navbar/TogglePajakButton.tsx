import React from 'react'
import { LuSettings2 } from "react-icons/lu";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Tampilkan total sebelum pajak' } };

const TogglePajakButton = () => {
  return (
    <button className='flex items-center gap-[5px] py-[5px] px-[10px] rounded-[10px] border'>
      <span className='lg:text-[14px] md:text-[13px]'>Tampilkan total sebelum pajak</span>
      <Switch {...label} />
    </button>
  )
}

export default TogglePajakButton