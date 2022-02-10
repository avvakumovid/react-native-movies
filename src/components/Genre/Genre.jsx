import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useAction} from '../../hooks/useAction';
import GenreItem from './GenreItem';

const Genre = ({navigation}) => {
    const {genre, loading, error} = useSelector(state => state.movie)
    const {fetchGenre, setCurrentPage} = useAction()
    //const navigate = useNavigate()
    useEffect(() => {
        fetchGenre();
        setCurrentPage()
    }, [])

    const icons = {
        Action: require('../../img/Action.png'),
        Adventure: require('../../img/Adventure.png'),
        Animation: require('../../img/Animation.png'),
        Comedy: require('../../img/Comedy.png'),
        Crime: require('../../img/Crime.png'),
        Documentary: require('../../img/Documentary.png'),
        Drama: require('../../img/Drama.png'),
        Family: require('../../img/Family.png'),
        Fantasy: require('../../img/Fantasy.png'),
        History: require('../../img/History.png'),
        Horror: require('../../img/Horror.png'),
        Music: require('../../img/Music.png'),
        Mystery: require('../../img/Mystery.png'),
        Romance: require('../../img/Romance.png'),
        Science: require('../../img/Science.png'),
        Thriller: require('../../img/Thriller.png'),
        War: require('../../img/War.png'),
        Western: require('../../img/Western.png'),
    }
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            marginTop: 20,
            color: 'red',
        },
        logo: {
            width: 300,
            height: 300
        }

    })
    const renderItem = ({item}) => (
        <GenreItem img={item.img} text={item.name}/>
    );
    const genres = genre.map(item => <TouchableOpacity key={item.id}
                                           style={{backgroundColor: '#1c2228', alignItems: 'center', marginBottom: 30}}
                                           onPress={() => navigation.navigate('MovieList', {
                                               id: item.id,
                                           })}>
        <Image
            style={styles.logo}
            source={
                icons[item.name]
            }
        />
        <Text style={{color: 'white', fontSize: 30}} >{item.name}</Text>
    </TouchableOpacity>)
    // const genres = genre.map(item => <GenreItem name={item.name} id={item.id}/>)
    if (loading) {
        return (
            <Text>
                Идет загрузка
            </Text>
        )
    }
    if (error) {
        return <Text>{error}</Text>
    }
    return (
        <ScrollView>
            <View style={{
                paddingTop: 40,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#1c2228'
            }}>
                {/*<View style={{*/}
                {/*    backgroundColor: 'purple', width: 100,*/}
                {/*    height: 100,*/}
                {/*    margin: 4,*/}
                {/*}}></View>*/}
                {genres}
            </View>
            {/*<View style={{backgroundColor: 'blue', flex: 3}}></View>*/}
        </ScrollView>
    )
        ;
};

export default Genre;