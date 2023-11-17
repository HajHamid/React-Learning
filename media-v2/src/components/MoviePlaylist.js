import { createRandomMovie } from "../data";


function MoviePlaylist({ movieList, onAdd, onRemove }) {

    const handleAddMovie = (movie) => {
        onAdd(movie)
    }

    const handleRemoveMovie = (movie) => {
        onRemove(movie)
    }


    const renderedMovies = movieList.map((movie) => {
        return <li key={movie}>
            {movie}
            <button
                onClick={() => handleRemoveMovie(movie)}
                className="button is-danger"
            >
                X
            </button>
        </li>
    })


    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Movie Playlist</h3>
                <div className="buttons">
                    <button
                        onClick={() => handleAddMovie(createRandomMovie())}
                        className="button is-link"
                    >
                        + Add Movie to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedMovies}</ul>
        </div>
    );
}

export default MoviePlaylist