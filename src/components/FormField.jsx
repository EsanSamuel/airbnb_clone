import React from 'react'
import { Button } from './'

const FormField = ({ placeholder, inputType }) => {
    return (
        <div>
            <input
                placeholder={placeholder}
                className='w-full  h-[70px] mt-10 border p-5 outline-black'
                type={inputType}
            />

        </div>
    )
}

export default FormField