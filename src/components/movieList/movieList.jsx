import React, { useDebugValue, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../../redux/slices/movieListSlice'
import axios from 'axios'
import MovieCard from '../movieCard/movieCard'


const MoveList = ({ movieList, selectedGenreState }) => {

    const [newMovieList, setNewMovieList] = useState([...movieList])

    const getMovieListByGenre = async (id) => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6fcf1265d261f72a891c26664a6afcf2&with_genres=${id}`)
        setNewMovieList(res.data.results)
    }

    useEffect(() => {
      getMovieListByGenre(selectedGenreState)
    }, [selectedGenreState])
    return (
        <div>
          
            <ul>
              {newMovieList && newMovieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} selectedGenreState={selectedGenreState}/>
              ))}
            </ul>
            {selectedGenreState}
        </div>
    )
}

export default MoveList