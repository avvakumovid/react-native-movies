import {Api} from '../../../API/api';

const LOAD = 'LOAD'
const LOAD_MOVIE_LIST = 'LOAD'
const LOAD_MOVIE = 'LOAD_MOVIE'
const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS'
const FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR'
const FETCH_MOVIES_BY_GENRE = 'FETCH_MOVIES_BY_GENRE'
const FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID'
const FETCH_MOVIE_TREILER_ID = 'FETCH_MOVIE_TREILER_ID'
const RESET_MOVIE = 'RESET_MOVIE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const ADD_MOVIES_BY_GENRE = 'ADD_MOVIES_BY_GENRE'
const ADDING = 'ADDING'

export const fetchGenre = () => {
    return async (dispatch) => {
        try {
            dispatch({type: LOAD})
            // let genres = await axios.get('http://localhost:5000/api/genres')
            let genres = await Api.FetchGenres()
            dispatch({type: FETCH_GENRE_SUCCESS, payload: genres.data})
        } catch (e) {
            dispatch({type: FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}

export const fetchMoviesByGenreId = (page , id) => {
    return async (dispatch) => {
        try {
            dispatch({type: LOAD_MOVIE_LIST})
            let movies = await Api.FetchMoviesByGenreId(page, id)
            dispatch({
                type: FETCH_MOVIES_BY_GENRE,
                payload: {
                    movies: movies.data.movies,
                    tottalPages: movies.data.totalPage,
                    itemInPage: movies.data.itemInPage,
                }
            })
        } catch (e) {
            dispatch({type: FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}

export const addMoviesByGenreId = (page , id) => {
    return async (dispatch) => {
        try {
            dispatch({type: ADDING})
            let movies = await Api.AddMoviesByGenreId(page, id)
            dispatch({
                type: ADD_MOVIES_BY_GENRE,
                payload: {
                    movies: movies.data.movies,
                    tottalPages: movies.data.totalPage,
                    itemInPage: movies.data.itemInPage,
                }
            })
        } catch (e) {
            dispatch({type: FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}

export const fetchMovieById = (id) => {
    return async (dispatch) => {
        try {
            if (id === undefined) {
                dispatch({type: FETCH_MOVIE_BY_ID, payload: {}})
                return
            }
            dispatch({type: LOAD_MOVIE})
            let movie = await Api.FetchMovieById(id)
            // let treilerId = await Api.FetchMovieTrailer(movie.data.id)
            // let payload = {...movie.data, treilerId: treilerId}
            dispatch({type: FETCH_MOVIE_BY_ID, payload: movie.data})
        } catch (e) {
            dispatch({type: FETCH_GENRE_ERROR, payload: 'Ошибка при загруке фильма'})
        }

    }
}

export const resetMovie = () => {
    return (dispatch) => {
        dispatch({type: RESET_MOVIE})
    }
}

export const setCurrentPage = (page) => {
    return (dispatch) => {
        dispatch({type: SET_CURRENT_PAGE, payload: page})
    }
}