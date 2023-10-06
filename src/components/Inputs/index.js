import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import colors from '../../colors/index';

const InputComponent = () => {
  const [priceAcem, setpriceAcem] = useState('');
  const [priceCupim, setpriceCupim] = useState('');
  const [priceBoi, setpriceBoi] = useState('');
  // const [objeto, setObjeto] = useState(null);

  // const mostrarValor = () => {
  //   // Lógica para associar o valor a um objeto (por exemplo, um vestido)
  //   const objetoAssociado = {
  //     nome: 'Vestido',
  //     preco: parseFloat(valor) || 0, // Converte o valor para número ou 0 se não for válido
  //   };

  //   setObjeto(objetoAssociado);
  // };

  return (
    <>
      <View>
        <TextInput
          placeholder="R$"
          keyboardType="numeric"
          onChangeText={(text) => setpriceAcem(text)}
          // value={valor}
          style={styles.input}
        />
        <TextInput
          placeholder="R$"
          keyboardType="numeric"
          onChangeText={(text) => setpriceCupim(text)}
          // value={valor}
          style={styles.input}
        />
        <TextInput
          placeholder="R$"
          keyboardType="numeric"
          onChangeText={(text) => setpriceBoi(text)}
          // value={valor}
          style={styles.input}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input:{
    borderColor: colors.black,
    borderBottomWidth: 2,
    width: 100,
    paddingBottom: 5,
  }
})

export default InputComponent;
