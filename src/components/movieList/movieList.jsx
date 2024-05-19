import React, { useEffect, useState} from 'react'
import MovieCard from '../movieCard/movieCard'
import '../movieList/movieList.css'
import ReactPaginate from 'react-paginate';
import { GrPrevious, GrNext } from "react-icons/gr";


const MovieList = ({ selectedGenreState, movieList, genres }) => {
    const [genreName, setGenreName] = useState()

    const getGenreName = () => {
      const filteredGenre = genres?.filter((genre) => genre.id == selectedGenreState)
      const filteredName = filteredGenre[0].name
      return filteredName
    }
    useEffect(() => {
        setGenreName(getGenreName())
    }, [selectedGenreState])
    

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8; 
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = movieList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(movieList.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % movieList.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    }

    return (
        <div className='movie-list'>
            <h1>{genreName}</h1>
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