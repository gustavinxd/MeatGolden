import React, { useState } from 'react';
import { StyleSheet, Linking, TouchableHighlight, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import colors from '../../../colors';

export default function CardReceita() {
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

  const receitasFrango = [
    {
      uri: '',
      title: 'Coraçãozinho de frango com shoyu na brasa',
      url: 'https://youtu.be/ZM9vr8_o4i4'
    },
    {
      uri: '',
      title: 'Asa de frango com mostarda na brasa',
      url: 'https://youtu.be/Y-eYorFJuP0'
    },
    {
      uri: '',
      title: 'Tulipa de frango na brasa',
      url: 'https://youtu.be/V5T5D-cHsSo'
    },
    {
      uri: '',
      title: 'Filé de frango na brasa',
      url: 'https://youtu.be/JWwA3fkSCbY'
    },
    {
      uri: '',
      title: 'Frango com parmesão na brasa',
      url: 'https://youtu.be/7Y12tS2UhLM'
    }
  ];

  const receitasSuina = [
    {
      uri: '',
      title: 'Porco na grelha',
      url: 'https://youtu.be/SRkjDkt6PBc?si=avPaw6GROYLP6Nq0'
    },
    {
      uri: '',
      title: 'Joelho de porco',
      url: 'https://youtu.be/oFzRAhg7xrM?si=GTpd33GCoUKYDlR3'
    },
    {
      uri: '',
      title: 'Panceta à Pururuca na Churrasqueira',
      url: 'https://youtu.be/DivEZ2Oyhqs?si=GVteZG5G01I_6Jxp'
    },
    {
      uri: '',
      title: 'Pernil Fatiado',
      url: 'https://youtu.be/8Wu1emqypFg?si=LfYVih_rF2_s_NlY'
    }
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardPress = (recipe) => {
    setSelectedRecipe(recipe);
    Linking.openURL(recipe.url); // Abre o link associado ao card
  };

  return (
    <>
      {receitasBovina.map((carne, index) => (
        <TouchableHighlight
          key={index}
          onPress={() => handleCardPress(carne)}
          underlayColor="#DDDDDD"
        >
          <View style={styles.Card}>
            <Card.Cover source={{ uri: carne.uri }} style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.title}>{carne.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      ))}
      {receitasFrango.map((carne, index) => (
        <TouchableHighlight
          key={`frango-${index}`}
          onPress={() => handleCardPress(carne)}
          underlayColor="#DDDDDD"
        >
          <View style={styles.Card}>
            <Card.Cover source={{ uri: carne.uri }} style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.title}>{carne.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      ))}
      {receitasSuina.map((carne, index) => (
        <TouchableHighlight
          key={`suina-${index}`}
          onPress={() => handleCardPress(carne)}
          underlayColor="#DDDDDD"
        >
          <View style={styles.Card}>
            <Card.Cover source={{ uri: carne.uri }} style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.title}>{carne.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      ))}

      {selectedRecipe && <CardReceita receita={selectedRecipe} />}
    </>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 0,
    margin: '5%',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%'
  },
  title: {
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
