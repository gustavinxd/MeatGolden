import * as React from 'react';
import { StyleSheet, Linking, TouchableHighlight } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CardReceita() {
  const teste = [
    {
      uri: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-picanha-na-brasa-0.jpg',
      title: 'Picanha grelhada na churrasqueira',
      url: 'https://youtu.be/KgoqcbuZEBg?si=Zejb12YBGfWGbCDI',
    },
    {
      uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/3bd383cdf9446912a35458166e99234d_XL.jpg',
      title: 'Bolinho de carne',
      url: 'https://youtu.be/27s4R5pVeec?si=F6Ewpc6tn7tvxA9t'
    },
    {
      uri: 'https://vipfood.com.br/wp-content/uploads/2018/04/panqueca-carne-1.jpg',
      title: 'Panqueca de arroz com carne moída',
      url: 'https://youtu.be/kn5NcH7Bc3A?si=wlMG8CCq6vqprmNe'
    },
    {
      uri: 'https://www.receitadevovo.com.br/_next/image?url=https%3A%2F%2Fd2qcpt1idvpipw.cloudfront.net%2Frecipes%2F2020%2F10%2Fmolho-madeira.jpg&w=1536&q=75',
      title: 'Músculo ao molho madeira',
      url: 'https://youtu.be/69dLrW32-E4?si=uNGgp2PLKnlOktPG'
    },
    {
      uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/068055ed933d2e69cfeb9ff2d23bac50_XL.jpg',
      title: 'Kafta',
      url: 'https://youtu.be/N6aAlBV9NhQ?si=icIAAGjD4EIZ2DQO'
    },
    {
      uri: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/lanche-de-carne-louca.jpg',
      title: 'Sanduíche de carne louca',
      url: 'https://youtu.be/fov4BeoWg8Y?si=ZOo2mG-Oef4FnXLX'
    },
    {
      uri: 'https://cdn.deliway.com.br/blog/base/589/080/898/o-que-e-ossobuco.jpg',
      title: 'Ossobuco',
      url: 'https://youtu.be/rs2QT9MGpT4?si=yyzrr-0VnmeNBGFO'
    },
    {
      uri: 'https://www.receitop.com/wp-content/uploads/2020/11/receitas-com-acem-1200x800.jpg',
      title: 'Churrasco de acém',
      url: 'https://youtu.be/5mlULIrq6rA?si=2p-8XwFNWD79ys6k'
    },
    {
      uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/d17ef18e347871e9944e7d310ab99d0c_XL.jpg',
      title: 'Churrasco grego em casa',
      url: 'https://youtu.be/EBD4rEjU6ck?si=AtxPypYorcsmMluS'
    }
  ];

  return (
    <>
      {teste.map((carne, index) => (

        <TouchableHighlight key={index}
        onPress={() => {
        Linking.openURL(carne.url); // Abre o link associado ao card
        }}
        underlayColor="#DDDDDD"> 
          <Card style={styles.Card}>
              <Card.Cover source={{ uri: carne.uri }} style={styles.image}/>
              <Text variant="titleLarge" style={styles.title}>
                {carne.title}
              </Text>
          </Card> 
        </TouchableHighlight>   
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 0,
    margin: '5%',
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
