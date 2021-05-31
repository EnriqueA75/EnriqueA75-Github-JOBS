import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RouteMap } from '../constants/RouteMap';
import { AuthLogin } from '../screens/auth/AuthLogin';
import { TabNavigation } from './TabNavidation';

const LoginStack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <LoginStack.Navigator initialRouteName={RouteMap.LoginNavigation.login}>
      <LoginStack.Screen
        options={{
          headerShown: false,
        }}
        name={RouteMap.LoginNavigation.login}
        component={AuthLogin}
      />
      <LoginStack.Screen
        options={{
          headerShown: false,
        }}
        name={RouteMap.LoginNavigation.tabs}
        component={TabNavigation}
      />
    </LoginStack.Navigator>
  );
};
