import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {getRatingColor} from '../../services/RitingColor/ratingColor';


const MovieListItem = (
    {
        navigation,
        src,
        title,
        overview,
        voteAverage,
        releaseDate,
        id,
        _id,
        ...props
    }) => {
    const style = StyleSheet.create({
        item: {
            borderColor: '#91c8f6',
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: '#1c2228',
            alignItems: 'center',
            marginBottom: 30,
        },
        text: {
            color: 'white',
            fontSize: 20,
            marginBottom: 10,
            width: 250,
            textAlign: 'center'
        },
    })

    const ratingColor = getRatingColor(voteAverage)
    return (
        <TouchableOpacity
            style={style.item}
            onPress={
                () => navigation.navigate('Detail', {
                    id: _id,
                })
            }>
            {/*<img style={img} alt={title} src={src}/>*/}
            <Image
                style={{
                    width: 250,
                    height: 375,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginBottom: 10
                }
                }
                source={
                    {uri: src}
                }/>
            <Text style={style.text}>{title}</Text>
            <Text style={{...style.text, color: ratingColor}}>Rating: {voteAverage}</Text>
        </TouchableOpacity>
    );
};

export default MovieListItem;