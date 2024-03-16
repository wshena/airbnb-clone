'use client';
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { footerTabs } from '@/app/consts';

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
        <Box sx={{ py: 2 }}>
          {children}
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

const TabContent = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
			{
				footerTabs.map((item, idx) => {
					return (
						<button key={idx} className='flex flex-col text-start'>
							<span className='font-bold'>{item.title}</span>
							<span className='text-gray-400 text-[0.8rem]'>{item.label}</span>
						</button>
					)
				})
			}
		</div>
	)
}

const FooterTabs = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
		<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="primary" indicatorColor="primary" variant="scrollable" scrollButtons="auto">
          <Tab label="populer" className='text-black capitalize' {...a11yProps(0)} />
          <Tab label="seni & budaya" className='text-black capitalize' {...a11yProps(1)} />
          <Tab label="alam terbuka" className='text-black capitalize' {...a11yProps(2)} />
					<Tab label="pegunungan" className='text-black capitalize' {...a11yProps(3)} />
					<Tab label="pantai" className='text-black capitalize' {...a11yProps(4)} />
					<Tab label="kategori" className='text-black capitalize' {...a11yProps(5)} />
					<Tab label="hal yang bisa dilakukan" className='text-black capitalize' {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
				<TabContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabContent />
      </CustomTabPanel>
			<CustomTabPanel value={value} index={3}>
        <TabContent />
      </CustomTabPanel>
			<CustomTabPanel value={value} index={4}>
        <TabContent />
      </CustomTabPanel>
			<CustomTabPanel value={value} index={5}>
        <TabContent />
      </CustomTabPanel>
			<CustomTabPanel value={value} index={6}>
        <TabContent />
      </CustomTabPanel>
    </Box>
  )
}

export default FooterTabs