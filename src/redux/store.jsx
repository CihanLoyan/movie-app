import { configureStore } from "@reduxjs/toolkit";
import genreSliceReducer from './slices/genreSlice'
import movieListSliceReducer from './slices/movieListSlice'

export const store = configureStore({
    reducer: {
        genre: genreSliceReducer,
        movieList: movieListSliceReducer,
    }
})