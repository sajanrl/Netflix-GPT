import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null); 
    const password = useRef(null); 

    const handleButtonClick = () => {
        // console.log(email);
        // console.log(email.current.value);
        
        const message = checkValidateData(email.current.value, password.current.value);
        // console.log(message );
        setErrorMessage(message);

        if(message) return message;

        // SignIn or SignUp logic

        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR,
                  }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                        navigate("/browse");
                  }).catch((error) => {
                        setErrorMessage(error.message)
                  });
                
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
            });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed in 
                 const user = userCredential.user;
                //  console.log(user);
                 navigate("/browse");
                 
                // ...
            })
                .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 setErrorMessage(errorCode + "-" + errorMessage) 
            });
        }
        
    }

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
        <form className='absolute w-3/12 my-36 mx-auto left-0 right-0 p-12 text-white bg-black bg-opacity-80'
            onSubmit={(e) => e.preventDefault()}>
            <h1 className='py-4 font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm && <input ref={name} className=' p-4 my-4 bg-gray-700 w-full ' type='text' placeholder='Full Name'/> }
            <input ref={email} className=' p-4 my-4 bg-gray-700 w-full ' type='text' placeholder='Email or mobile number'/>
            <input ref={password} className='p-4 my-4 bg-gray-700 w-full' type='password' placeholder='Password'/>
            
            <p className='text-red-600'>{errorMessage}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
                onClick={handleButtonClick}
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p  className="py-4 cursor-pointer" onClick={toggleSignInForm}>  {isSignInForm ? "New to Netflix? Sign Up now" : "already registered? Sign In now"} </p>
        </form>
    </div>

  )
}

export default Login