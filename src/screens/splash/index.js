import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import { Colors } from '../../styles';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image 
                resizeMode='cover'
                style={{ width: 200, height: 200}}
                source={require('../../assets/images/logo.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLACK
    },
});
 
export default Splash;
 