import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
         <Image style={styles.card_image} source={{uri: 'https://escuelarafaelarcangel.cl/images/equipo/men.png'}}/>
            <Text style={styles.card_title}>Mi Nombre</Text>
            <Text style={styles.card_title}>Acerca de Mi</Text>
        </View>
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
