import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import JobsList from '../../components/job/JobsList';

import { ScrollView } from 'react-native-gesture-handler';
import { Item } from '../../model/Item';
import { JobsContext } from '../../contexts';

export const FavoritesScreen = () => {
  const { isAddNewFavorite, setisAddNewFavorite } = useContext(JobsContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const loadJobs = async () => {
      const items = await Item.getAll();
      console.log({ items });
      setJobs(items);
      setisAddNewFavorite(false);
    };
    loadJobs();
  }, [isAddNewFavorite]);
  return (
    <View style={styles.container}>
      <View style={{ height: '100%' }}>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <JobsList jobs={jobs} />
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
