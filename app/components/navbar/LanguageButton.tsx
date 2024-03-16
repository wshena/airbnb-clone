'use client'
import { curencyChoices, languageChoices } from '@/app/consts';
import React, { useState } from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LanguageButton = () => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick)
	}

	const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
		<>
			<button onClick={handleClick} className='relative rounded-full p-[10px] hover:bg-gray-200'>
				<CiGlobe size={20}/>
			</button>

			{
				isClick && (
					<div className="absolute top-0 left-0 w-[100vw] h-[100vh] z-50 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="overflow-y-auto md:h-[80%] lg:h-[500px] w-[80%] bg-white p-[20px] rounded-[10px] shadow-xl">
							<button onClick={handleClick}> <IoClose size={24}/> </button>
							
							<Box sx={{ width: '100%' }}>
								<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
									<Tabs value={value} onChange={handleChange} aria-label="tabs">
										<Tab label="Bahasa dan wilayah" className='text-black capitalize' {...a11yProps(0)}/>
										<Tab label="Mata uang" className='text-black capitalize' {...a11yProps(1)} />
									</Tabs>
								</Box>
								<CustomTabPanel value={value} index={0}>
									<BahasaDanWilayah />
								</CustomTabPanel>
								<CustomTabPanel value={value} index={1}>
									<MataUang />
								</CustomTabPanel>
							</Box>							
						</div>
					</div>
				)
			}
		</>
  )
}

const BahasaDanWilayah = () => {
	return (
		<div className="">
			<div className="mb-[30px]">
				<h1 className='text-[1.5rem] mb-[20px]'>Bahasa dan wilayah yang disarankan</h1>
				<div className="flex items-center gap-[20px]">
					<button className='flex flex-col py-[10px] px-[10px] hover:bg-gray-100 w-[200px]'>
						<span className='text-[15px]'>English</span>
						<span className='text-[15px] text-gray-500'>United States</span>
					</button>
					<button className='flex flex-col py-[10px] px-[10px] hover:bg-gray-100 w-[200px]'>
						<span className='text-[15px]'>English</span>
						<span className='text-[15px] text-gray-500'>United Kingodm</span>
					</button>
				</div>
			</div>

			<div className="">
				<h1 className='text-[1.5rem] mb-[20px]'>Pilih bahasa dan wilayah</h1>
				<div className="grid grid-cols-5 gap-[15px]">
					{
						languageChoices.map((item, idx) => {
							return (
								<button key={idx} className='text-start text-[15px] flex flex-col p-[10px] hover:bg-gray-100 rounded-[5px]'>
									<span>{item.title}</span>
									<span className='text-gray-400'>{item.label}</span>
								</button>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

const MataUang = () => {
	return (
		<div className="mb-[30px]">
			<h1 className='text-[1.5rem] mb-[20px]'>Pilih mata uang</h1>
			<div className="grid grid-cols-5 gap-[15px]">
				{
					curencyChoices.map((item, idx) => {
						return (
							<button key={idx} className='text-start text-[15px] flex flex-col p-[10px] hover:bg-gray-100 rounded-[5px]'>
								<span>{item.title}</span>
								<span className='text-gray-400'>{item.label}</span>
							</button>
						)
					})
				}
			</div>
		</div>
	)
}

export default LanguageButton