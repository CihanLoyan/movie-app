import React from 'react'
import MovieCard from '../movieCard/movieCard'
import '../movieList/movieList.css'


const MovieList = ({ selectedGenreState, movieList }) => {
    return (
        <div className='movie-list'>
            <ul>
              {movieList && movieList.map((movie, index) => (
                <MovieCard key={movie.id + index} movie={movie} selectedGenreState={selectedGenreState}/>
              ))}
            </ul>
            {selectedGenreState}
        </div>
    )
}

export default MovieList