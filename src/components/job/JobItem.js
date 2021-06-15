import React, {useContext} from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { RouteMap } from '../../constants/RouteMap'
import { JobsContext } from '../../contexts';

export const JobItem = ({
  title = '',
  time = '',
  place = '',
  logo,
  description = '',
  apply = ''
}) => {
  const { detail, setDetail } = useContext(JobsContext)
  const navigation = useNavigation();

  const pressHandler = () => {
    setDetail({
      info: {
        title,
        time,
        place,
        logo,
        description,
        apply
      }
    })
    console.log(detail.info)
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
            style={{ marginRight: 10 }}
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
