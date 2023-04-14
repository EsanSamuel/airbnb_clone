import React, { useState } from 'react'
import { Data } from '../constants/utils'
import { Card2, Button } from '../components'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id, title, image, distance, amount, detail } = useParams()
    const [counter, setCounter] = useState(1)
    return (
        <div className='sm:p-[150px] p-[10px]'>
            <img src={image} />
            <div className='sm:mt-[20%] mt-[40%]'>
                <h1 className=' '>{id}</h1>
                <h1 className=' p-5 border rounded'>{title}</h1>
                <div className=' border p-2 mt-4 flex justify-between'>
                    <h1 className=' mt-10'><span className='font-bold'>Location  :</span>   {distance}</h1>
                    <h1 className='mt-10'><span className='font-bold'>Distance  :</span>   {amount}</h1>
                </div>
                <div className=' border p-2 mt-4 flex justify-between'>
                    <h1 className='mt-4'><span className='font-bold'>Amount  :</span>   {detail}/night</h1>

                    <h1 className='p-4'><span className='cursor-pointer sm:mr-10 border px-3 mr-2 ' onClick={() => setCounter(counter - 1)}>-</span>{counter}<span className='cursor-pointer sm:ml-10 ml-2 border px-3' onClick={() => setCounter(counter + 1)}>+</span></h1>
                </div>
            </div>
            <Button
                title='Reserve'
                styles='bg-[#ff5a5f] w-full text-white p-2 rounded mt-20 hover:bg-white border border-[#ff5a5f] hover:text-black'

            />
        </div>
    )
}

export default Details