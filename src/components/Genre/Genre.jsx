import React, {useEffect} from 'react';
import {FlatList, Text, StyleSheet, Image, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useAction} from '../../hooks/useAction';
import GenreItem from './GenreItem';
import img from '../../img/Thriller.png'

const Genre = () => {
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
        "Science Fiction": require('../../img/ScienceFiction.png'),
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
            width: 200,
            height: 200
        }

    })
    const renderItem = ({item}) => (
        <GenreItem img={item.img} text={item.name}/>
    );
    const genres = genre.map(item => <View key={item.id} style={{backgroundColor: 'lightgreen'}}><Text>{item.name}</Text>
        <Image
            style={styles.logo}
            source={
                icons[item.name]
            }/>
    </View>)
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
        <ScrollView style={{flex: 1}}>
            {genres}
        </ScrollView>
    );
};

export default Genre;