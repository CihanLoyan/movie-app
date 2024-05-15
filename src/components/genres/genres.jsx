import React, { useEffect } from 'react'
import './genres.css'

const Genres = ({ genres, onSelectedGenre }) => {

  const selectedGenre = (id) => {
      onSelectedGenre(id)
  }

  return (
    <div className='genres'>
        <ul>
            {genres && genres.map((genre, index) => (
              <li
                onClick={() => selectedGenre(genre.id)}
                key={genre.id + index}
              >
                {genre.name}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Genres