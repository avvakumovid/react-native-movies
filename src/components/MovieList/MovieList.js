import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useAction} from '../../hooks/useAction';
import {useSelector} from 'react-redux';
import MovieListItem from './MovieListItem';

const MovieList = ({route, navigation}) => {
    let {id} = route.params
    if (!id) {
        id = '2';
    }
    const {
        movies,
        totalPages,
        itemInPage,
        loading,
        error,
        currentPage
    } = useSelector(state => state.movie)
    const {fetchMoviesByGenreId, setCurrentPage} = useAction()
    const [genreId, setGenreId] = useState(parseInt(id))
    const [text, setText] = useState('Start')
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchMoviesByGenreId(page, genreId)
    }, [page])
    const movieList = () => {
        return movies.map(m => {
            let src = 'https://image.tmdb.org/t/p/w500/' + m.poster_path
            return (
                <MovieListItem src={src} title={m.title} id={m.id} overview={m.overview} key={m.id}
                               voteAverage={m.vote_average} releaseDate={m.release_date} _id={m._id}
                               navigation={navigation}/>
            )
        })
    }

    if (loading) {
        return (
            <View>
                <Text>Загрузка</Text>
            </View>)
    }
    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>)
    }
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <ScrollView
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    setPage(page + 1)
                }
            }}
            scrollEventThrottle={400}
        >
            <View style={{
                paddingTop: 40,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#1c2228'
            }}>
                {movieList()}
            </View>
        </ScrollView>
    );
};

export default MovieList;