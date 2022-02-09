import {applyMiddleware, combineReducers, createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import testReducer from './reducers/testReduser';
import {movieReducer} from './reducers/movieReducer';

const reducers = combineReducers({
    test: testReducer,
    movie: movieReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))