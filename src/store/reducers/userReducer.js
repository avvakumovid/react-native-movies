const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
const AUTH_USER_ERROR = 'AUTH_USER_ERROR'
const AUTHORIZATION = 'AUTHORIZATION'
const LOGOUT_USER = 'LOGOUT_USER'
const FETCH_WATCH_LIST_SUCCESS = 'FETCH_WATCH_LIST_SUCCESS'
const FETCH_WATCH_LIST_ERROR = 'FETCH_WATCH_LIST_ERROR'
const LOAD_WATCH_LIST = 'LOAD_WATCH_LIST'
const REGISTRATION = 'REGISTRATION'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const REGISTRATION_ERROR = 'REGISTRATION_ERROR'


const initialState = {
    isAuth: false,
    token: '',
    loading: false,
    error: '',
    currentUser: {
        id: '',
        roles: [],
        username: '',
        watchlist: []
    },
    watchlist: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_SUCCESS:
            return {...state, isAuth: true, loading: false, currentUser: action.payload.user, token: action.payload.token}
        case AUTH_USER_ERROR:
            return {...state, isAuth: false, loading: false, error: action.payload.error}
        case AUTHORIZATION:
            return {...state, loading: true}
        case REGISTRATION:
            return {...state, loading: true, error: ''}
        case REGISTRATION_SUCCESS:
            return {...state, loading: false, error: action.payload.error}
        case REGISTRATION_ERROR:
            return {...state, loading: false, error: action.payload.error}
        case LOGOUT_USER:
            return {...state, isAuth: false, currentUser: initialState.currentUser}
        case FETCH_WATCH_LIST_SUCCESS:
            return {...state, loading: false, watchlist: action.payload}
        case FETCH_WATCH_LIST_ERROR:
            return {...state, loading: false, error: action.payload}
        case LOAD_WATCH_LIST:
            return {...state, loading: true, error: null}
        default:
            return state
    }
}

export default userReducer
