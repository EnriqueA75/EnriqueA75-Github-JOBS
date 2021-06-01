import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, Image } from 'react-native';

import LoginSplashUp from '../../assets/img/login-splash-up.jpeg';
import LoginSplashDown from '../../assets/img/login-splash-down.jpeg';
import GithubLogo from '../../assets/img/github-logo.jpeg';
import { Button } from 'react-native-paper';
import { RouteMap } from '../../constants/RouteMap';
import { useLogin } from '../../hooks/useLogin';
import { useRedirect } from '../../hooks/useRedirect';

WebBrowser.maybeCompleteAuthSession();

export const AuthLogin = () => {
  const { isRequesting, isAuthenticated, onLoginAsync } = useLogin();

  useRedirect(RouteMap.LoginNavigation.tabs, isAuthenticated);
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
          disabled={isRequesting}
          mode="contained"
          onPress={onLoginAsync}
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
