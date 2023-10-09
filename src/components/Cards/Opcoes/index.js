import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardReceita() {
  const receitasBovina = [
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

  const receitasFrango = [
    {
      uri: 'https://youtu.be/ZM9vr8_o4i4',
      title: 'Coraçãozinho de frango com shoyu na brasa'
    },
    {
      uri: 'https://youtu.be/Y-eYorFJuP0',
      title: 'Asa de frango com mostarda na brasa'
    },
    {
      uri: 'https://youtu.be/V5T5D-cHsSo',
      title: 'Tulipa de frango na brasa'
    },
    { 
      uri: 'https://youtu.be/JWwA3fkSCbY',
      title: 'Filé de frango na brasa'
    },
  ];

  const receitasSuina = [
    {
      uri: 'https://youtu.be/Ym98kHep_rQ?si=TK4pf7Bd4fotVEhx',
      title: 'Espetinho de Carne de Porco na Brasa'
    },
    {
      uri: 'https://youtu.be/g7BWq6a3E6s?si=0Cb1N-fCyX1sqXAR',
      title: 'Bisteca Suína Caipira'
    },
    {
      uri: 'https://youtu.be/dWwJNStQHQY?si=-0xDvSSBepJnm9gn',
      title: 'Costelinha com Molho Barbecue'
    },
    { 
      uri: 'https://youtu.be/BEc9otnJE6Y?si=__bQlmAvrI3LrGLq',
      title: 'Costelinha de Porco Mineira'
    },
  ];

  return (
    <>
      {receitasBovina.map((carne, index) => (
          <Card style={styles.Card} key={`bovina-${index}`}>
              <Card.Cover source={{ uri: carne.uri }} style={styles.image}/>
              <Text variant="titleLarge" style={styles.title}>
                {carne.title}
              </Text>
            </Card>    
      ))}
      {receitasFrango.map((carne, index) => (
          <Card style={styles.Card} key={`frango-${index}`}>
              <Card.Cover source={{ uri: carne.uri }} style={styles.image}/>
              <Text variant="titleLarge" style={styles.title}>
                {carne.title}
              </Text>
            </Card>    
      ))}
      {receitasSuina.map((carne, index) => (
          <Card style={styles.Card} key={`suina-${index}`}>
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
