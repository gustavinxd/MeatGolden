import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ConviteAnimado = ({navigation}) => {
  useEffect(() => {
    // Animação automática quando o componente é montado
    conviteRef.bounce(800);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View
        ref={(ref) => (conviteRef = ref)}
        style={styles.convite}>
        <Text style={styles.textoConvite}>Você está convidado para...</Text>
        <Text style={styles.nomeEvento}>Festa Incrível!</Text>
        <Text style={styles.detalhesEvento}>Data: 20 de Dezembro, 2023</Text>
        <Text style={styles.detalhesEvento}>Local: Casa do Amigo, Rua Principal, Número 123</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  convite: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  textoConvite: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nomeEvento: {
    fontSize: 24,
    marginBottom: 10,
  },
  detalhesEvento: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ConviteAnimado;
