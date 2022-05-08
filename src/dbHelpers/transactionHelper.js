import { Alert } from 'react-native';
import db from './openDB';

// Table Name
const tableName = 'transactions';

// Delete Table
// export const deleteTable = () => {
//     db.transaction((tx) => {
//         tx.executeSql(
//             'DROP TABLE IF EXISTS ' + tableName,
//             [],
//             () => {
//                 console.log('deleted');
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     });
// }

// Create Transactions Table
export const createTransactionsTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS ' + tableName +
            ' (id INTEGER PRIMARY KEY AUTOINCREMENT, category VARCHAR(50) NOT NULL, icon VARCHAR(30) NOT NULL, transaction_date TEXT NOT NULL, amount FLOAT NOT NULL, type VARCHAR(20) NOT NULL);',
            [],
            () => {
                console.log('created');
            },
            error => {
                console.log(error);
            }
        );
    });
}

// Get Transactions
export const getTransactions = (setTransactions) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM ' + tableName,
            [],
            (tx, results) => {
                var len = results.rows.length;
                let result = [];

                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        result.push({
                            id: row.id,
                            category: row.category,
                            icon: row.icon,
                            transaction_date: row.transaction_date,
                            amount: row.amount,
                            type: row.type
                        })
                    }
                }
                else {
                    console.log('empty');
                }
                setTransactions(result);
            },
            error => {
                console.log(error);
            }
        );
    });
}

// Get Incomes
export const getIncomes = (setIncomes) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM ' + tableName + ' WHERE type = ?',
            ['income'],
            (tx, results) => {
                var len = results.rows.length;
                let result = [];

                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        result.push({
                            id: row.id,
                            category: row.category,
                            icon: row.icon,
                            transaction_date: row.transaction_date,
                            amount: row.amount,
                            type: row.type
                        })
                    }
                }
                else {
                    console.log('empty');
                }
                setIncomes(result);
            },
            error => {
                console.log(error);
            }
        );
    });
}

// Get Expenses
export const getExpenses = (setExpenses) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM ' + tableName + ' WHERE type = ?',
            ['expense'],
            (tx, results) => {
                var len = results.rows.length;
                let result = [];

                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        result.push({
                            id: row.id,
                            category: row.category,
                            icon: row.icon,
                            transaction_date: row.transaction_date,
                            amount: row.amount,
                            type: row.type
                        })
                    }
                }
                else {
                    console.log('empty');
                }
                setExpenses(result);
            },
            error => {
                console.log(error);
            }
        );
    });
}

// GetTotal Incomes
export const getTotalIncomes = (setTotalIncomes) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM ' + tableName + ' WHERE type = ?',
            ['income'],
            (tx, results) => {
                var len = results.rows.length;
                let total = 0;

                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        total += row.amount;
                    }
                }
                else {
                    console.log('empty');
                }
                setTotalIncomes(total)
            },
            error => {
                console.log(error);
            }
        );
    });
}

// GetTotal Expenses
export const getTotalExpenses = (setTotalExpenses) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM ' + tableName + ' WHERE type = ?',
            ['expense'],
            (tx, results) => {
                var len = results.rows.length;
                let total = 0;

                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        total += row.amount;
                    }
                }
                else {
                    console.log('empty');
                }
                setTotalExpenses(total)
            },
            error => {
                console.log(error);
            }
        );
    });
}

// Insert Transactions
export const insertTransaction = (item) => {
    if (item.amount == 0) {
        Alert.alert('Oups !', 'Please, write correct data.')
    }
    else {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO ' + tableName + '(category, icon, transaction_date, amount, type) VALUES(?,?,?,?,?);',
                [item.category, item.icon, item.date, item.amount, item.type],
                () => {
                    console.log('inserted');
                },
                error => {
                    console.log(error);
                }
            );
        });
    }
}

// Update Transactions
export const updateTransaction = (item) => {
    if (item.amount == 0) {
        Alert.alert('Oups !', 'Please, write correct data.')
    }
    else {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE ' + tableName + ' SET category = ?, icon = ?, transaction_date = ?, amount = ?, type = ? WHERE id = ?',
                [item.category, item.icon, item.date, item.amount, item.type, item.id],
                () => {
                    console.log('updated');
                },
                error => {
                    console.log(error);
                }
            );
        });
    }
}

// Delete Transaction
export const deleteTransaction = (id) => {
    db.transaction((tx) => {
        tx.executeSql(
            'DELETE FROM ' + tableName + ' WHERE id = ?',
            [id],
            () => {
                console.log('deleted');
            },
            error => {
                console.log(error);
            }
        );
    });
}

// Drop Table
export const deleteTransactionsTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `drop table ${tableName}`,
            [],
            () => {
                console.log('deleted');
            },
            error => {
                console.log(error);
            }
        );
    });
}