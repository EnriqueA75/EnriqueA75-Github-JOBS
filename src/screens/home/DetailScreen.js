import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {JobDetail} from '../../components/job/JobDetail'

export const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <JobDetail/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: '#fff',
    },
  });
  