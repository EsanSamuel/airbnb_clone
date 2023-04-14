import React, { useState } from 'react'
import { FaAirbnb } from 'react-icons/fa'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsPersonCircle, BsGlobe } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Data } from '../constants/utils'
import {Card} from './'

const Input = ({ placeholder, handleChange }) => (
    <input
        placeholder={placeholder}
        className='outline-none rounded-[100px] h-[30px] w-[220px] px-[10px] placeholder:text-[13px]'
        onChange={handleChange}
    />

)

const Navbar = ({ handleSignin }) => {
    const [navbar, setNavbar] = useState(false)
    const [search, setSearch] = useState('')

  

    return (
        <div className='flex justify-between w-full'>
            <Link to='/'><div className='text-[#ff5a5f] flex sm:flex hidden text-[20px] font-bold'><FaAirbnb className='text-[30px] text-[#ff5a5f] font-bold' />airbnb</div></Link>
            <div className='flex border rounded-[100px]'>
                <Input placeholder='Search Airbnb' handleChange={(e) => setSearch(e.target.value)} />
                <div className=' w-[30px] h-full rounded-[100px] bg-[#ff5a5f] flex justify-center items-center cursor-pointer text-white outline-none'>
                    <AiOutlineSearch className=' ' />
                </div>
            </div>

            <div className='sm:flex hidden flex'>
                <h1 className='mr-7 mt-1 flex'>Airbnb your home <BsGlobe className='text-[20px] ml-2' /></h1>
                <div className='p-2 border rounded-[100px] flex px-2'>
                    <div>
                        {!navbar && (
                            <AiOutlineMenu onClick={() => setNavbar(true)} />
                        )}
                    </div>
                    <div className='ml-4'><BsPersonCircle onClick={() => handleSignin(true)} /></div></div>
            </div>

            {navbar && (
                <div className='absolute border p-4 px-6 bg-white ml-[80%] mt-[40px] rounded-[10px] sm:flex hidden'>
                    <ul className='cursor-pointer'>

                        <AiOutlineClose onClick={() => setNavbar(false)} className='ml-[70px] mt-[-5px] hover:text-[#ff5a5f]' />
                        <Link to='/'><li>New</li></Link>
                        <li className='mt-[10px]'>Profile</li>
                        <Link to='/favorite'><li className='mt-[10px]'>Favorite</li></Link>
                        <li className='mt-[10px]' onClick={() => handleSignin(true)}>Sign up</li>
                        <li className='mt-[10px]'>Settings</li>

                    </ul>
                </div>
            )}

            {/*small screen navbar */}
            <div className='sm:hidden'>
                {!navbar && (
                    <AiOutlineMenu className='mt-2 ' onClick={() => setNavbar(true)} />
                )}

                {navbar && (
                    <div className='absolute border p-4 px-6 bg-white ml-[-30%] mt-[40px] rounded-[10px] sm:hidden'>
                        <ul className='cursor-pointer'>

                            <AiOutlineClose onClick={() => setNavbar(false)} className='ml-14 mt-[-10px]' />
                            <Link to='/'><li className='mt-[10px]'>New</li></Link>
                            <li className='mt-[10px]'>Profile</li>
                            <Link to='/favorite'><li className='mt-[10px]'>Favorite</li></Link>
                            <li className='mt-[10px]' onClick={() => handleSignin(true)}>Sign up</li>
                            <li className='mt-[10px]'>Settings</li>

                        </ul>
                    </div>
                )}
            </div>






        </div>
    )
}

export default Navbar