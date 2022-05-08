import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'Waletty',
        location: 'default'
    },
    () => {
        console.log('connected');
    },
    error => {
        console.log(error);
    }
);

export default db;