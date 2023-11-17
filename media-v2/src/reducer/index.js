
const ADD_MOVIE = 'add_movie'
const REMOVE_MOVIE = 'remove_movie'
const ADD_SONG = 'add_song'
const REMOVE_SONG = 'remove_song'
const RESET_LIST = 'reset_list'

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movieList: [...state.movieList, action.payload]
            }
        case REMOVE_MOVIE:
            return {
                ...state,
                movieList: state.movieList.filter((movie) => {
                    return action.payload !== movie
                })
            }
        case ADD_SONG:
            return {
                ...state,
                songList: [...state.songList, action.payload]
            }

        case REMOVE_SONG:
            return {
                ...state,
                songList: state.songList.filter((song) => {
                    return song !== action.payload
                })
            }
        case RESET_LIST:
            return {
                ...state,
                movieList: [],
                songList: []
            }
        default:
            throw Error;
    }
}

export default reducer