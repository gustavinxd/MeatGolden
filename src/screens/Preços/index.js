import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const ConfigurarPrecos = () => {
  const [precos, setPrecos] = useState({
    cupim: '',
    peça2: '',
    // Adicione mais peças conforme necessário
  });

  const handleInputChange = (peca, valor) => {
    setPrecos({
      ...precos,
      [peca]: valor,
    });
  };

  const handleSalvar = () => {
    // Lógica para salvar os preços
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Peça 1:</Text>
        <TextInput
          style={styles.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={precos.peça1}
          onChangeText={(text) => handleInputChange('cupim', text)}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Peça 2:</Text>
        <TextInput
          style={styles.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={precos.peça2}
          onChangeText={(text) => handleInputChange('peça2', text)}
        />
      </View>
      {/* Adicione mais blocos de rótulo e entrada conforme necessário para outras peças */}
      <Button title="Salvar" onPress={handleSalvar} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default ConfigurarPrecos;
