import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStackScreen } from './HomeStackNavigation';
import { FavoritesStackScreen } from './FavoritesStackNavigation';
import { ProfileStackScreen } from './ProfileStackNavigation';

import { RouteMap } from '../constants/RouteMap';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteMap.ButtomNavigation.home}
      activeColor="#fff"
    >
      <Tab.Screen
        name={RouteMap.ButtomNavigation.home}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteMap.ButtomNavigation.favorites}
        component={FavoritesStackScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteMap.ButtomNavigation.profile}
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
