import React from 'react';
import {Text, View} from 'react-native';

const Detail = ({route, navigation}) => {
    const {name, id} = route.params;
    return (
        <View>
            <Text>{name}{id}</Text>
        </View>
    );
};

export default Detail;