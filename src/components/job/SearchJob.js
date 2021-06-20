import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import { JobsContext } from '../../contexts';

export const SearchJob = () => {
  const { query, onQueryChange } = useContext(JobsContext);

  return (
    <Searchbar
      placeholder="Buscar puesto"
      onChangeText={onQueryChange}
      style={styles.searchInput}
      name="query"
      value={query}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    position: 'absolute',
    width: '88%',
    marginTop: 10,
    zIndex: 10
  },
});
