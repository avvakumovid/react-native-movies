import {StyleSheet, View} from 'react-native';
import {store} from './src/store/store'
import {Provider} from 'react-redux';
import Test from './src/components/test';
import {Text} from 'react-native';
import Genre from './src/components/Genre/Genre';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                    <Genre/>
                {/*<Genre/>*/}
                {/*<Test/>*/}
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
