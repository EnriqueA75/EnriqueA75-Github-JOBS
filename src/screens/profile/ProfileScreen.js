import React from 'react';
import { StyleSheet, View} from 'react-native';
import { DataProfile } from '../../components/profile/DataProfile';



export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <DataProfile/>
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
  card_template:{
    width: 350,
    height: 450,
    borderRadius: 10,
    backgroundColor: '#22215B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_image: {
    width: 220,
    height: 220,
  },
  card_title: {
     color: "white",
     textAlign: 'center',
     padding: 5
  }
});

