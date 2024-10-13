import React, {lazy, useState } from 'react'
import Genres from '../../components/genres/genres'
// import MovieList from '../../components/movieList/movieList'
const MovieList = lazy(() => import('../../components/movieList/movieList'))
import Loading from '../../components/Loading/Loading'
import { Suspense } from 'react'
import ReactLoading from 'react-loading';
import './Home.css'

const Home = () => { 

  const [selectedGenre, setSelectedGenre] = useState('')

  return (
    <div className='Home'>
        <Genres setSelectedGenre={setSelectedGenre} />
        <Suspense fallback={<ReactLoading color='#ffcc00' height={'20%'} width={'10%'} />}>  
            <MovieList selectedGenre={selectedGenre} />
        </Suspense>
    </div>
  )
}

export default Home