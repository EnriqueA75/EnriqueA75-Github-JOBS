import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

export const useRedirect = (routeName, flag = false) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (flag) {
      navigation.reset({
        index: 0,
        routes: [{ name: routeName }],
      });
    }
  }, [flag]);
};
