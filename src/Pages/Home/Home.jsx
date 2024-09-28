import React, {lazy, useEffect, useState } from 'react'
import Genres from '../../components/genres/genres'
// import MovieList from '../../components/movieList/movieList'
const MovieList = lazy(() => import('../../components/movieList/movieList'))
import { Suspense } from 'react'

const Home = () => { 

  const [selectedGenre, setSelectedGenre] = useState("")

  return (
    <div>
        <Genres setSelectedGenre={setSelectedGenre} />
        <Suspense fallback={<>...Loading Movie List...</>}>  
            <MovieList selectedGenre={selectedGenre} />
        </Suspense>
    </div>
  )
}

export default Home