import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Colors, Typography } from '../../../styles';

const MoneyBoxCard = (props) => {
    const item = props.item;
    const currency = props.currency;
    const progress = (item.collected / item.total) * 100;

    return (
        <View style={styles.container}>
            <Text style={[Typography.H1, {color: Colors.WHITE, marginBottom: 5}]}>{item.name}</Text>
            <Text style={[Typography.TAGLINE, {marginBottom: 20, textAlign: 'left'}]}>
                <Text style={{color: Colors.GRAY_THIN}}>{currency} {item.collected} / {item.total} </Text>
                {item.collected == item.total ? 
                    <Text style={{color: Colors.SUCESS}}>collected</Text>
                : null}
            </Text>

            {/* Progress Bar */}
            <View style={[styles.progressBarContainer, item.collected == item.total ? {borderColor: Colors.SUCESS} : {borderColor: Colors.PRIMARY}]}>
                <View style={[styles.progressBar, {width: progress + '%'}, item.collected == item.total ? {backgroundColor: Colors.SUCESS} : {backgroundColor: Colors.PRIMARY}]}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 0,
        borderRadius: 15,
        backgroundColor: Colors.LIGHT_BLACK
    },
    progressBarContainer: {
        borderWidth: 1,
        borderRadius: 5,
    },
    progressBar: {
        padding: 3,
        borderRadius: 3
    }
});
 
export default MoneyBoxCard;
 