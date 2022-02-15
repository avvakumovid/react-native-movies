import {Api} from '../../../API/api';

const AUTH_USER = 'AUTH_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const FETCH_WATCH_LIST_SUCCESS = 'FETCH_WATCH_LIST_SUCCESS'
const FETCH_WATCH_LIST_ERROR = 'FETCH_WATCH_LIST_ERROR'
const LOAD_WATCH_LIST = 'LOAD_WATCH_LIST'

    export const loginAction = (username, password) => {
    return async (dispatch) => {
        const token = await Api.Login(username, password)
        const data = await Api.Auth(token)
        dispatch({type: AUTH_USER, payload: {user: data.user, token: token}})
    }
}

export const authAction = () => {
    return async (dispatch) => {
        const data = await Api.Auth()
        dispatch({type: AUTH_USER, payload: data.user})
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        dispatch({type: LOGOUT_USER})
    }
}

export const fetchWatchList = (token) => {
    return async (dispatch) => {
        dispatch({type: LOAD_WATCH_LIST})
        const response = await Api.FetchWatchList(token)
        if (response) {
            const watchList = response.data
            dispatch({type: FETCH_WATCH_LIST_SUCCESS, payload: watchList})
        }
    }
}

export const deleteFromWatchList = (userid, movieId, token) => {
    return async (dispatch) => {
        await Api.DeleteMovieFromWatchList(userid, movieId)
        const response = await Api.FetchWatchList(token)
        if (response) {
            const watchList = response.data
            dispatch({type: FETCH_WATCH_LIST_SUCCESS, payload: watchList})
        }

    }
}