import React, {useEffect, useState } from 'react'
import Genres from '../../components/genres/genres'
import MoveList from '../../components/movieList/movieList'

import { useDispatch, useSelector } from 'react-redux'

import { getGenres } from '../../redux/slices/genreSlice'
import { getMovieList } from '../../redux/slices/movieListSlice'
import { getMovieListByGenre } from '../../redux/slices/movieListSlice'

const Home = () => {
    const dispatch = useDispatch()  
    const { genres } = useSelector((store) => store.genre)  // genres: state[]
    // dispatch(getGenres()) çalıştığında genres state'i güncellenir.
    const { movieList } = useSelector((store) => store.movieList)  // movieList: state[]
    // dispatch(getMovieList()) ve dispatch(getMovieListByGenre()) çalıştığında movieList state'i güncellenir.

    const [selectedGenreState, setSelectedGenreState] = useState([])
    // Seçili kategori id'sini tutan state

    useEffect(() => {
      dispatch(getMovieList())
      console.log("getMovieList()");
    }, [])  // Component ilk ve her render edildiğinde çalışır. 
    
    useEffect(() => {
      dispatch(getMovieListByGenre(selectedGenreState))
      console.log("selectedGenreState:" + selectedGenreState);
    }, [selectedGenreState])  // seçili tür id'sini tutan state her değiştiğinde çalışır.

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