import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../Icons/Logo/index.js';
// import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Logo style={styles.logo} />
      <TouchableOpacity style={styles.menuButton}>
        {/* <AiOutlineMenu/> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '15%', // Altura do cabeçalho
    backgroundColor: 'black', // Cor de fundo do cabeçalho
    paddingTop: 30,
    margin: 0
  },
  logo: {
    width: 30,
    height: 30
  }
});
