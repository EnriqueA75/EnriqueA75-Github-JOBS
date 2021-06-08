import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppNavigation } from './src/navigations/AppNavigation';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { AppContext } from './src/contexts';
import { JobsProvider } from './src/providers/JobsProvider';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const CombinedCustomDefaultTheme = {
  ...CombinedDefaultTheme,
  colors: { ...CombinedDefaultTheme.colors, primary: '#00BCD4' },
};

const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const CombinedCustomDarkTheme = {
  ...CombinedDarkTheme,
  colors: { ...CombinedDarkTheme.colors, primary: '#00BCD4' },
};

export default function App() {
  const [appState, setAppState] = useState({
    theme: CombinedCustomDefaultTheme,
    isDark: false,
  });
  const switchTheme = () => {
    setAppState(({ isDark }) => ({
      theme: isDark ? CombinedCustomDefaultTheme : CombinedCustomDarkTheme,
      isDark: !isDark,
    }));
  };

  const value = { state: appState, switchTheme };
  return (
    <AppContext.Provider value={value}>
      <PaperProvider theme={appState.theme}>
        <NavigationContainer theme={appState.theme}>
          <JobsProvider>
            <AppNavigation />
          </JobsProvider>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
