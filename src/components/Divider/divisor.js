import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../colors/index'

const Divisor = () => {
  return <View style={styles.divisor} />;
};

const styles = StyleSheet.create({
  divisor: {
    height: 1,
    backgroundColor: colors.light, // Cor da linha divisória
    marginVertical: 20, // Margem vertical para espaçamento
  },
});

export default Divisor;
