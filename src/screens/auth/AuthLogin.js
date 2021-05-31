import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Axios from 'axios';
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from 'expo-auth-session';

import LoginSplashUp from '../../assets/img/login-splash-up.jpeg';
import LoginSplashDown from '../../assets/img/login-splash-down.jpeg';
import GithubLogo from '../../assets/img/github-logo.jpeg';
import { Button } from 'react-native-paper';
import { RouteMap } from '../../constants/RouteMap';

export const AUTH_STATE_KEY = 'authStateKey';

const client_id = '521abf3537f91e46b5b8';
const client_secret = 'ac701872b2d625af079bbcb636c2f2e9fbd353c9';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${client_id}`,
};
export const AuthLogin = () => {
  const navigation = useNavigation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [request, response, promptAsync] = useAuthRequest(
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
        SecureStore.setItemAsync(AUTH_STATE_KEY, storageValue);
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SecureStore.getItemAsync(AUTH_STATE_KEY).then((response) => {
      const { access_token } = JSON.parse(response);
      loadUserByAccessToken(access_token);
    });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: RouteMap.LoginNavigation.tabs }],
      });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      createTokenByCode(code);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image source={LoginSplashUp} style={styles.loginUpStyle} />
      <View style={styles.githubLogoStyle}>
        <Image source={GithubLogo} style={{ borderRadius: 100 }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.logintextStyle}>Iniciar Sesion con Github</Text>
        <Button
          style={styles.loginButtonStyle}
          color="black"
          disabled={!request}
          mode="contained"
          onPress={() => {
            promptAsync();
          }}
        >
          Sign up with GitHub
        </Button>
      </View>
      <Image source={LoginSplashDown} style={styles.loginDownStyle} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: 'relative', height: '100%', backgroundColor: '#FFF' },
  content: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999,
  },
  loginDownStyle: {
    position: 'absolute',
    bottom: -70,
    zIndex: 0,
  },
  loginUpStyle: {
    position: 'absolute',
    top: -30,
    zIndex: 0,
  },
  githubLogoStyle: {
    position: 'absolute',
    top: 20,
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonStyle: {
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  logintextStyle: { fontSize: 18, fontWeight: 'bold', marginBottom: 80 },
});
