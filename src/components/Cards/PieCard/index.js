import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CircularProgress from '../../CircularProgress';

import { Colors, Typography } from '../../../styles';

const PieCard = (props) => {
    const incomes = props.incomes;
    const expenses = props.expenses;

    const payoutPercent = incomes == 0 && expenses == 0 ? 0 : incomes == 0 ? 100 : ((expenses / incomes) * 100).toFixed(2);
    const savedPercent = incomes == 0 && expenses == 0 ? 0 : (100 - payoutPercent).toFixed(2);

    return (
        <View style={styles.container}>
            <View style={styles.pieContainer}>
                <CircularProgress percent={payoutPercent} />
            </View>
            <View style={styles.numbersContainer}>
                <View style={styles.rowContainer}>
                    <Icon name="circle" size={15} color={Colors.BLACK} />
                    <Text style={[Typography.BODY, {marginLeft: 5, color: Colors.BLACK}]}>Payout({payoutPercent}%)</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Icon name="circle" size={15} color={Colors.WHITE} />
                    <Text style={[Typography.BODY, {marginLeft: 5, color: Colors.WHITE}]}>Saved ({savedPercent}%)</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderRadius: 16,
        flexDirection: 'row',
        backgroundColor: Colors.PRIMARY
    },
    pieContainer: {
        padding: 15
    },
    numbersContainer: {
        flex: 1,
        padding: 10,
        paddingLeft: 0,
        justifyContent: 'center'
    },
    rowContainer: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
});
 
export default PieCard;
 