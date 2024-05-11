import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div>{movie.title} | {movie.genre_ids}</div>
  )
}

export default MovieCard