import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import Axios from 'axios';
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from 'expo-auth-session';
import { getUserAuthenticated, loginUserStorageAsync } from '../utils/auth';

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${client_id}`,
};

const client_id = '521abf3537f91e46b5b8';
const client_secret = 'ac701872b2d625af079bbcb636c2f2e9fbd353c9';

export const useLogin = () => {
<<<<<<< HEAD
  const [isAuthenticated, setIsAuthenticated] = useState(true);
=======
  const [isUnmount, setIsUnmount] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
>>>>>>> 687673fa510b9761cf2acd9f114bd6c6ff716efa
  const [isRequesting, setIsRequesting] = useState(false);

  const [, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: client_id,
      scopes: ['user', 'identity', 'repo'],
      redirectUri: makeRedirectUri({
        scheme: 'githubjobs',
      }),
    },
    discovery
  );

  const createTokenByCode = async (code) => {
    try {
      const {
        data: { access_token },
      } = await Axios.post(
        'https://github.com/login/oauth/access_token',
        null,
        {
          params: {
            code,
            client_id,
            client_secret,
          },
          headers: {
            Accept: 'application/json',
          },
        }
      );

      loadUserByAccessToken(access_token);
    } catch (err) {
      console.log(err);
      if (!isUnmount) {
        setIsRequesting(false);
      }
    }
  };

  const loadUserByAccessToken = async (access_token) => {
    try {
      const { data: user } = await Axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const storageValue = JSON.stringify({ ...user, access_token });
      if (Platform.OS !== 'web') {
        await loginUserStorageAsync(storageValue);
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.log(err);
      if (!isUnmount) {
        setIsRequesting(false);
      }
    }
  };

  useEffect(() => {
    getUserAuthenticated().then((response) => {
      const json = JSON.parse(response);
      if (json) {
        const { access_token } = json;
        loadUserByAccessToken(access_token);
      }
    });

    return () => {
      setIsUnmount(true);
    };
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      createTokenByCode(code);
    }
  }, [response]);

  const onLoginAsync = async () => {
    setIsRequesting(true);
    await promptAsync();
  };

  return { isAuthenticated, onLoginAsync, isRequesting };
};
