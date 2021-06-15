import React, {useContext} from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { JobsContext } from '../../contexts';
import { RouteMap } from '../../constants/RouteMap'
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export const JobDetail = () => {

    const { detail } = useContext(JobsContext)
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate(RouteMap.ButtomNavigation.home)
    }
    return(
        <Card>
        <Card.Cover source={{ uri: detail.info.logo }} />
        <Card.Title title={detail.info.title} subtitle={detail.info.place} />
        <Card.Content>
        <Title>{detail.info.time}</Title>
        <Paragraph>{detail.info.description}</Paragraph>
        </Card.Content>
        <Card.Actions>
        {detail.info.apply ? <Button onPress={() => Linking.openURL(detail.info.apply)}>Aplicar</Button> : null}
        <Button
            onPress={pressHandler}
        >Cancel</Button>
        </Card.Actions>
    </Card>
    )
};
