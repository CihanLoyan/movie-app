import React, { useEffect, useState } from 'react'
import './genres.css'
import { getGenres } from '../../redux/slices/genreSlice'
import { useDispatch, useSelector } from 'react-redux'

const Genres = ({ setSelectedGenre}) => {
  const dispatch = useDispatch()
  
  const { genres } = useSelector((store) => store.genre)  // genres: state[]
  // dispatch(getGenres()) çalıştığında genres state'i güncellenir.

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  return (
    <div className='genres'>
        <ul>
            {genres && genres.map((genre, index) => (
              <li
                className='selected'
                onClick={() => setSelectedGenre(genre)}
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