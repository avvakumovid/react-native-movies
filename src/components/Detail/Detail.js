import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {useAction} from '../../hooks/useAction';
import {useSelector} from 'react-redux';

// const Detail = ({route, navigation}) => {
//     const {name, id} = route.params;
//     return (
//         <View>
//             <Text>{name}{id}</Text>
//         </View>
//     );
// };

// export default Detail;

const Detail = ({route, navigation}) => {
    let {id} = route.params;
    let {fetchMovieById, resetMovie} = useAction()
    useEffect(() => {
        fetchMovieById(id)
        return () => {
            resetMovie()
        }
    }, [])
    let {loading, error, movie} = useSelector(state => state.movie)
    let [color, setColor] = useState('')
    let [src, setSrc] = useState('')
    useEffect(() => {
        if (movie) {
            // setColor(getRaitingColor(movie.vote_average))
            setSrc(`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`)
        }
    }, [movie])
    if (loading) {
        return (
            <Text>
                Идет загрузка
            </Text>
        )
    }
    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>)
    }
    return (
        <View>
            <View>
                <View>
                    <Image style={{
                        width: 100,
                        height: 100
                    }
                    }
                           source={
                               {uri: src}
                           }/>
                </View>
                <View>
                    <Text>{movie?.title}</Text>
                    {/*<Trailer style={padding} witdh="560" height="315" moviePath={movie.treilerId}*/}
                    {/*         title="YouTube video player"/>*/}
                    {/*<ReactStars count={10} value={movie.vote_average} size={50} edit={false} half={true}*/}
                    {/*            color2={color}/>*/}
                    <Text>Raiting: {movie?.vote_average}</Text>
                    <Text>Relese: {movie?.release_date}</Text>
                    <Text>Overview:{movie?.overview}</Text>
                </View>
            </View>
        </View>
    );

};

export default Detail