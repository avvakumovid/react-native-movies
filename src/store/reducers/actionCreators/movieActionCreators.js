import axios from 'axios';
import {Api} from '../../../API/api';

const LOAD = 'LOAD'
const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS'
const FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR'
const FETCH_MOVIES_BY_GENRE = 'FETCH_MOVIES_BY_GENRE'
const FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID'
const FETCH_MOVIE_TREILER_ID = 'FETCH_MOVIE_TREILER_ID'
const RESET_MOVIE = 'RESET_MOVIE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const fetchGenre = () => {
    return async (dispatch) => {
        try {
            dispatch({type: LOAD})
            // let genres = await axios.get('http://localhost:5000/api/genres')
            let genres = await axios.get('https://avvakumov-movies-backend.herokuapp.com/api/genres')
            dispatch({type: FETCH_GENRE_SUCCESS, payload: genres.data})
        } catch (e) {
            dispatch({type: FETCH_GENRE_ERROR, payload: 'Ошибка при загруке жанров'})
        }
    }
}

export const fetchMoviesByGenreId = (page , id) => {
    return async (dispatch) => {
        try {
            dispatch({type: LOAD})
            let movies = await axios.get('http://localhost:5000/api/movies', {
                params: {
                    page: page,
                    genreId: id
                }
            })
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

export const fetchMovieById = (id) => {
    return async (dispatch) => {
        try {
            if (id === undefined) {
                dispatch({type: FETCH_MOVIE_BY_ID, payload: {}})
                return
            }
            dispatch({type: LOAD})
            let movie = await axios.get(`http://localhost:5000/api/movie/${id}`)
            let treilerId = await Api.FetchMovieTrailer(movie.data.id)
            let payload = {...movie.data, treilerId: treilerId}
            dispatch({type: FETCH_MOVIE_BY_ID, payload: payload})

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