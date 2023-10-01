import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text } from 'react-native-paper';

export default function CardComponent() {
  const teste = [
    {
      uri: 'https://www.canalrural.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=904&height=508&format=.jpg&quality=91&imagick=imagens-cdn.canalrural.com.br/wp-content/uploads/carne-bovina-outubro-historico-boletim-agroexport.jpg',
      title: 'Bovina'
    },
    {
      uri: 'https://www.canalrural.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=627&format=.jpg&quality=91&imagick=imagens-cdn.canalrural.com.br/wp-content/uploads/carne-de-frango-4.jpg',
      title: 'Frango'
    },
    {
      uri: 'https://nutrimosaic.com.br/wp-content/uploads/2022/10/carne-suina.jpg',
      title: 'Suína'
    }
  ];

  return (
    <>
      {teste.map((carne, index) => (
        <ScrollView>
          <Card style={styles.Card} key={index}>
              <Card.Cover source={carne.uri} style={styles.image}/>

              <Text variant="titleLarge" style={styles.title}>
                {carne.title}
              </Text>
            </Card>    
        </ScrollView>
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
  },
  image:{
    width: '100%',
  }
});
