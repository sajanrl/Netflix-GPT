import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));  
          navigate("/browse");
        } else {
          // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
      });
  },[])

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
    
  }

  return (
    <div className='absolute w-screen px-8 py-6 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
            className='w-48'
            src= {LOGO} 
            alt='logo'
        />
        { user && (
            <div className='flex m-5 '>
              {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => 
                  <option key={lang.identifier} value={lang.identifier} >
                    {lang.name}
                  </option>)}
              </select>}
              <button className='text-white bg-red-700 px-6 py-2 mx-8 rounded-lg'
              onClick={handleGptSearchClick}>{showGptSearch ? "✘  close" : "GPT Search"}</button>
            <img className='w-12 h-14'
              src={user?.photoURL}
              alt="userIcon"
            />
            <button className='text-white p-2 font-bold ' onClick={handleSignOut}>(Sign Out)</button>
          </div>
        )}
    </div>
  )
}

export default Header