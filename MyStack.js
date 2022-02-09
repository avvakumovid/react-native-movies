import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Genre from './src/components/Genre/Genre';
import Detail from './src/components/Detail/Detail';

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Genre"
                    component={Genre}
                    options={{title: 'Genre'}}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{title: 'Detail'}}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default MyStack;