import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import SwipeableFlatList from 'react-native-swipeable-list';

import routes from '../../config/routes';
import { Colors, Typography } from '../../styles';
import { getCurrency } from '../../utils/currency';
import { getIncomes, deleteTransaction } from '../../dbHelpers/transactionHelper';

import QuickActions from '../../utils/quickActions';
import TransactionCard from '../../components/Cards/TransactionCard';

const Income = ({navigation, route}) => {
    const focused = useIsFocused();

    const [currency, setCurrency] = useState({});
    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        getCurrency(setCurrency);
        getIncomes(setIncomes);
    }, [focused]);

    // Delete Item
    const __delete = (id) => {
        deleteTransaction(id);
        getIncomes(setIncomes);
    }

    // Update Item
    const __update = (item) => {
        navigation.navigate(routes.AddTransaction, {item: item});
    }

    return (
        <View style={styles.container}>
            {incomes.length == 0 ?
                <View style={styles.emptyContainer}>
                    <Text style={[Typography.H3, {color: Colors.WHITE, textAlign: 'center'}]}>You haven't any income !</Text>
                </View>
            :
                <SwipeableFlatList
                    data={incomes}
                    maxSwipeDistance={140}
                    shouldBounceOnMount={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderQuickActions={({index, item}) => QuickActions(item, __update, __delete)}
                    renderItem={({item, index}) => {
                        return <TransactionCard currency={currency.symbol} key={index} transaction={item} />
                    }}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 20,
        backgroundColor: Colors.BLACK
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
 
export default Income;
 