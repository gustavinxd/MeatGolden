import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import Logo from '../../components/Icons/Logo.tsx';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.nav} />
      <Logo />
      <ImageBackground
        source={require('../../../assets/img/background(1).png')}
        resizeMode="cover"
        style={styles.fire}
      >
        <Text style={styles.name}>Churras</Text>
        <Text style={styles.slogan}>A arte de organizar seu churrasco!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  fire: {
    width: '100%',
    height: '85%',
    marginLeft: 10
  },
  name: {
    fontSize: 60,
    color: 'white',
    paddingTop: '50%'
  },
  slogan: {
    fontSize: 30,
    color: 'white',
    paddingTop: '10%'
  }
});
