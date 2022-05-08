import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Colors, Typography } from '../../../styles';

const NotificationCard = (props) => {
    const notification = props.notification;
    const date = new Date(notification.date)

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={notification.icon} color={Colors.WHITE} size={15} />
            </View>

            <Text style={{flex: 1, marginLeft: 5}}>
                {notification.type == 'income' ?
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>You received </Text>
                :
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>You spent </Text>
                }
                <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{notification.amount}$</Text>
                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}> for </Text>
                <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{notification.category}</Text>
                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}> at </Text>
                <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</Text>
                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>.</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.BLACK
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_BLACK
    },
});
 
export default NotificationCard;
 