import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Divisor from '../../components/Divider';
import SubmitButton from '../../components/Buttons/SubmitButton';
import colors from '../../colors/index';
import AlertComponent from '../../components/Alert/index';
import AnimalIcon from '../../components/AnimalIcons';
import { updatePrices } from '../../services/index';

// Passar o valor do input para REAL
const formatarParaReal = (valor) => {
  // Remove caracteres não numéricos
  const numeroLimpo = valor.replace(/[^\d]/g, '');

  // Formata o valor para o formato de moeda brasileira
  const numeroFormatado = Number(numeroLimpo) / 100;
  return numeroFormatado.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};


export default function PrecoScreen() {
  const [precos, setPrecos] = useState({
    bovina: [
      { nome: 'Contra-filé', preco: '' },
      { nome: 'Picanha', preco: '' },
      { nome: 'Cupim', preco: '' }
    ],
    suina: [
      { nome: 'Costela', preco: '' },
      { nome: 'Linguiça', preco: '' },
      { nome: 'Paleta', preco: '' }
    ],
    frango: [
      { nome: 'Coxa:', preco: '' },
      { nome: 'Coração', preco: '' },
      { nome: 'Asa', preco: '' }
    ]
  });

  const handleInputChange = (grupo, index, value) => {
    const valorFormatado = formatarParaReal(value);

    setPrecos((prevState) => {
      return {
        ...prevState,
        [grupo]: prevState[grupo].map((item, i) =>
          i === index ? { ...item, preco: valorFormatado } : item
        )
      };
    });
  };

  const savePricesToDB = async () => {
    try {
      // Coleta os dados dos preços
      const prices = [
        ...precos.bovina.map(item => ({ item: item.nome, preco: parseFloat(item.preco.replace('R$', '').replace(',', '.')) })),
        ...precos.suina.map(item => ({ item: item.nome, preco: parseFloat(item.preco.replace('R$', '').replace(',', '.')) })),
        ...precos.frango.map(item => ({ item: item.nome, preco: parseFloat(item.preco.replace('R$', '').replace(',', '.')) }))
      ];
      
      // Chama a função updatePrices para atualizar os preços no banco de dados
      await updatePrices(prices);
      console.log('Preços atualizados com sucesso');
    } catch (error) {
      console.log('Erro ao atualizar preços:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Configurar Preços</Text>
        <Text style={styles.subtitle}>Altere para os valores corretos!</Text>
        <View style={styles.view}>
          <AlertComponent />
          <View>
            <AnimalIcon name="ox" size={35} />
            <View style={styles.titleRow}>
              <Text style={styles.titulo}>Bovina: </Text>
              <TextInput style={styles.inputPrimary} keyboardType="numeric" />
            </View>
            {precos.bovina.map((peca, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.peca}>{peca.nome}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="R$ 0,00"
                  placeholderTextColor="white"
                  keyboardType="numeric"
                  value={peca.preco}
                  onChangeText={(text) =>
                    handleInputChange('bovina', index, text)
                  }
                />
              </View>
            ))}
          </View>
          <Divisor />
          <View>
            <AnimalIcon name="pig" size={35} />
            <View style={styles.titleRow}>
              <Text style={styles.titulo}>Suína: </Text>
              <TextInput style={styles.inputPrimary} keyboardType="numeric" />
            </View>
            {precos.suina.map((peca, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.peca}>{peca.nome}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="R$ 0,00"
                  placeholderTextColor="white"
                  keyboardType="numeric"
                  value={peca.preco}
                  onChangeText={(text) =>
                    handleInputChange('suina', index, text)
                  }
                />
              </View>
            ))}
          </View>
          <Divisor />
          <View>
            <AnimalIcon name="chicken" size={30} />
            <View style={styles.titleRow}>
              <Text style={styles.titulo}>Frango: </Text>
              <TextInput style={styles.inputPrimary} keyboardType="numeric" />
            </View>
            {precos.frango.map((peca, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.peca}>{peca.nome}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="R$ 0,00"
                  placeholderTextColor="white"
                  keyboardType="numeric"
                  value={peca.preco}
                  onChangeText={(text) =>
                    handleInputChange('frango', index, text)
                  }
                />
              </View>
            ))}
          </View>
        </View>
        <SubmitButton
          btnTitle="Salvar"
          onPress={savePricesToDB}
          style={styles.submitButton}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20
  },
  title: {
    fontSize: 30,
    fontFamily: 'InriaSans_700Bold'
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'InriaSans_700Bold',
    marginBottom: 20
  },
  view: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10
  },
  titulo: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 20,
    fontFamily: 'InriaSans_700Bold',
    color: colors.light
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: '20%'
  },
  peca: {
    fontFamily: 'InriaSans_400Regular',
    color: colors.light,
    textAlign: 'center'
  },
  inputPrimary: {
    width: '50%',
    height: 24,
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: colors.light,
    borderBottomWidth: 3,
    color: colors.light,
    marginBottom: 20,
    marginLeft: 10
  },
  input: {
    width: 85,
    height: 24,
    borderWidth: 0,
    borderColor: colors.light,
    borderBottomWidth: 1,
    marginRight: '20%',
    color: colors.light
  },
  titleRow: {
    flexDirection: 'row', // Organiza os itens na linha
    alignSelf: 'center', // Alinha os itens ao centro ao longo do eixo transversal (vertical)
    marginTop: '5%'
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: '5%'
  }
});
