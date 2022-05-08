import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from './AuthContext';
import { storeCurrency } from '../utils/currency';
import { createMoneyBoxTable, deleteMoneyBoxTable } from '../dbHelpers/moneyboxHelper';
import { createTransactionsTable, deleteTransactionsTable } from '../dbHelpers/transactionHelper';

function AuthProvider({children}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_USER':
          return {
            ...prevState,
            user: action.user,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let jsonUser;
      try {
        jsonUser = await AsyncStorage.getItem('user');
      } catch (e) {
        console.log(e)
      }
      dispatch({type: 'RESTORE_USER', user: JSON.parse(jsonUser)});
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(() => ({
      // Sign In
      signIn: async (user) => {
        // Store User
        const jsonUser = JSON.stringify(user);
        await AsyncStorage.setItem('user', jsonUser);
        // Store default currency (Dollar $)
        storeCurrency({
          id: '1',
          name: 'Dollar',
          symbol: '$'
        });
        // Create MoneyBox & Transactions Tables
        createMoneyBoxTable();
        createTransactionsTable();
        dispatch({type: 'SIGN_IN', user: jsonUser});
      },
      // Sign Out
      signOut: async () => {
        // Delete User
        await AsyncStorage.removeItem('user');
        // Delete Database
        deleteMoneyBoxTable();
        deleteTransactionsTable();
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{authContext, state}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
