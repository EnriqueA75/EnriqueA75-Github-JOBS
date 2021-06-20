import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getUserAuthenticated } from '../../utils/auth';


export const DataProfile = () =>{

  const [user, setUser] = useState({

  }) 
  useEffect(() => {
    const loadUser = async()=>{
      const user = JSON.parse(await getUserAuthenticated())
      setUser(user)
    }
      loadUser();
  },[])

  return(
    <View style={styles.card_template}>
      <Image style={styles.card_image} source={{uri: user.avatar_url}}/>
      <Text style={styles.card_title}>Nombre de usuario: {user.login}</Text>
      <Text style={styles.card_title}>Ubicación: {user.location}</Text>
    </View>
  )};


const styles = StyleSheet.create({
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
      borderRadius: 100
    },
    card_title: {
       color: "white",
       textAlign: 'center',
       padding: 5
    }
  });

  