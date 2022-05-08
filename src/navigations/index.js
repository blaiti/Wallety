import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import routes from '../config/routes';
import { Colors, Typography } from '../styles';
import AuthContext from '../context/AuthContext';

// Import Screens
import Home from '../screens/home';
import Transactions from '../screens/transactions';
import MoneyBox from '../screens/moneybox';
import Settings from '../screens/settings';
import Notifications from '../screens/home/notifications';
import AddMoneyBox from '../screens/moneybox/add-money-box';
import AddTransaction from '../screens/transactions/add-transaction';
import Splash from '../screens/splash';
import GetStarted from '../screens/auth';
import Login from '../screens/auth/login';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// Bottom Tab Bar Navigator

function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName={routes.Home}
        activeColor={Colors.WHITE}
        inactiveColor={Colors.GRAY_DARK}
        barStyle={[Typography.BODY, { backgroundColor: Colors.BLACK, borderTopWidth: 0.3 }]}>
            <Tab.Screen 
                name={routes.Home} 
                component={Home}
                options={{
                    tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.Home}</Text>,
                    tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={23} />
                    ),
                }} />
            <Tab.Screen 
                name={routes.Transactions} 
                component={Transactions}
                options={{
                    tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.Transactions}</Text>,
                    tabBarIcon: ({ color }) => (
                      <Icon name="repeat" color={color} size={23} />
                    ),
                }} />
                <Tab.Screen 
                    name={routes.MoneyBox} 
                    component={MoneyBox}
                    options={{
                        tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.MoneyBox}</Text>,
                        tabBarIcon: ({ color }) => (
                          <Icon name="gift" color={color} size={23} />
                        ),
                    }} />
            <Tab.Screen 
                name={routes.Settings} 
                component={Settings}
                options={{
                    tabBarLabel: <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{routes.Settings}</Text>,
                    tabBarIcon: ({ color }) => (
                    <Icon name="settings" color={color} size={23} />
                    ),
                }} />
    </Tab.Navigator>
  );
}

const RootNavigator = () => {
  const {state} = React.useContext(AuthContext);

  return (
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {state.isLoading ?
              <Stack.Screen name={routes.Splash} component={Splash} />
            : state.user == null ? 
              <>
                <Stack.Screen name={routes.GetStarted} component={GetStarted} />
                <Stack.Screen name={routes.Login} component={Login} />
              </>
            : 
              <>
                <Stack.Screen name='MyTabs' component={MyTabs} />
                <Stack.Screen name={routes.Notifications} component={Notifications} />
                <Stack.Screen name={routes.AddTransaction} component={AddTransaction} />
                <Stack.Screen name={routes.AddMoneyBox} component={AddMoneyBox} />
              </>
            }
          </Stack.Navigator>
      </NavigationContainer>
  );
};
  
export default RootNavigator;