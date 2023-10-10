import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
  Linking,
} from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../../../colors/index';

export default function ReceitasBovina() {
    const receitasBovina = [
        {
          uri: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-picanha-na-brasa-0.jpg',
          title: 'Picanha grelhada na churrasqueira',
          url: 'https://youtu.be/KgoqcbuZEBg?si=Zejb12YBGfWGbCDI'
        },
        {
          uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/3bd383cdf9446912a35458166e99234d_XL.jpg',
          title: 'Bolinho de carne',
          url: 'https://youtu.be/27s4R5pVeec?si=F6Ewpc6tn7tvxA9t'
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

  const handleCardPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Receitas</Text>
            <Text style={[styles.title, { fontSize: 55 }]}>Bovina</Text>
          </View>
          <Image
            source={require('../../../../assets/img/boi.png')}
            style={styles.boi}
          />
        </View>
        <>
        {receitasBovina.map((carne, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => handleCardPress(carne.url)}
            underlayColor="#DDDDDD"
          >
            <View style={styles.Card}>
              <Card.Cover source={{ uri: carne.uri }} style={styles.image} />
              <View style={styles.containerText}>
                <Text style={styles.titleCard}>{carne.title}</Text>
              </View>
            </View>
          </TouchableHighlight>
        ))}
        </>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  containerTitle: {
    flexDirection: 'column',
    marginTop: 15,
    paddingLeft: 20
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'InriaSans_700Bold'
  },
  subtitle: {
    color: 'white',
    fontFamily: 'InriaSans_700Bold'
  },
  top: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  Card: {
    borderRadius: 0,
    margin: '5%',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%'
  },
  titleCard: {
    padding: 10,
    alignItems: 'center',
    fontFamily: 'InriaSans_700Bold',
    fontSize: 18
  },
  containerText: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center'
  },
  image: {
    width: '50%',
    height: 100,
    borderRadius: 0,
    borderColor: colors.light,
    borderWidth: 4
  }
});
