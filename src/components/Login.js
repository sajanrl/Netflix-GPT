import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg'
                alt='bg'
            />
        </div>
        <form className='absolute w-3/12 my-36 mx-auto left-0 right-0 p-12 text-white bg-black bg-opacity-80'>
            <h1 className='py-4 font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm && <input className=' p-4 my-4 bg-gray-700 w-full ' type='text' placeholder='Full Name'/> }
            <input className=' p-4 my-4 bg-gray-700 w-full ' type='text' placeholder='Email or mobile number'/>
            <input className='p-4 my-4 bg-gray-700 w-full' type='text' placeholder='Password'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p  className="py-4 cursor-pointer" onClick={toggleSignInForm}>  {isSignInForm ? "New to Netflix? Sign Up now" : "already registered? Sign In now"} </p>
        </form>
    </div>

  )
}

export default Login