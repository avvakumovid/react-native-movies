import {StyleSheet} from 'react-native';
import {store} from './src/store/store'
import {Provider} from 'react-redux';
import Genre from './src/components/Genre/Genre';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/components/Detail/Detail';
import React from 'react';
import MovieList from './src/components/MovieList/MovieList';

export default function App() {
    const Stack = createNativeStackNavigator()
    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: '#1c2228', borderBottomWidth: 0},
                    headerTitleStyle: {color: 'white'},
                    headerTitleAlign: 'center',
                    headerTintColor: 'white', gestureDirection: 'vertical'
                }}>
                    <Stack.Screen
                        name="Genre"
                        component={Genre}
                        options={{title: 'Genre'}}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{title: 'Detail', }}/>
                    <Stack.Screen
                        name="MovieList"
                        component={MovieList}
                        options={{title: 'MovieList', }}/>
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
