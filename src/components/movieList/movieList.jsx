import React, { useEffect, useState } from 'react'
import MovieCard from '../movieCard/movieCard'
import '../movieList/movieList.css'
import ReactPaginate from 'react-paginate';
import { GrPrevious, GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListByGenre, getMovieList } from '../../redux/slices/movieListSlice';
const excludedGenres = [18, 10749]; // Hariç tutulacak türlerin ID'leri

const MovieList = ({ selectedGenre }) => {
  const { movieList } = useSelector((store) => store.movieList)  // movieList: state[]
  // dispatch(getMovieList()) ve dispatch(getMovieListByGenre()) çalıştığında movieList state'i güncellenir.
  const dispatch = useDispatch()

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  // excludedGenres dizisindeki elemanlardan herhngi birini içermeyen filmleri filtredim.
  const filteredMovies = movieList.filter((movie) =>
    !movie.genre_ids.some((genreId) => excludedGenres.includes(genreId))
  );

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredMovies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredMovies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }

  useEffect(() => {
    setItemOffset(0); // Tür değiştiğinde sayfayı sıfırla
    if (!selectedGenre) { // tür seçilmemişse selectedGenre: null --> false
      dispatch(getMovieList())
      console.log("Tür seçilmedi. getMovieList() çalisti...");
    } else {
      dispatch(getMovieListByGenre(selectedGenre.id))
      console.log("Tür seçildi. getMovieListByGenre() çalisti...", selectedGenre);
    }
  }, [selectedGenre, dispatch])  // her render'da ve seçili tür id'sini tutan state her değiştiğinde çalışır.  


  return (
    <div className='movie-list'>
      <h1>{`${selectedGenre ? selectedGenre.name : 'Discover'}`}</h1>
      <ul>
        {
        currentItems && currentItems.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <div className='pagination-component'>
        <ReactPaginate
          className='pagination'
          breakLabel="..."
          nextLabel={<GrNext />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<GrPrevious />}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default MovieList