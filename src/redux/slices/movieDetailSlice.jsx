import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { API_KEY, API_MOVIE_LIST_URL, API_MOVIE_FIND_URL } from "../../constants/api"

const initialState = {
    movieDetail: []
}

export const getMovieById = createAsyncThunk('getMovieById', async (id) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6fcf1265d261f72a891c26664a6afcf2`)
    console.log(res);
    return res.data;
})

export const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers:  {
        // HTTP isteği yoksa burası kullanılır.
    },
    extraReducers: (builder) => {  // HTTP isteklerinde burası kullanılır.
        builder.addCase(getMovieById.fulfilled, (state, action) => {
            state.movieDetail = action.payload;
        })

    }
})

export const {} = movieDetailSlice.actions;  // Buraya sadece reducers içerisine yazılacak fonksiyonlar yazılır.
export default movieDetailSlice.reducer;  // Dışarıdan erişebilmek için.