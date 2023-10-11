import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../../colors';


export default function AnimalIcon({name, size}){
  let iconSource;

  // Verificar o nome do ícone e atribuir a imagem correspondente
  if (name === 'ox') {
    iconSource = require('../../../assets/img/ox.png');
  } else if (name === 'pig') {
    iconSource = require('../../../assets/img/pig.png');
  } else if (name === 'chicken') {
    iconSource = require('../../../assets/img/hen.png');
  // } else if (name === 'message') {
  //   iconSource = <BiMessageSquareCheck/>
  }


  return (
    <View style={styles.container}>
      <Image source={iconSource} style={{ width: size, height: size, margin: 7, alignSelf: 'center', }} />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
      backgroundColor: colors.light, 
      borderRadius: 10, 
      width: 100, 
      height: 50,
      alignSelf: 'center'
    },
})

