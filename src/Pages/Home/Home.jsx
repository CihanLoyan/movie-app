import React, {lazy, useEffect, useState } from 'react'
import Genres from '../../components/genres/genres'
// import MovieList from '../../components/movieList/movieList'
const MovieList = lazy(() => import('../../components/movieList/movieList'))

import { useDispatch, useSelector } from 'react-redux'
import { Suspense } from 'react'

import { getGenres } from '../../redux/slices/genreSlice'
import { getMovieList } from '../../redux/slices/movieListSlice'
import { getMovieListByGenre } from '../../redux/slices/movieListSlice'


const Home = () => {

    const dispatch = useDispatch()  
    const { genres } = useSelector((store) => store.genre)  // genres: state[]
    // dispatch(getGenres()) çalıştığında genres state'i güncellenir.
    const { movieList } = useSelector((store) => store.movieList)  // movieList: state[]
    // dispatch(getMovieList()) ve dispatch(getMovieListByGenre()) çalıştığında movieList state'i güncellenir.
    const [selectedGenreState, setSelectedGenreState] = useState([28])  // Default Action verildi.
    // Seçili kategori id'sini tutan state

    useEffect(() => {
      dispatch(getMovieList())
      console.log("getMovieList()");
    }, [])  // Component ilk ve her render edildiğinde çalışır. 
    
    useEffect(() => {
      dispatch(getMovieListByGenre(selectedGenreState))
      console.log("selectedGenreState");
    }, [selectedGenreState, genres])  // seçili tür id'sini tutan state her değiştiğinde çalışır.

    useEffect(() => {
      dispatch(getGenres())
    }, [])

    const selectedGenre = (id) => {
      setSelectedGenreState(id)
    }

  return (
    <div>
        <Genres genres={genres} selectedGenreState={selectedGenreState} onSelectedGenre={selectedGenre}/>
        <Suspense fallback={<>...Loading Movie List...</>}>  
            <MovieList movieList={movieList} selectedGenreState={selectedGenreState} genres={genres}/>
        </Suspense>
    </div>
  )
}

export default Home