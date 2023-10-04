import React from 'react';
import {StyleSheet, SafeAreaView, ImageBackground, Text, View} from 'react-native';
// import Logo from '../../components/Icons/Logo.tsx';
import Header from '../../components/Header/home.js';


export default function Home() {
  const imagemUrl = 'https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ImageBackground source={{uri: imagemUrl}} style={styles.fire}/>
        <Text style={styles.title}>MeatGolden</Text>
        <Text style={styles.slogan}>A 
          <Text style={[styles.slogan, styles.highlightedText]}> arte</Text>
          <Text style={styles.slogan}> de organizar seu churrasco!</Text>
          
        </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  fire: {
    width: '100%',
    height: '100%',
    // borderWidth: 2,
    // borderColor: 'white',
  },
  title: {
    fontSize: 60,
    color: 'white',
    position: 'absolute',
    marginTop: 150,
    fontFamily: 'InriaSans_700Bold',
  },
  slogan: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'InriaSans_700Bold',
    position: 'absolute',
    marginTop: '70%',
    paddingRight: '30%',
  },
  highlightedText: {
    color: '#7C0303', // Cor da palavra destacada
  },


});