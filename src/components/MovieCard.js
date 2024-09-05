import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
//   const {posterPath} = data;
if(!posterPath) return null;
  return (
    <div className='w-44 pr-4'>
        <img alt="Movie card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard