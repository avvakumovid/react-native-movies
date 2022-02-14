const AUTH_USER = 'AUTH_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const FETCH_WATCH_LIST_SUCCESS = 'FETCH_WATCH_LIST_SUCCESS'
const FETCH_WATCH_LIST_ERROR = 'FETCH_WATCH_LIST_ERROR'
const LOAD_WATCH_LIST = 'LOAD_WATCH_LIST'


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
        case AUTH_USER:
            return {...state, isAuth: true, currentUser: action.payload.user, token: action.payload.token}
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
