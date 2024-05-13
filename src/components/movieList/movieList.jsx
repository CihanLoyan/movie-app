import React from 'react'
import MovieCard from '../movieCard/movieCard'


const MoveList = ({ selectedGenreState, movieList }) => {
    return (
        <div>
            <ul>
              {movieList && movieList.map((movie, index) => (
                <MovieCard key={movie.id + index} movie={movie} selectedGenreState={selectedGenreState}/>
              ))}
            </ul>
            {selectedGenreState}
        </div>
    )
}

export default MoveList