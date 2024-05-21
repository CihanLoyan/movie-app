import React, { useEffect, useState} from 'react'
import MovieCard from '../movieCard/movieCard'
import '../movieList/movieList.css'
import ReactPaginate from 'react-paginate';
import { GrPrevious, GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListByGenre, getMovieList } from '../../redux/slices/movieListSlice';


const MovieList = ({ selectedGenreState }) => {
    const { movieList } = useSelector((store) => store.movieList)  // movieList: state[]
    // dispatch(getMovieList()) ve dispatch(getMovieListByGenre()) çalıştığında movieList state'i güncellenir.
    const dispatch = useDispatch()

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10; 
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = movieList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(movieList.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % movieList.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    }

    useEffect(() => {
      if (selectedGenreState.length == 0) { // içinde herhangi bir eleman yoksa:
        dispatch(getMovieList())
        console.log("Tür seçilmedi. getMovieList() çalıştı...");
      } else {
        dispatch(getMovieListByGenre(selectedGenreState.id))
        console.log("Tür seçildi. getMovieListByGenre() çalıştı...", selectedGenreState);
      }
    }, [selectedGenreState])  // her render'da ve seçili tür id'sini tutan state her değiştiğinde çalışır.

    return (
        <div className='movie-list'>
            <h1>{selectedGenreState.name}</h1>
            <ul>
              {currentItems && currentItems.map((movie, index) => (
                <MovieCard key={movie.id + index} movie={movie} />
              ))}
            </ul>
            <div className='pagination-component'>
                <ReactPaginate
                    className='pagination'
                    breakLabel="..."
                    nextLabel={<GrNext />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    pageCount={pageCount}
                    previousLabel={<GrPrevious />}
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default MovieList