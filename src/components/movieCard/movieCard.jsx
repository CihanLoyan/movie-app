import React from 'react'
import { API_IMG } from '../../constants/api'
import './movieCard.css'
import { FaStar } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
  const { title, backdrop_path, vote_average } = movie;
  return (
    <div className="movie-card">
      <div className='gradient'></div>
      <img src={`${API_IMG}/${backdrop_path}`} alt={title} />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-rating">
          <p>{vote_average.toFixed(1)}</p>
          <FaStar />
        </div>
      </div>
    </div> 
  )
    {/* <div className='movie-card'>
      <img src={`${API_IMG}/${backdrop_path}`} alt={title} />
      {title}
    </div> */}
}

export default MovieCard