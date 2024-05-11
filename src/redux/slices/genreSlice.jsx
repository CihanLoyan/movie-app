import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = `https://api.themoviedb.org/3/genre/movie/list`
const API_KEY = `6fcf1265d261f72a891c26664a6afcf2`

const initialState = {
    genres: []
}

export const getGenres = createAsyncThunk('genres', async () => {
    const res = await axios.get(`${API_URL}?api_key=${API_KEY}`)
    return res.data.genres;
})

export const genreSlice = createSlice({
    name: "genre",
    initialState,
    reducers: {
        //HTTP istekleri yoksa burası kullanılır. 
    },
    extraReducers: (builder) => {  // HTTP isteklerinde burası kullanılır.
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
    }
})

export const {} = genreSlice.actions;  // Buraya sadece reducers içerisine yazılacak fonksiyonlar yazılır.
export default genreSlice.reducer;