import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {useAction} from '../../hooks/useAction';
import {useSelector} from 'react-redux';
import MovieListItem from './MovieListItem';

const MovieList = ({route, navigation}) => {
    let {id} = route.params
    if (!id) {
        id = '28';
    }
    const {
        movies,
        totalPages,
        itemInPage,
        loading,
        error,
        currentPage,
        adding
    } = useSelector(state => state.movie)
    const {fetchMoviesByGenreId, setCurrentPage, addMoviesByGenreId} = useAction()
    const [genreId, setGenreId] = useState(parseInt(id))
    const [page, setPage] = useState(1)
    const [position, setPosition] = useState(0)
    useEffect(() => {
        fetchMoviesByGenreId(page, genreId);
    }, [])
    const scrollRef = useRef()
    const onPressTouch = (y) => {
        scrollRef.current?.scrollTo({
            y: y,
            animated: true,
        });
    }
    const createMovieList = () => {
        return movies.map(m => {
            let src = 'https://image.tmdb.org/t/p/w500/' + m.poster_path
            return (
                <MovieListItem src={src} title={m.title} id={m.id} overview={m.overview} key={m.id}
                               voteAverage={m.vote_average} releaseDate={m.release_date} _id={m._id}
                               navigation={navigation} position={position} setPosition={setPosition}/>
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
            backgroundColor: '#232a31'
        }
    })

    if (loading) {
        return (
            <View style={styles.main}>
                <ActivityIndicator size="large" color="#91c8f6"/>
            </View>)
    }
    // if (error) {
    //     return (
    //         <View style={styles.main}>
    //             <Text>{error}</Text>
    //         </View>)
    // }
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <ScrollView
            ref={scrollRef}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    const nextPage = page + 1;
                    if (totalPages >= nextPage) {
                        setPage(nextPage)
                        addMoviesByGenreId(nextPage, genreId)
                    } else {
                        fetchMoviesByGenreId(1, genreId)
                    }

                }
            }}
        >
            <View style={styles.main}>
                {movieList}
                {adding && <ActivityIndicator size="large" color="#91c8f6"/>}
            </View>
        </ScrollView>
    );
};

export default MovieList;