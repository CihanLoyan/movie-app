import React, {useEffect, useState } from 'react'
import Genres from '../../components/genres/genres'
import MoveList from '../../components/movieList/movieList'

import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../redux/slices/genreSlice'

import { getMovieList } from '../../redux/slices/movieListSlice'

const Home = () => {
    const dispatch = useDispatch()  
    const { genres } = useSelector((store) => store.genre)  // genres: state

    const [selectedGenreState, setSelectedGenreState] = useState(0)

    const { movieList } = useSelector((store) => store.movieList)  // movieList: state

    useEffect(() => {
        dispatch(getMovieList())
    }, [])

    useEffect(() => {
      dispatch(getGenres())
    }, [])

    const selectedGenre = (id) => {
      setSelectedGenreState(id)
    }

  return (
    <div>
      <Genres genres={genres} onSelectedGenre={selectedGenre}/>
      <MoveList movieList={movieList} selectedGenreState={selectedGenreState}/>
    </div>
  )
}

export default Home