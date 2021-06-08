import { createContext } from 'react';

export const AppContext = createContext({ isDark: true });

export const JobsContext = createContext({
  jobs: [],
  isRequesting: false,
  onQueryChange: (query) => {},
  query: '',
});
