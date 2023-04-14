import React, { useContext } from 'react'
import { Data } from '../constants/utils'
import { FavoriteContext } from '../context/Favorite'
import { FavoriteItems } from '../components'

const Favorite = () => {
    const { favorite } = useContext(FavoriteContext)
    return (
        <div>
            <h1 className='font-bold'>Your Favorites</h1>
            <small className='mt-2'>List of places you favored</small>


            {Data?.length > 0 ? (
                <div className='lg:grid-cols-4 grid xs:grid-cols-2 sm:grid-col-3 grid-cols-2 gap-3 mt-10'>
                    {Data.map((datax) => {
                        if (favorite[datax.id] !== 0) {
                            return (
                                <FavoriteItems key={datax.id} {...datax} />
                            )
                        }
                    })}
                </div>
            ) : (
                <h1>No Favorites Added!</h1>
            )}

        </div>

    )
}

export default Favorite