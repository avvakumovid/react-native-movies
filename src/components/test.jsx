import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, StyleSheet, TextInput} from 'react-native';
import {setText} from '../store/reducers/testReduser';

const Test = () => {
    const {text} = useSelector(state => state.test)
    const dispatch = useDispatch()

    const setDispatchText = (text) => {
        dispatch(setText(text))
    }
    const styles = StyleSheet.create({
        input: {
            height: 22
        }
    })
    return (
        <>
            <Text>
                {text}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setDispatchText}
                value={text}
            />
        </>
    );
};

export default Test;