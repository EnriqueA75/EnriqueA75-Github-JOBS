import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteMap } from '../constants/RouteMap';
import { AppbarNavigation } from '../components/header';
import { FavoritesScreen } from '../screens/favorites/FavoritesScreem';

const HomeStack = createStackNavigator();

export const FavoritesStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: AppbarNavigation,
      }}
    >
      <HomeStack.Screen
        name={RouteMap.ButtomNavigation.favorites}
        component={FavoritesScreen}
      />
    </HomeStack.Navigator>
  );
};
