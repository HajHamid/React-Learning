import { configureStore } from '@reduxjs/toolkit'
import { movieReducer, addMovie, removeMovie } from './slices/movieSlices'
import { songReducer, addSong, removeSong } from './slices/songSlices'
import { reset } from './actions'

const store = configureStore({
    reducer: {
        movies: movieReducer,
        songs: songReducer
    }
})


export { store, addMovie, removeMovie, addSong, removeSong, reset }