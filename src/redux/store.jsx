import { configureStore } from "@reduxjs/toolkit";
import genreSliceReducer from './slices/genreSlice'
import movieListSliceReducer from './slices/movieListSlice'
import movieDetailSliceReducers from './slices/movieDetailSlice'
import favoritesSliceReducers from "./slices/favoritesSlice";

export const store = configureStore({
    reducer: {
        genre: genreSliceReducer,
        movieList: movieListSliceReducer,
        movieDetail: movieDetailSliceReducers,
        favorite: favoritesSliceReducers
    }
})