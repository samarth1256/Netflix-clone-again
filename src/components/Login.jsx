import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
const Login = () => {

    const [isSgnIn,setIsSignIn]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)

    const handleToggle=()=>{
        setIsSignIn(!isSgnIn)
    }
const handleButtonClick=()=>{
    const message=checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message)
}

  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='BG'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='rounded-lg absolute p-12 bg-black my-36 mx-auto w-4/12 right-0 left-0 text-white bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSgnIn?"Sign In":"Sign up"}</h1>
    {!isSgnIn&& <input className='p-4 my-4 w-full bg-gray-700' type='text' placeholder='Full name'></input>}
        <input ref={email} className='p-4 my-4 w-full bg-gray-700' type='text' placeholder='Email address'></input>
        <input ref={password} className='p-4 my-4 w-full bg-gray-700' type='password' placeholder='Password'/>
        <p className='font-bold text-red-500 py-2'>{errorMessage}</p>
        <button onClick={handleButtonClick} className='rounded-lg w-full py-4 my-4 bg-red-700'>{isSgnIn?"Sign in":"Sign up"}</button>
        <p className='cursor-pointer' onClick={handleToggle}>Already registered?Sign In Now.</p>
    </form>
      
    </div>
  )
}

export default Login
