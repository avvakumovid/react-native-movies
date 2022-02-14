import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {movieReducer} from './reducers/movieReducer';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
    movie: movieReducer,
    user: userReducer
})



export const store = createStore(reducers, applyMiddleware(thunk))
window.store = store