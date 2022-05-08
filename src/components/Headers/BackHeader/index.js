import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Colors, Typography } from '../../../styles';

const BackHeader = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{padding: 5, alignItems: 'flex-start'}}
                onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" color={Colors.WHITE} size={20} />
            </TouchableOpacity>

            <Text style={[Typography.H3, {color: Colors.WHITE}]}>{props.title}</Text>
            
            <Icon name="chevron-right" color={Colors.BLACK} size={25} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.BLACK
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
 
export default BackHeader;
 