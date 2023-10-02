import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardReceita() {
  const teste = [
    {
      uri: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-picanha-na-brasa-0.jpg',
      title: 'Picanha grelhada na churrasqueira'

    },
    {
      uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/3bd383cdf9446912a35458166e99234d_XL.jpg',
      title: 'Bolinho de carne'
    },
    {
      uri: 'https://vipfood.com.br/wp-content/uploads/2018/04/panqueca-carne-1.jpg',
      title: 'Panqueca de arroz com carne moída'
    },
    {
      uri: 'https://www.receitadevovo.com.br/_next/image?url=https%3A%2F%2Fd2qcpt1idvpipw.cloudfront.net%2Frecipes%2F2020%2F10%2Fmolho-madeira.jpg&w=1536&q=75',
      title: 'Músculo ao molho madeira'
    }
  ];

  return (
    <>
      {teste.map((carne, index) => (
          <Card style={styles.Card} key={index}>
              <Card.Cover source={{ uri: carne.uri }} style={styles.image}/>
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
    padding: 10,
    textAlign: 'center',
    fontFamily: 'InriaSans_700Bold',
    fontSize: 20,
  },
  image:{
    width: '100%',
    borderRadius: 0,
    borderColor: 'white',
    borderWidth: 4,
  }
});
