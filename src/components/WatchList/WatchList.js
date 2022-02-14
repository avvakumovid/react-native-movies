import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAction} from '../../hooks/useAction';
import {useSelector} from 'react-redux';
import {fetchWatchList} from '../../store/reducers/actionCreators/userActionCreators';
import WatchListItem from './WatchListItem';

const WatchList = ({route, navigation}) => {
    const {currentUser, token, loading, error, watchlist} = useSelector(state => state.user)
    const {fetchWatchList} = useAction()
    useEffect(() => {
        fetchWatchList(token)
    }, [])
    const createMovieList = () => {
        return watchlist.map(m => {
            let src = 'https://image.tmdb.org/t/p/w500/' + m.poster_path
            return (
                <WatchListItem src={src} title={m.title} id={m.id} overview={m.overview} key={m.id}
                               voteAverage={m.vote_average} releaseDate={m.release_date} _id={m._id}
                               navigation={navigation}/>
            )
        })
    }
    const movieList = createMovieList()


    const styles = StyleSheet.create({
        main: {
            paddingTop: 40,
            paddingBottom: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#1c2228'
        }
    })

    if (loading) {
        return (
            <View style={styles.main}>
                <ActivityIndicator size="large" color="#91c8f6"/>
            </View>)
    }
    if (error) {
        return (
            <View style={styles.main}>
                <Text>{error}</Text>
            </View>)
    }
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        // TODO: Сделать сохранение позиции скрола
        // setPosition(contentOffset.y)
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <ScrollView>
            <View style={styles.main}>
                {movieList}
            </View>
        </ScrollView>
    );
};

export default WatchList;