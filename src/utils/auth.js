import * as SecureStore from 'expo-secure-store';
import { KeyStoreMap } from '../constants/KeyStoreMap';

export const loginUserStorageAsync = async (user) =>
  await SecureStore.setItemAsync(KeyStoreMap.AUTH_STATE_KEY, user);

export const getUserAuthenticated = async () =>
  await SecureStore.getItemAsync(KeyStoreMap.AUTH_STATE_KEY);

export const logoutUserStorageAsync = async () =>
  await SecureStore.deleteItemAsync(KeyStoreMap.AUTH_STATE_KEY);
