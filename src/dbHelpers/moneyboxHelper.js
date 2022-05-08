import { Alert } from 'react-native';
import db from './openDB';

// Table Name
const tableName = 'money_box';

// Create Table
export const createMoneyBoxTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS ' + tableName +
            ' (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NOT NULL, total FLOAT NOT NULL, collected FLOAT NOT NULL);',
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

// Get MoneyBox
export const getMoneyBox = (setMoneyBox) => {
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
                            name: row.name,
                            total: row.total,
                            collected: row.collected
                        })
                    }
                }
                else {
                    console.log('empty');
                }
                setMoneyBox(result);
            },
            error => {
                console.log(error);
            }
        );
    });
}

// Insert MoneyBox
export const insertMoneyBox = (item) => {
    if (item.name.length == 0 || item.total <= 0 || item.collected < 0) {
        Alert.alert('Oups !', 'Please, write correct data.')
    }
    else {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO ' + tableName + '(name, total, collected) VALUES(?,?,?);',
                [item.name, item.total, item.collected],
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

// Update MoneyBox
export const updateMoneyBox = (item) => {
    if (item.name.length == 0 || item.total <= 0 || item.collected < 0) {
        Alert.alert('Oups !', 'Please, write correct data.')
    }
    else {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE ' + tableName + ' SET name = ?, total = ?, collected = ? WHERE id = ?',
                [item.name, item.total, item.collected, item.id],
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

// Delete MoneyBox
export const deleteMoneyBox = (id) => {
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
export const deleteMoneyBoxTable = () => {
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