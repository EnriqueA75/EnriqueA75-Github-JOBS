import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Input, Div } from 'react-native';
import { Searchbar, Button  } from 'react-native-paper';
import { SearchJob } from '../../components/search/SearchJob'

export const HomeScreen = () => {

  const [data, setData] = useState('')

  useEffect(() => {
    if(data === '') return
    const consultarApi = () => {
      console.log(data)
    }
    consultarApi()

  }, [data])

  return (
    <View style={styles.container}>
        <SearchJob
          setData={setData}
          data={data}
        />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
