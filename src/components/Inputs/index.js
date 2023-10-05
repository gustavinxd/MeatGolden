import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const InputComponent = () => {
  const [valor, setValor] = useState('');
  const [objeto, setObjeto] = useState(null);

  const mostrarValor = () => {
    // Lógica para associar o valor a um objeto (por exemplo, um vestido)
    const objetoAssociado = {
      nome: 'Vestido',
      preco: parseFloat(valor) || 0, // Converte o valor para número ou 0 se não for válido
    };

    setObjeto(objetoAssociado);
  };

  return (
    <View>
      <TextInput
        placeholder="R$"
        keyboardType="numeric"
        onChangeText={(text) => setValor(text)}
        value={valor}
      />
    </View>
  );
};

export default InputComponent;
