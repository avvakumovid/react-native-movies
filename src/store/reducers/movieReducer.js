const LOAD = 'LOAD'
const ADDING = 'ADDING'
const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS'
const FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR'
const FETCH_MOVIES_BY_GENRE = 'FETCH_MOVIES_BY_GENRE'
const ADD_MOVIES_BY_GENRE = 'ADD_MOVIES_BY_GENRE'
const FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID'
const FETCH_MOVIE_TREILER_ID = 'FETCH_MOVIE_TREILER_ID'
const RESET_MOVIE = 'RESET_MOVIE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


const initialState = {
    genre: [],
    movies: [],
    loading: false,
    error: null,
    totalPages: 1,
    itemInPage: 20,
    movie: null,
    movieTreilerId: '',
    currentPage: 1,
    adding: false
}
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {...state, loading: true, error: null}
        case FETCH_GENRE_SUCCESS:
            return {...state, loading: false, genre: action.payload}
        case FETCH_GENRE_ERROR:
            return {...state, loading: false, error: action.payload}
        case FETCH_MOVIES_BY_GENRE:
            return {
                ...state,
                loading: false,
                movies: action.payload.movies,
                totalPages: action.payload.tottalPages,
                itemInPage: action.payload.itemInPage
            }
        case ADD_MOVIES_BY_GENRE:
            return {
                ...state,
                adding: false,
                movies: [...state.movies, ...action.payload.movies],
                totalPages: action.payload.tottalPages,
                itemInPage: action.payload.itemInPage
            }
        case ADDING:
            return {...state, adding: true, error: null}
        case FETCH_MOVIE_BY_ID:
            return {...state, loading: false, movie: action.payload}
        case FETCH_MOVIE_TREILER_ID:
            return {...state, movieTreilerId: action.payload}
        case RESET_MOVIE:
            return {...state, movie: []}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}