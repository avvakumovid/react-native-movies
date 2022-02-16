import React, {useEffect} from 'react';
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useAction} from '../../hooks/useAction';

const Genre = ({navigation}) => {
    const {genre, loading, error} = useSelector(state => state.movie)
    const {fetchGenre, setCurrentPage} = useAction()
    useEffect(() => {
        fetchGenre();
        setCurrentPage()
    }, [])
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            marginTop: 20,
            color: 'red',
        },
        logo: {
            width: 250,
            height: 375,
            borderRadius: 10,
            marginBottom: 10
        },
        main: {
            paddingTop: 40,
            paddingBottom: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#232a31'
        },
        text: {
            color: 'white',
            fontSize: 30
        },
        item: {
            backgroundColor: '#232a31',
            alignItems: 'center',
            marginBottom: 30
        }
    })

    const genres = genre.map(item => {
        return (<TouchableOpacity key={item.id}
                                  style={styles.item}
                                  onPress={() => navigation.navigate('MovieList', {
                                      id: item.id,
                                  })}>
            <Image
                style={styles.logo}
                source={
                    {uri: item.img}
                }
            />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>)
    })
    if (loading) {
        return (
            <View style={styles.main}>
                <ActivityIndicator size="large" color="#91c8f6"/>
            </View>
        )

    }
    // if (error) {
    //     return <Text>{error}</Text>
    // }
    return (
        <ScrollView>
            <View style={styles.main}>
                {genres}
            </View>
        </ScrollView>
    );
};

export default Genre;