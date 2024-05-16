import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa'
import './MovieDetail.css'

import { getMovieById } from '../../redux/slices/movieDetailSlice'
import { API_IMG } from '../../constants/api'


const MovieDetail = () => {
    const { id } = useParams()
    console.log(id);

    const { movieDetail } = useSelector((store) => store.movieDetail)
    const { title, vote_average, overview, genres, poster_path, spoken_languages, release_date} = movieDetail
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMovieById(id))
      console.log("getMovieById()");
    }, [])


    const release_year = new Date(release_date)  // Ssdece yıl bilgisini çekmek için.
    console.log(release_year.getFullYear());
  return (
      <div className="movie-detail">
          <header>
            <p>{title}</p>
            <div className='add-favorite'>
                <button className='btn'>
                    <span><FaHeart /></span>
                    <span>Add Favorite</span>
                </button>
            </div>
          </header>
          <div className='content'>
            <div className='left'>
                <div className='movie-backdrop_path'>
                    <img src={`${API_IMG}/${poster_path}`} alt={title} />
                </div>
            </div>
            <div className='right'>
                <div className='movie-overview'>
                    <p>{overview}</p>
                </div>
                <div className="movie-rating">
                    <FaStar />
                    <p>{vote_average?.toFixed(1)}</p>
                </div>
                <div className='release-date'>
                    <span>Year:</span>
                    <p>{release_year.getFullYear()}</p>
                </div>
                <div className='movie-info'>
                    <div className='movie-genres'>
                        <span>Genre:</span>
                        <ul>
                            {genres && genres.map((genre) => (
                              <li className="movie-genre">{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='movie-languages'>
                        <span>Language:</span>
                        <ul>
                            {spoken_languages && spoken_languages.map((language, index) => (
                                <li key={index}>{language.english_name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </div>  
      </div>
  )
}

export default MovieDetail