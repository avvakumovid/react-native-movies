import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useAction} from '../../hooks/useAction';
import {useSelector} from 'react-redux';
import {getRatingColor} from '../../services/RitingColor/ratingColor';




const Detail = ({route, navigation}) => {
    let {id} = route.params;
    let {fetchMovieById, resetMovie} = useAction()
    useEffect(() => {
        fetchMovieById(id)
        return () => {
            resetMovie()
        }
    }, [])
    let {loadingMovie, error, movie} = useSelector(state => state.movie)
    let [src, setSrc] = useState('../../../assets/load.svg')
    useEffect(() => {
        if (movie) {
            setSrc(`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`)
        }
    }, [movie])
    const ratingColor = getRatingColor(movie?.vote_average)
    const windowHeight = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        main: {
            padding: 40,
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#1c2228',
            minHeight: windowHeight
        },
        image: {
            width: 250,
            height: 375,
            borderRadius: 10,
            marginBottom: 10,
        },
        text: {
            color: 'white',
            textAlign: 'left',
            marginBottom: 10,
            fontSize: 18
        },
        info: {
            paddingTop: 20
        },
        bold: {
            fontWeight: 'bold',
            fontSize: 20

        }
    })
    if (loadingMovie) {
        return (
            <View style={styles.main}>
                <ActivityIndicator size="large" color="#91c8f6"/>
            </View>
        )
    }
    if (error) {
        return (
            <View style={styles.main}>
                <Text>{error}</Text>
            </View>)
    }
    return (
        <ScrollView>
            <View style={styles.main}>
                <View>
                    <Image style={styles.image}
                           source={
                               {uri: src}
                           }/>
                </View>
                <View style={styles.info}>
                    <Text style={{...styles.text, ...styles.bold}}>{movie?.title}</Text>
                    {/*<Trailer style={padding} witdh="560" height="315" moviePath={movie.treilerId}*/}
                    {/*         title="YouTube video player"/>*/}
                    {/*<ReactStars count={10} value={movie.vote_average} size={50} edit={false} half={true}*/}
                    {/*            color2={color}/>*/}
                    <Text style={{...styles.text, color: ratingColor}}><Text style={styles.bold}>Rating:</Text> {movie?.vote_average}</Text>
                    <Text style={styles.text}><Text style={styles.bold}>Release:</Text> {movie?.release_date}</Text>
                    <Text style={styles.text}><Text style={styles.bold}>Overview:</Text> {movie?.overview}</Text>
                </View>
            </View>
        </ScrollView>
    );

};

export default Detail