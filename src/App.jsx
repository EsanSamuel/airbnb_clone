import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Icons, FormField, Button } from './components'
import { Home, Details, Favorite } from './page'
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FavoriteProvider } from './context/Favorite'


const App = () => {
  const [signin, setSignin] = useState(false)

  useEffect(() => {
    setInterval(() => {
      <signin />
    }, 3000)
  }, [])

  const handleSubmit = () => {

  }


  return (
    <BrowserRouter>
      <div className=''>

        <div className='flex justify-between border p-5 w-full'>
          <Navbar handleSignin={setSignin} />
        </div>

        {/*<div>
          <Icons />
        </div>*/}


        <div className=' p-5 sm:px-[300px] w-full absolute bg-none  h-auto  flex justify-center'>
          {signin && (

            <div className='bg-[white] w-[100%]  p-10 h-auto mt-[0%] border'>
              <AiOutlineClose className='float-right ' onClick={() => setSignin(false)} />
              <h3 className='text-center'>Register</h3>
              <h1 className='mt-5'>Welcome to Airbnb</h1>
              <small className='mt-[10px] text-[#aaaaaa]'>Create an account</small>
              <FormField
                placeholder='Email'

              />

              <FormField
                placeholder='Name'

              />

              <FormField
                placeholder='Password'
                inputType='password'

              />


              <Button
                title='Sign In'
                styles='w-full rounded mt-10 h-[70px] border bg-[#ff5a5f] text-white'
                handleSubmit={handleSubmit}
              />

              <div>
                <AiOutlineGithub className='w-[30px] h-full mt-[-363px] ml-5 absolute hover:bg-[#ff5a5f]' />
                <Button
                  title='Sign In with github'
                  styles='w-full rounded mt-10 h-[70px] border border-[#ff5a5f] '
                />
              </div>

              <div>
                <FcGoogle className='w-[30px] h-full mt-[-360px] ml-5 absolute hover:bg-[#ff5a5f]' />
                <Button
                  title='Sign In with google'
                  styles='w-full rounded mt-10 h-[70px] border border-[#ff5a5f] '
                />
              </div>

            </div>
          )}
        </div>



        <div className='p-5 sm:p-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:title/:distance/:amount/:detail' element={<Details />} />
            <Route path='/favorite' element={<Favorite />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App