import React, { useEffect, useState } from 'react'
import MovieCard from '../movieCard/movieCard'
import '../movieList/movieList.css'


const MovieList = ({ selectedGenreState, movieList, genres }) => {
    const [genreName, setGenreName] = useState()

    const getGenreName = () => {
      const filteredGenre = genres?.filter((genre) => genre.id == selectedGenreState)
      const filteredName = filteredGenre[0].name
      return filteredName
    }
    useEffect(() => {
        setGenreName(getGenreName())
    }, [selectedGenreState])
    
    return (
        <div className='movie-list'>
            <h1>{genreName}</h1>
            <ul>
              {movieList && movieList.map((movie, index) => (
                <MovieCard key={movie.id + index} movie={movie} />
              ))}
            </ul>
        </div>
    )
}

export default MovieList