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
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()  
    const { genres } = useSelector((store) => store.genre)  // genres: state[]
    // dispatch(getGenres()) çalıştığında genres state'i güncellenir.
    const { movieList } = useSelector((store) => store.movieList)  // movieList: state[]
    // dispatch(getMovieList()) ve dispatch(getMovieListByGenre()) çalıştığında movieList state'i güncellenir.

    const [selectedGenreState, setSelectedGenreState] = useState([])
    // Seçili kategori id'sini tutan state

    useEffect(() => {
      /* setTimeout(()=> {
        console.log("...50 ms");
        setLoading(true)  // 500 ms sonra loading true olunca Skeleton'dan çıktı.
    }, 500) */
      dispatch(getMovieList())  // 500 ms sonra loading true olduğunda getMovieList() çalıştı.
      console.log("getMovieList()");
    }, [])  // Component ilk ve her render edildiğinde çalışır. 
    
    useEffect(() => {
      /* setTimeout(()=> {
        console.log("...500 ms");
        setLoading(true)  // 500 mn sonra loading true olunca Skeleton'dan çıktı.
    }, 500) */
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
        <Suspense fallback={<>...Loading Movie List...</>}>  
            <MovieList movieList={movieList} selectedGenreState={selectedGenreState}/>
        </Suspense>
    </div>
  )
}

export default Home