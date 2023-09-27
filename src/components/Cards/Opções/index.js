import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardComponent() {
    return(
        <Card style = {styles.Card}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Text variant="titleLarge" style = {styles.title}>Card title</Text>
        </Card>
    )
}

const styles = StyleSheet.create ({
    Card: {
        borderRadius: 0,
        margin: '5%',
    },
    title: {
        padding: 20,
        textAlign: 'center',
    }
})