import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchJob } from '../../components/job/SearchJob';
import JobsList from '../../components/job/JobsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { JobsContext } from '../../contexts';
import { ActivityIndicator } from 'react-native-paper';

export const HomeScreen = () => {
  const { isRequesting, jobs } = useContext(JobsContext);
  return (
    <View style={styles.container}>
      <SearchJob />
      <View style={{ height: '100%' }}>
        {isRequesting ? (
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView style={{ width: '100%', height: '100%' }}>
            <JobsList jobs={jobs} />
          </ScrollView>
        )}
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
