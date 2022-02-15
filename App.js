import {StyleSheet} from 'react-native';
import {store} from './src/store/store'
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
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
