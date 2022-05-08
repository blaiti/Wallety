import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import routes from '../../../config/routes';
import { Colors, Typography } from '../../../styles';
import AuthContext from '../../../context/AuthContext';

const HomeHeader = () => {
    const navigation = useNavigation();

    const {state} = React.useContext(AuthContext);
    
    // Get User
    const user = state.user != null ? state.user : {firstName: '', lastName: '', joined: Date.now()};
    const date = new Date(user.joined);
    
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Welcome back,</Text>
                <Text style={[Typography.H2, {color: Colors.WHITE}]}>{user.firstName} {user.lastName}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate(routes.Notifications)} >
                    <Icon name="bell" color={Colors.WHITE} size={25} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.BLACK
    },
});
 
export default HomeHeader;
 