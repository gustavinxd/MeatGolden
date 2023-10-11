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
import { receitasSuina } from '../../../helpers/mock';

export default function ReceitaSuina() {
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
            style={{ width: '45%', height: '100%', marginRight: 30 }}
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
    backgroundColor: colors.black
  },
  containerTitle: {
    flexDirection: 'column',
    marginTop: 15,
    paddingLeft: 20
  },
  title: {
    color: colors.light,
    fontSize: 30,
    fontFamily: 'InriaSans_700Bold'
  },
  subtitle: {
    color: colors.light,
    fontFamily: 'InriaSans_700Bold'
  },
  top: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  Card: {
    borderRadius: 8,
    margin: '5%',
    flexDirection: 'row',
    backgroundColor: colors.light,
    width: '90%'
  },
  titleCard: {
    padding: 10,
    alignItems: 'center',
    fontFamily: 'InriaSans_700Bold',
    fontSize: 18
  },
  containerText: {
    borderRadius: 8,
    backgroundColor: colors.light,
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center'
  },
  image: {
    width: '50%',
    borderRadius: 8,
    height: 100,
    borderColor: colors.light,
    borderWidth: 4
  }
});
