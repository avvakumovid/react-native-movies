import React, {useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';


const GenreItem = ({img, text}) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    Image.getSize(img, (w, h) => {
        setWidth(w)
        setHeight(h)
    })
    const styles = StyleSheet.create({
        logo: {

            width: '100%',
            height: '100%'

        }
    })
    return (
        <View style={{flex: 4}}>
            {/*<Image*/}
            {/*    style={styles.logo}*/}
            {/*    source={{*/}
            {/*        uri: img,*/}
            {/*    }}/>*/}
            <Text style={{color: 'green'}}>{text}</Text>
        </View>
    );
};

export default GenreItem;