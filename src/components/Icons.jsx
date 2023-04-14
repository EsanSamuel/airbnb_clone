import React from 'react'
import { TbBeach } from 'react-icons/tb'
import { BsSnow } from 'react-icons/bs'
import { FaSnowboarding, FaHotel, FaSwimmingPool } from 'react-icons/fa'
import { GiCastle, GiIsland, GiIndianPalace, GiForest } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import { AiOutlineFire } from 'react-icons/ai'

const Icons = () => {
  return (
    <div>
      <div className='flex justify-between py-10 px-5  text-[30px] sm:flex hidden text-[#6a6c6d]'>
        <div> <TbBeach /> <label className='text-[12px]'>Beach</label></div>
        <div><BsSnow /><label className='text-[12px]'>Cold</label> </div>
        <div><FaSnowboarding /><label className='text-[12px]'>Boarding</label> </div>
        <div><GiCastle /><label className='text-[12px]'>Castle</label> </div>
        <div><GiIsland /><label className='text-[12px]'>Island</label></div>
        <div><FaHotel /><label className='text-[12px]'>Hotel</label></div>
        <div><FaSwimmingPool /><label className='text-[12px]'>Pool</label></div>
        <div><BiBed /><label className='text-[12px]'>Bedroom</label></div>
        <div><GiIndianPalace /><label className='text-[12px]'>Palace</label></div>
        <div><AiOutlineFire /><label className='text-[12px]'>Trending</label></div>
        <div><GiForest /><label className='text-[12px]'>Forest</label></div>

      </div>

      <div className='flex justify-between py-10 px-5  overflow-auto gap-4 text-[30px] sm:hidden text-[#6a6c6d]'>
        <div> <TbBeach /> <label className='text-[12px]'>Beach</label></div>
        <div><BsSnow /><label className='text-[12px]'>Cold</label> </div>
        <div><FaSnowboarding /><label className='text-[12px]'>Boarding</label> </div>
        <div><GiCastle /><label className='text-[12px]'>Castle</label> </div>
        <div><GiIsland /><label className='text-[12px]'>Island</label></div>
        <div><FaHotel /><label className='text-[12px]'>Hotel</label></div>
        <div><FaSwimmingPool /><label className='text-[12px]'>Pool</label></div>
        <div><BiBed /><label className='text-[12px]'>Bedroom</label></div>
        <div><GiIndianPalace /><label className='text-[12px]'>Palace</label></div>
        <div><AiOutlineFire /><label className='text-[12px]'>Trending</label></div>
        <div><GiForest /><label className='text-[12px]'>Forest</label></div>

      </div>



    </div>
  )
}

export default Icons