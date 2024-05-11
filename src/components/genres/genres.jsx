import React, { useEffect } from 'react'
import './genres.css'

const Genres = ({ genres, onSelectedGenre }) => {

  const selectedGenre = (id) => {
      onSelectedGenre(id)
  }

  return (
    <div className='genres'>
        <ul>
            {genres && genres.map((genre) => (
              <li
                onClick={() => selectedGenre(genre.id)}
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Genres