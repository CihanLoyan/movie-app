import React, {lazy, useEffect, useState } from 'react'
import Genres from '../../components/genres/genres'
// import MovieList from '../../components/movieList/movieList'
const MovieList = lazy(() => import('../../components/movieList/movieList'))
import { Suspense } from 'react'

const Home = () => { 

  const [selectedGenreState, setSelectedGenreState] = useState([])
  // Seçili kategori id'sini tutan state

  const selectedGenre = (id) => {
      setSelectedGenreState(id)
  }

  return (
    <div>
        <Genres onSelectedGenre={selectedGenre}/>
        <Suspense fallback={<>...Loading Movie List...</>}>  
            <MovieList selectedGenreState={selectedGenreState} />
        </Suspense>
    </div>
  )
}

export default Home