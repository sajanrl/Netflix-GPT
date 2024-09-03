import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => { 
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies();  // custom Hook
  usePopularMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch ? (
        <GptSearch/> ) : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
      
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - crads * n

       */}
    </div>
  )
};
export default Browse; 