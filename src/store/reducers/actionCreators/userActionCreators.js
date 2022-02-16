import {Api} from '../../../API/api';

const AUTH_USER = 'AUTH_USER'
const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
const AUTH_USER_ERROR = 'AUTH_USER_ERROR'
const AUTHORIZATION = 'AUTHORIZATION'
const REGISTRATION = 'REGISTRATION'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const REGISTRATION_ERROR = 'REGISTRATION_ERROR'
const LOGOUT_USER = 'LOGOUT_USER'
const FETCH_WATCH_LIST_SUCCESS = 'FETCH_WATCH_LIST_SUCCESS'
const FETCH_WATCH_LIST_ERROR = 'FETCH_WATCH_LIST_ERROR'
const LOAD_WATCH_LIST = 'LOAD_WATCH_LIST'

    export const loginAction = (username, password) => {
            return async (dispatch) => {
                dispatch({type: AUTHORIZATION})
                const response = await Api.Login(username, password)
                if(response.status < 400){
                    const data = await Api.Auth(response.data)
                    dispatch({type: AUTH_USER_SUCCESS, payload: {user: data.user, token: response.data, error: response.data.message}})
                }else{
                    dispatch({type: AUTH_USER_ERROR, payload: {error: response.data.message}})
                }


            }
}

export const registrationAction = (username, password) => {
    return async (dispatch) => {
        dispatch({type: REGISTRATION})
        const response = await Api.Registration(username, password)
        if(!response.error){
            console.log(response)
            let msg = ''
            if(response.message){
                msg = response.message
            }else{
                msg = response
            }
            dispatch({type: REGISTRATION_SUCCESS, payload: {error: msg}})
        }else{
            dispatch({type: REGISTRATION_ERROR, payload: {error: response.error.errors[0].msg}})
        }
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