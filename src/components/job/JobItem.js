import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { RouteMap } from '../../constants/RouteMap'
import { JobsContext } from '../../contexts';
import { Item } from '../../model/Item';


export const JobItem = ({
  id = '',
  title = '',
  time = '',
  place = '',
  url = '',
  logo = '',
  description = '',
  apply = '',
}) => {
  const { setDetail, setisAddNewFavorite } = useContext(JobsContext);
  const [ isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const getItem = async () => {
      const item = await Item.getById(id);
      if (item) {
        setIsFavorite(true);
      }
    };
    getItem();
  }, []);

  const onFavorite = () => {
    const onCreate = async () => {
      const job = {
        id,
        title,
        place,
        time,
        logo,
        description,
        url,
        apply,
      };
      Item.create(job);
      setisAddNewFavorite(true);
      setIsFavorite(true);
    };
    onCreate();
  }; 
  const pressHandler = () => {
    setDetail({
      info: {
        id,
        title,
        time,
        place,
        url,
        logo,
        description,
        apply,
      }
    })
    navigation.navigate(RouteMap.ButtomNavigation.detail)
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
        apply={apply}
        title={title}
        subtitle={`${time} - ${place}`}
        right={(props) => (
          <MaterialCommunityIcons
            {...props}
            name="heart"
            size={26}
            style={{
              marginRight: 10,
              color: isFavorite ? '#ff4040' : '#000000',
            }}
            onPress={onFavorite}
          />
        )}
      />

      <Card.Content>
        <Paragraph>{description.substring(0, 150)}...</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={pressHandler}
        >Ver más</Button>
      </Card.Actions>
    </Card>
  );
};
