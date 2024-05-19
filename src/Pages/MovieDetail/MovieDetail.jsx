import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa'
import { IoIosRemoveCircle } from "react-icons/io";
import './MovieDetail.css'

import { getMovieById } from '../../redux/slices/movieDetailSlice'
import { API_IMG } from '../../constants/api'
import { addToFavorite } from '../../redux/slices/favoritesSlice';
import { removeFromFavorite } from '../../redux/slices/favoritesSlice';


const MovieDetail = () => {
    const { id } = useParams()
    console.log(id);

    const { movieDetail } = useSelector((store) => store.movieDetail)
    const { title, vote_average, overview, genres, poster_path, spoken_languages, release_date} = movieDetail
    const dispatch = useDispatch();

    const { movies } = useSelector((store) => store.favorite)

    console.log(movies);


    const [isFavorite, setIsFavorite] = useState(false)  // İlgili filmin favorilere ekli olup olmadığı bilgisini tutan state.
    useEffect(() => {
        const isFavorite = movies && movies.find((movie) => movie.id == id)  // Eğer ilgili film localStorage'da ise değişkene aktar ve
        if(isFavorite) {  // Bu değişken var ise
            setIsFavorite(true)  // Favorilerde olduğunu belirtiyoruz.
        } else {
            setIsFavorite(false)
        }
    }, [movies])


    useEffect(() => {
      dispatch(getMovieById(id))
      console.log("getMovieById()");
    }, [id])

    const release_year = new Date(release_date)  // Sadece yıl bilgisini çekmek için.

    const addFavorite = () => {
        const payload = {
            id,
            title,
            vote_average,
            poster_path,
        }
        dispatch(addToFavorite(payload))
    }

    const removeFavorite = () => {
        const payload = {
            id,
        }
        dispatch(removeFromFavorite(payload))
    }

  return (
      <div className="movie-detail">
          <header>
            <p>{title}</p>
            <div className='add-favorite-remove'>
               {
                isFavorite ?    // yukarıdan true dönerse ilgili film zaten favorilerde olduğu için remove movie butonu gösterilir..
                <button onClick={removeFavorite} className='btn remove'>
                    <span><IoIosRemoveCircle /></span>
                    <span>Remove Favorite</span>
                </button>
                :  // false dönerse film favorilerde olmadığı için add favorite butonu gösterilir.
                <button onClick={addFavorite} className='btn add'>
                    <span><FaHeart /></span>
                    <span>Add Favorite</span>
                </button>
               }
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
                    <p>{vote_average.toFixed(1)}</p>
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
                              <li key={genre.id} className="movie-genre">{genre.name}</li>
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