import React,{useState} from 'react'
import { Data } from '../constants/utils'
import { Card, Icons } from '../components'
import { AiOutlineHome } from 'react-icons/ai'



const Home = () => {
    
    return (
        <div>
            <div className='mt-[-35px]'>
                <Icons />
            </div>

            <div className=' mt-10 sm:mt-0'>
                {Data?.length > 0 ? (
                    <div className='data'>
                        {
                            Data.map((datax) => (
                                <Card key={datax.id} {...datax} />
                            ))
                        }
                    </div>
                ) : (
                    'No Result'
                )}





            </div>
        </div>
    )
}

export default Home