import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../colors/index';

export default function Divisor(){
  return <View style={styles.divisor} />;
};

const styles = StyleSheet.create({
  divisor: {
    height: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.light, // Cor da linha divisória
    marginBottom: '10%',
    marginTop: '10%' 
  }
});