import { createRandomSong } from "../data";

function SongPlaylist({ songList, onAdd, onDelete }) {


    const handleAddClick = (song) => {
        onAdd(song)
    }

    const handleRemoveClick = (song) => {
        onDelete(song)
    }



    const renderedSongs = songList.map((Song) => {
        return <li key={Song}>
            {Song}
            <button
                onClick={() => handleRemoveClick(Song)}
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
                        onClick={() => handleAddClick(createRandomSong())}
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