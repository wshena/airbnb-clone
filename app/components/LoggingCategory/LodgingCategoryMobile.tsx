import React from 'react'
import { FaHome, FaBuilding, FaHotel, FaHouseUser, FaCampground, FaSwimmingPool, FaMountain, FaWater, FaSkiing, FaWarehouse, FaLandmark, FaUserSecret, FaBed, FaHiking, FaCaravan, FaShip, FaPlane, FaBus, FaTrain, FaTree, FaCity, FaSkating, FaUmbrellaBeach } from 'react-icons/fa';
import { MdCastle } from "react-icons/md";

interface LodgingType {
  name: string;
  icon: JSX.Element;
}

const lodgingTypes: LodgingType[] = [
  { name: 'Apartemen', icon: <FaBuilding size={24}/> },
  { name: 'Villa', icon: <FaHome size={24}/> },
  { name: 'Hotel', icon: <FaHotel size={24}/> },
  { name: 'Rumah', icon: <FaHouseUser size={24}/> },
  { name: 'Kemah', icon: <FaCampground size={24}/> },
  { name: 'Kolam Renang', icon: <FaSwimmingPool size={24}/> },
  { name: 'Resor Pegunungan', icon: <FaMountain size={24}/> },
  { name: 'Rumah Tepi Danau', icon: <FaWater size={24}/> },
  { name: 'Resor Ski', icon: <FaSkiing size={24}/> },
  { name: 'Gudang', icon: <FaWarehouse size={24}/> },
  { name: 'Kastil', icon: <MdCastle size={24}/> },
  { name: 'Istana', icon: <FaLandmark size={24}/> },
  { name: 'Asrama', icon: <FaUserSecret size={24}/> },
  { name: 'Penginapan', icon: <FaBed size={24}/> },
  { name: 'Hiking', icon: <FaHiking size={24}/> },
  { name: 'Karavan', icon: <FaCaravan size={24}/> },
  { name: 'Kapal', icon: <FaShip size={24}/> },
  { name: 'Pesawat', icon: <FaPlane size={24}/> },
  { name: 'Bus', icon: <FaBus size={24}/> },
  { name: 'Kereta', icon: <FaTrain size={24}/> },
  { name: 'Pohon', icon: <FaTree size={24}/> },
  { name: 'Kota', icon: <FaCity size={24}/> },
  { name: 'Skating', icon: <FaSkating size={24}/> }
];

const LodgingCategoryMobile = () => {
  const boxes: JSX.Element[] = [];
  lodgingTypes.map((item, idx) => {
    boxes.push(
      <button key={idx} className="p-[10px] flex flex-col items-center gap-[5px] text-[12px]">
        {item.icon}
        <span className='truncate'>{item.name}</span>
      </button>
    )
  })
  
  return (
    <div className='flex items-center gap-[10px] w-fit'>
      {boxes}
    </div>
  )
}

export default LodgingCategoryMobile