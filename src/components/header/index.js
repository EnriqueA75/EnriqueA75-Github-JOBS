import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { logoutUserStorageAsync } from '../../utils/auth';

import { RouteMap } from '../../constants/RouteMap';

export const AppbarNavigation = () => {
  const navigation = useNavigation();

  const onLogout = async () => {
    await logoutUserStorageAsync();
    navigation.reset({
      index: 0,
      routes: [{ name: RouteMap.LoginNavigation.login }],
    });
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="Github Jobs" />
      <Appbar.Action icon="logout" onPress={onLogout} />
    </Appbar.Header>
  );
};
