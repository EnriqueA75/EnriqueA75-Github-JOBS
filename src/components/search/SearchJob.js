import React, { Fragment, useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Searchbar, Button } from 'react-native-paper';
import {SearchContext} from '../../contexts/SearchContext'

 export const SearchJob = () => {

  const {jobsList, lenguaje, setLenguaje} = useContext(SearchContext)

  const onChangeSearch = (query) => {
    setLenguaje(query)
    console.log(jobsList)
  }

    return (
         <Searchbar
            placeholder=" Ejemplo: Node.js"
            onChangeText={onChangeSearch}
            style={styles.searchInput}
            name="lenguaje"
            value={lenguaje}
          />
     );
}

const styles = StyleSheet.create({
  searchInput: {
    alignItems: 'flex-start',
    position: 'absolute',
    width: '88%',
    top: 5,
    right: 25
  },
  });
 