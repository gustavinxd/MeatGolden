import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardComponent() {
  const teste = [
    {
      uri: '',
      title: 'Bovina'
    },
    {
      uri: 'teste',
      title: 'Frango'
    },
    {
      uri: 'teste',
      title: 'Suína'
    }
  ];

  return (
    <>
      {teste.map((carne, index) => (
        <Card style={styles.Card} key={index}>
          <Card.Cover source={carne.uri} />

          <Text variant="titleLarge" style={styles.title}>
            {carne.title}
          </Text>
        </Card>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 0,
    margin: '5%'
  },
  title: {
    padding: 20,
    textAlign: 'center'
  }
});
