import { createSlice } from "@reduxjs/toolkit"

const getFavoriteFromStorage = () => {
    if(localStorage.getItem('favorite')) {
        return JSON.parse(localStorage.getItem('favorite'))
    }
    return [];
}

const initialState = {
    movies: getFavoriteFromStorage(),
}

const writeFromFavoriteToStorage = (favorite) => {
    localStorage.setItem('favorite', JSON.stringify(favorite))
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const findFavorite = state.movies && state.movies.find((movie) => movie.id == action.payload.id)
            if(findFavorite) {
                // daha önce eklenmiş
            } else {
                state.movies = [...state.movies, action.payload]
                writeFromFavoriteToStorage(state.movies)
            }
        },
        removeFromFavorite: (state, action) => {
            const filtered = state.movies && state.movies.filter((movie) => movie.id !==  action.payload.id)
            console.log(filtered);
            state.movies = filtered
            writeFromFavoriteToStorage(state.movies)
        }
    }
})

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;