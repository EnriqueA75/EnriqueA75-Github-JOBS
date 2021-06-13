import React from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  FavoriteModel  from '../../model/FavoriteModel';


export const JobItem = ({
  id = '',
  title = '',
  time = '',
  place = '',
  logo,
  description = '',
}) => {
  
  const onFavorite = () => {

    const favorite = new FavoriteModel({
      id, 
      title, 
      place, 
      time, 
      logo, 
      description
    })
    
    favorite.save()
    
  }
  
  return (
    <Card
      resizeMode="center"
      style={{
        margin: 10,
      }}
    >
      <Card.Cover source={{ uri: logo }} />
      <Card.Title
        title={title}
        subtitle={`${time} - ${place}`}
        right={(props) => (
          <MaterialCommunityIcons
            {...props}
            name="heart"
            size={26}
            style={{ marginRight: 10 }}
            onPress = {onFavorite}
          />
        )}
      />

      <Card.Content>
        <Paragraph>{description.substring(0, 150)}...</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Ver más</Button>
      </Card.Actions>
    </Card>
  );
};
