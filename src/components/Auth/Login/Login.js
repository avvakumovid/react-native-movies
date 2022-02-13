import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native'
import {useAction} from '../../../hooks/useAction';


const Login = () => {

    const {loginAction} = useAction()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('LOGIN')
    const styles = StyleSheet.create({
        main: {
            paddingTop: 40,
            paddingBottom: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#1c2228'
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
                loginAction(username, password)
            }} title={'Press'}/>
        </View>
    );
};

export default Login;