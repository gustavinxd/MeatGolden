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

export default function ReceitaSuina() {
  const receitasSuina = [
    {
      uri: 'https://charcutaria.org/wp-content/uploads/2021/08/barriga-de-porco-pancetta-churrasco-brasa-scaled.jpg',
      title: 'Porco na grelha',
      url: 'https://youtu.be/SRkjDkt6PBc?si=avPaw6GROYLP6Nq0'
    },
    {
      uri: 'https://i.ytimg.com/vi/t3EHtotTdfY/maxresdefault.jpg',
      title: 'Joelho de porco',
      url: 'https://youtu.be/t3EHtotTdfY?si=37lu3SI4nioDgAg9'
    },
    {
      uri: 'https://portalvidalivre.com/uploads/article/image/223/panceta_thumb.png',
      title: 'Panceta à Pururuca na Churrasqueira',
      url: 'https://youtu.be/DivEZ2Oyhqs?si=GVteZG5G01I_6Jxp'
    },
    {
      uri: 'https://i.ytimg.com/vi/8Wu1emqypFg/maxresdefault.jpg',
      title: 'Pernil Fatiado',
      url: 'https://youtu.be/8Wu1emqypFg?si=LfYVih_rF2_s_NlY'
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
            <Text style={[styles.title, { fontSize: 55 }]}>Suína</Text>
          </View>
          <Image
            source={require('../../../../assets/img/pigReceita.png')}
            style={styles.pig}
          />
        </View>
        <>
          {receitasSuina.map((carne, index) => (
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
