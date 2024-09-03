import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  // console.log("hello",movies);
  
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Up Coming"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      
      {/*
        MovieList - popular
          MovieCard * n
        MovieList - NowPlaying
        MovieList - Trending
        MovieList - Horror
       */}
    </div>
  )
}

export default SecondaryContainer