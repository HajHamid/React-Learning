import { useReducer } from "react"
import MoviePlaylist from "./components/MoviePlaylist"
import SongPlaylist from "./components/SongPlaylist"
import reducer from "./reducer"

import { ADD_MOVIE, REMOVE_MOVIE, ADD_SONG, REMOVE_SONG, RESET_LIST } from "./actions"

function App() {
    const [state, dispatch] = useReducer(reducer, {
        movieList: [],
        songList: []
    })

    const handleResetClick = () => {
        dispatch({
            type: RESET_LIST
        })
    }

    const handleAddMovie = (movie) => {
        dispatch({
            type: ADD_MOVIE,
            payload: movie
        })
    }

    const handleRemoveMovie = (movie) => {
        dispatch({
            type: REMOVE_MOVIE,
            payload: movie
        })
    }


    const handleAddSong = (movie) => {
        dispatch({
            type: ADD_SONG,
            payload: movie
        })
    }

    const handleRemoveSong = (movie) => {
        dispatch({
            type: REMOVE_SONG,
            payload: movie
        })
    }

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist movieList={state.movieList} onAdd={handleAddMovie} onRemove={handleRemoveMovie} />
            <hr />
            <SongPlaylist songList={state.songList} onAdd={handleAddSong} onRemove={handleRemoveSong} />
        </div>
    )
}

export default App