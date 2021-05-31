import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteMap } from '../constants/RouteMap';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AppbarNavigation } from '../components/header';

const HomeStack = createStackNavigator();

export const ProfileStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: AppbarNavigation,
      }}
    >
      <HomeStack.Screen
        name={RouteMap.ButtomNavigation.profile}
        component={ProfileScreen}
      />
    </HomeStack.Navigator>
  );
};
