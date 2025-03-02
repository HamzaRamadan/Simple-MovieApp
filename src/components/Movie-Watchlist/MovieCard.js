// import React from 'react'
// import { MovieControls } from './MovieControls'

// export const MovieCard = ({movie , type}) => {
//   return (
//     <div className='movie-card'>
//         <div className="overlay"></div>
//         {
//                 movie.Poster ? (
//                     <img src={movie.Poster} alt={movie.Title}></img>
//                 ): <div className='filter-poster'></div>
                
//         }
//         <MovieControls movie={movie} type={type}/>
//     </div>
//   )
// }


import React from 'react';
import { MovieControls } from './MovieControls';
export const MovieCard = ({ movie, type }) => {
  return (
    <div className='movie-card'>
      <div className="overlay"></div>

      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className='filter-poster'></div>
      )}

      <h3 className=' movie-title'>{movie.Title}</h3> 

      <MovieControls movie={movie} type={type} />
    </div>
  );
};
