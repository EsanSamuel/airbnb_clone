import React, { useContext } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FavoriteContext } from '../context/Favorite'
import { Link } from 'react-router-dom'

const FavoriteItems = ({ id, detail, image, title, distance, amount }) => {
  const { removeFavorite } = useContext(FavoriteContext)
  return (
    <div className='mt-5'>
      <Link to={`/detail/${detail}/${title}/${distance}/${amount}/`} >
        <img src={image} className='rounded-[10px] w-full sm:h-[220px] h-[150px]' /></Link>
      <AiOutlineHeart className='text-[#ff5a5f] float-right mr-4 mt-5 text-[20px] hover:text-[#ff5a5f]' onClick={() => removeFavorite(id)} />

      <div className='mt-[10px]'>
        <h1 className='text-[15px]'>{title}</h1>
        <h3 className='text-[#aaaaaa] text-[13px] mt-[10px]'>{distance}</h3>
        <h6 className='mt-[10px]'>{amount}</h6>
      </div>
    </div>
  )
}

export default FavoriteItems