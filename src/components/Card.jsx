import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { FavoriteContext } from '../context/Favorite'


const Card = ({ id, image, title, distance, amount ,detail}) => {
    const { addToFavorite } = useContext(FavoriteContext);
   
    return (
        <div className='mt-5 card'>
            <Link to={`/detail/${detail}/${title}/${distance}/${amount}/`} >
                <img src={image} className='rounded-[10px] w-full sm:h-[220px] h-[300px]' /> </Link>
            <AiOutlineHeart className='float-right mr-4 mt-5 text-[20px] hover:text-[#ff5a5f]' onClick={() => addToFavorite(id)} />

            <div className='mt-[10px]'>
                <h1 className='text-[15px]'>{title}</h1>
                <h3 className='text-[#aaaaaa] text-[13px] mt-[10px]'>{distance}</h3>
                <h6 className='mt-[10px]'>{amount}</h6>
            </div>


        </div>
    )
}

export default Card