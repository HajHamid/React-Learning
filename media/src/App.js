import { useState } from "react"
import MoviePlaylist from "./components/MoviePlaylist"
import SongPlaylist from "./components/SongPlaylist"

function App() {
    const [movieList, setMovieList] = useState([])
    const [songList, setSongList] = useState([])

    const handleMovieAdd = (movie) => {
        const updatedMovieList = [...movieList, movie]
        setMovieList(updatedMovieList)
    }

    const handleMovieRemove = (deletedMovie) => {
        const updatedMovieList = movieList.filter((movie) => {
            return movie !== deletedMovie
        })
        setMovieList(updatedMovieList)
    }

    const handleSongAdd = (Song) => {
        const updatedSongList = [...songList, Song]
        setSongList(updatedSongList)
    }

    const handleSongRemove = (deletedSong) => {
        const updatedSongList = songList.filter((Song) => {
            return Song !== deletedSong
        })

        setSongList(updatedSongList)
    }

    const handleResetClick = () => {
        setMovieList([])
        setSongList([])
    }

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist movieList={movieList} onAdd={handleMovieAdd} onDelete={handleMovieRemove} />
            <hr />
            <SongPlaylist songList={songList} onAdd={handleSongAdd} onDelete={handleSongRemove} />
        </div>
    )
}

export default App