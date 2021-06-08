import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyStoreMap } from '../constants/KeyStoreMap';

export const loginUserStorageAsync = async (user) =>
  await AsyncStorage.setItem(KeyStoreMap.AUTH_STATE_KEY, user);

export const getUserAuthenticated = async () =>
  await AsyncStorage.getItem(KeyStoreMap.AUTH_STATE_KEY);

export const logoutUserStorageAsync = async () =>
  await AsyncStorage.removeItem(KeyStoreMap.AUTH_STATE_KEY);
