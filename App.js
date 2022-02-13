import {StyleSheet} from 'react-native';
import {store} from './src/store/store'
import {Provider, useSelector} from 'react-redux';
import Genre from './src/components/Genre/Genre';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/components/Detail/Detail';
import React, {useState} from 'react';
import MovieList from './src/components/MovieList/MovieList';
import Login from './src/components/Auth/Login/Login';
import Navigate from './src/components/Navigate';

export default function App() {

    return (
        <NavigationContainer>
            <Provider store={store}>
                <Navigate/>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
