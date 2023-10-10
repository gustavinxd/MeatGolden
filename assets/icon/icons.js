import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../../src/colors/index';

const Icon = ({ name, size = 30 }) => {
  let iconSource;

  // Verificar o nome do ícone e atribuir a imagem correspondente
  if (name === 'ox') {
    iconSource = require('../img/ox.png');
  } else if (name === 'pig') {
    iconSource = require('../img/pig.png');
  } else if (name === 'chicken') {
    iconSource = require('../img/hen.png');
  // } else if (name === 'message') {
  //   iconSource = <BiMessageSquareCheck/>
  }


  return (
    <View style={styles.container}>
      <Image source={iconSource} style={{ width: size, height: size, margin: 10, alignSelf: 'center', }} />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
      backgroundColor: colors.light, 
      borderRadius: 10, 
      width: '22%', 
      height: '100%',
    },
})

export default Icon;

