import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';


const GenreItem = ({name, id, }) => {
    const [image, setImage] = useState('')
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const fetchImage = async () => {
            try {
                // const response = await import(`../../img/${name}.png`) // change relative path to suit your needs
                // setImage(response.default)
            } catch (e) {

            }
        }
        fetchImage()
    }, [])
    Image.getSize(image, (h, w) => {
        setHeight(h)
        setWidth(w)
    })
    const styles = StyleSheet.create({
        container: {
            flex: 3,
            marginTop: 20,
            color: 'red',
        },
        logo: {
            width: width,
            height: height,
            flex: 1

        }
    })

    return (

        <View key={id} style={{flex: 2,backgroundColor: 'lightgreen'}}><Text>{name}</Text>
            <Image
                style={styles.logo}
                source={image}
            />
        </View>
    );
};

export default GenreItem;