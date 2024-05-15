import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieById } from '../../redux/slices/movieDetailSlice'

const MovieDetail = () => {
    const { id } = useParams()
    console.log(id);

    const { movieDetail } = useSelector((store) => store.movieDetail)
    const { title, vote_average } = movieDetail
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMovieById(id))
      console.log("getMovieById()");
    }, [])
  return (
    <div className='movie-detail'>
      {title}
      {vote_average}
    </div>
  )
}

export default MovieDetail