import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/movieCard/movieCard'
import './MyList.css'

const MyList = () => {

  const { movies } = useSelector((store) => store.favorite)

  console.log(movies);

  return (
    <div className='my-list'>
        <h1>Your Favorite Movies</h1>
        <ul>
            {
              movies && movies.map((movie, index) => (
                  <MovieCard key={movie.id + index} movie={movie} />
              ))
            }
        </ul>
    </div>
  )
}

export default MyList