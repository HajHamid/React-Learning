import { createRandomSong } from "../data";

function SongPlaylist({ songList, onAdd, onRemove }) {
    const handleAddSong = (song) => {
        onAdd(song)
    }

    const handleRemoveSong = (song) => {
        onRemove(song)
    }

    const renderedSongs = songList.map((Song) => {
        return <li key={Song}>
            {Song}
            <button
                onClick={() => handleRemoveSong(Song)}
                className="button is-danger"
            >
                X
            </button>
        </li>
    })

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song Playlist</h3>
                <div className="buttons">
                    <button
                        onClick={() => handleAddSong(createRandomSong())}
                        className="button is-link"
                    >
                        + Add Song to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
}

export default SongPlaylist