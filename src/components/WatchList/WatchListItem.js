import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {getRatingColor} from '../../services/RitingColor/ratingColor';
import {Api} from '../../API/api';
import removeBookmark from '../../../assets/icons/removeBookmark.png';
import {useAction} from '../../hooks/useAction';


const WatchListItem = (
    {
        navigation,
        src,
        title,
        overview,
        voteAverage,
        releaseDate,
        id,
        _id,
        currentUser,
        token,
        key,
        ...props
    }) => {
    const {deleteFromWatchList} = useAction()
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
            textAlign: 'center',
            flexWrap: 'wrap',
            maxWidth: 250,
            width: 'auto'
        },
        image: {
            width: 250,
            height: 375,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginBottom: 10
        },
        appButtonContainer: {
            padding: 5,
        },
        icon: {
            width: 30,
            height: 30
        }

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
            <Image
                style={style.image}
                source={
                    {uri: src}
                }/>
            <Text style={style.text}>{title}</Text>
            <View style={{
                padding: 10,
                width: 250,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{...style.text, color: ratingColor}}>Rating: {voteAverage}</Text>
                <TouchableOpacity
                    style={style.appButtonContainer}
                    onPress={() => {
                        deleteFromWatchList(currentUser.id, _id, token)
                    }}>
                    <Image style={style.icon}
                           source={removeBookmark}/>
                </TouchableOpacity></View>
        </TouchableOpacity>
    );
};

export default WatchListItem;