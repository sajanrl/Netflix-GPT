import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import geminiai from '../utils/geminiai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
  
const GptSearchBar = () => {
    const langKey =  useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
             movie + 
             "&include_adult=false&language=en-US&page=1", 
            API_OPTIONS
        );

        const json = await data.json();
        
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie results 

        const model = geminiai.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Act as a movie Recommendation system and suggest me some movies for the query:" +
        searchText.current.value + 
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Amazing Spiderman, Salaar, Kalki, Avengers EndGame, Kick2 ";
        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
         
        const geminiMovies = result.response.text().split(",");  // gives an array
        // ["Dangal", "3 Idiots", "Baahubali: The Beginning",  "PK",  "Dilwale Dulhania Le Jayenge"]

        // For each movie I'll search TMDB API
        const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie)); 
        // console.log(promiseArray);
        //   (5) [Promise, Promise, Promise, Promise, Promise]
        
        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);

        dispatch(addGptMovieResult({movieNames: geminiMovies, movieResults: tmdbResults}));
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'
            onSubmit={(e)=>e.preventDefault()}
        >   
            {/* e.preventDefault() will prevents to refresh the page */}
            <input
                ref={searchText}
                type='text'
                className='p-4 m-4 rounded-lg col-span-9'
                placeholder={lang[langKey].gptSEarchPlaceholder}
            />
            <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'
                onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar