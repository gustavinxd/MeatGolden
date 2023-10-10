import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
  Linking
} from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../../../colors/index';

export default function ReceitasFrango() {
  const receitasFrango = [
    {
      uri: 'https://i.ytimg.com/vi/ZM9vr8_o4i4/hqdefault.jpg',
      title: 'Coraçãozinho de frango com shoyu na brasa',
      url: 'https://youtu.be/ZM9vr8_o4i4'
    },
    {
      uri: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/churrasco-de-tulipas-e-asinhas-de-frango-na-mostarda.jpg',
      title: 'Asa de frango com mostarda na brasa',
      url: 'https://youtu.be/Y-eYorFJuP0'
    },
    {
      uri: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-tulipa-de-frango-00.jpg',
      title: 'Tulipa de frango na brasa',
      url: 'https://youtu.be/V5T5D-cHsSo'
    },
    {
      uri: 'https://www.santamassa.com.br/wp-content/webp-express/webp-images/uploads/2022/07/post_07_julho_blog-6.jpg.webp',
      title: 'Filé de frango na brasa',
      url: 'https://youtu.be/JWwA3fkSCbY'
    },
    {
      uri: 'https://www.curraldeminas.com.br/wp-content/uploads/2016/02/assinha-de-frango-com-parmesao-curral-de-minas.jpg',
      title: 'Frango com parmesão na brasa',
      url: 'https://youtu.be/7Y12tS2UhLM'
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
            <Text style={[styles.title, { fontSize: 55 }]}>Frango</Text>
          </View>
          <Image
            source={require('../../../../assets/img/boi.png')}
            style={styles.boi}
          />
        </View>
        <>
          {receitasFrango.map((carne, index) => (
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
