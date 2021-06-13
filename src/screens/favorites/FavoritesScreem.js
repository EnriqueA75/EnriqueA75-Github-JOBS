import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import JobsList from '../../components/job/JobsList';

import { ScrollView } from 'react-native-gesture-handler';
import  FavoriteModel  from '../../model/FavoriteModel';
 

export const FavoritesScreen = () => {
 
  const [jobs, setJobs]= useState([])
  useEffect(()=>{
    const loadJobs = async() => {
      setJobs(await FavoriteModel.query())
    }
    loadJobs()
  },[])
  return (
    <View style={styles.container}>
      <View style={{ height: '100%' }}>
          <ScrollView style={{ width: '100%', height: '100%' }}>
            <JobsList jobs={jobs}/>
          </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
