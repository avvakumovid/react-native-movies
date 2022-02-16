import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native'


const Auth = ({action, title}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const styles = StyleSheet.create({
        main: {
            paddingTop: 40,
            paddingBottom: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            backgroundColor: '#232a31'
        },
        input: {
            marginBottom: 20,
            backgroundColor: 'white',
            height: 40,
            width: 200,
            padding: 5
        },
        btn: {
            marginTop: 20,
        }
    })

    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder='Username'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder='Password'
                secureTextEntry={true}
            />
            <Button
                color='#91c8f6'
                onPress={()=>{
                action(username, password)
            }} title={title}/>
        </View>
    );
};

export default Auth;