import AsyncStorage from '@react-native-async-storage/async-storage';

// Get Currency
export const getCurrency = async (setCurrency) => {
    try {
        const jsonCurrency = await AsyncStorage.getItem('currency');
        if(jsonCurrency !== null) {
            const currency = JSON.parse(jsonCurrency);
            setCurrency(currency);
        }
        else {
            setCurrency(null);
        }
    } catch(error) {
        console.log(error);
    }
}

// Store Currency
export const storeCurrency = async (currency) => {
    try {
        const jsonCurrency = JSON.stringify(currency);
        await AsyncStorage.setItem('currency', jsonCurrency);
    } catch (error) {
        console.log(error);
    }
}  

// App Currencies
export const currencies = [
    {
        id: '1',
        name: 'Dollar',
        symbol: '$'
    },
    {
        id: '2',
        name: 'Euro',
        symbol: '€'
    },
    {
        id: '3',
        name: 'Pounds Sterling',
        symbol: '£'
    },
    {
        id: '4',
        name: 'Russian Ruble',
        symbol: '₽'
    },
    {
        id: '5',
        name: 'Chinese Yuan',
        symbol: '¥ /元'
    },
    {
        id: '6',
        name: 'Indian Rupee',
        symbol: '₹'
    },
    {
        id: '7',
        name: 'Tunisian Dinar',
        symbol: 'د.ت'
    },
    {
        id: '8',
        name: 'Bitcoin',
        symbol: '₿'
    },
]

