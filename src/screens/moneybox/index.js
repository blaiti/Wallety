import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwipeableFlatList from 'react-native-swipeable-list';

import routes from '../../config/routes';
import { Colors, Typography } from '../../styles';
import { getCurrency } from '../../utils/currency';
import { getMoneyBox, deleteMoneyBox } from '../../dbHelpers/moneyboxHelper';

import QuickActions from '../../utils/quickActions';
import MoneyBoxCard from '../../components/Cards/MoneyBoxCard';

const MoneyBox = ({navigation}) => {
    const focused = useIsFocused();

    const [moneybox, setMoneyBox] = useState([]);
    const [currency, setCurrency] = useState({});

    useEffect(() => {
        getMoneyBox(setMoneyBox);
        getCurrency(setCurrency);
    }, [focused]);

    // Delete Item
    const __delete = (id) => {
        deleteMoneyBox(id);
        getMoneyBox(setMoneyBox);
    }

    // Update Item
    const __update = (item) => {
        navigation.navigate(routes.AddMoneyBox, {item: item})
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[Typography.H1, {color: Colors.WHITE, marginBottom: 10}]}>MoneyBox</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.iconContainer}
                    onPress={() => navigation.navigate(routes.AddMoneyBox)}>
                        <Icon name="plus" color={Colors.WHITE} size={15} />
                </TouchableOpacity>
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                {moneybox.length == 0 ?
                    <View style={styles.emptyContainer}>
                        <Text style={[Typography.H3, {color: Colors.WHITE, textAlign: 'center'}]}>You haven't any moneybox !</Text>
                    </View>
                :
                    <SwipeableFlatList
                        data={moneybox}
                        maxSwipeDistance={140}
                        shouldBounceOnMount={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderQuickActions={({index, item}) => QuickActions(item, __update, __delete)}
                        renderItem={({item, index}) => {
                            return <MoneyBoxCard key={index} item={item} currency={currency.symbol} />
                        }}
                    />
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    // Header
    headerContainer: {
        padding: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_BLACK
    },
    // Body
    bodyContainer: {
        flex: 1,
        paddingRight: 20,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
 
export default MoneyBox;
 