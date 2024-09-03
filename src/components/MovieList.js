import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
//    movies && console.log(movies[0]);

  return (
    <div className='px-6 py-4 '>
        <h1 className='text-2xl py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
         { movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
        </div>
    </div>
  )
}

export default MovieList