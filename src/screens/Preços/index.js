import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Divisor from '../../components/Divider/divisor';
import SubmitButton from '../../components/Buttons/SubmitButton';
import colors from '../../colors/index';
import Icon from '../../../assets/icon/icons';
import AlertComponent from '../../components/Alert/index';

//Passar o valor do input para REAL
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

const PrecosScreen = ({ navigation }) => {
  const [precos, setPrecos] = useState({
    bovina: [
      { nome: 'Contra Filé', preco: '' },
      { nome: 'Maminha', preco: '' },
      { nome: 'Cupim', preco: '' }
    ],
    suina: [
      { nome: 'Picanha', preco: '' },
      { nome: 'Linguiça', preco: '' },
      { nome: 'Paleta', preco: '' }
    ],
    frango: [
      { nome: 'Coxa', preco: '' },
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Configurar Preços</Text>
        <Text style={styles.subtitle}>Altere para os valores corretos!</Text>
        <View style={styles.view}>
          <AlertComponent />
          <View style={styles.grupo}>
            <View style={styles.iconRow}>
              <Icon name="ox" size={30} />
              <Text style={styles.titulo}>Bovina</Text>
            </View>
            {precos.bovina.map((peca, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.peca}>{peca.nome}</Text>
                <TextInput
                  style={styles.input}
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
          <View style={styles.grupo}>
            <View style={styles.iconRow}>
              <Icon name="pig" size={30} />
              <Text style={styles.titulo}>Suína</Text>
            </View>
            {precos.suina.map((peca, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.peca}>{peca.nome}</Text>
                <TextInput
                  style={styles.input}
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
          <View style={styles.grupo}>
            <View style={styles.iconRow}>
              <Icon name="chicken" size={30} />
              <Text style={styles.titulo}>Frango</Text>
            </View>
            {precos.frango.map((peca, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.peca}>{peca.nome}</Text>
                <TextInput
                  style={styles.input}
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
          // onPress={''}
          style={styles.submitButton}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
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
    padding: 24,
    borderRadius: 10
  },
  grupo: {
    marginBottom: 20
  },
  titulo: {
    fontSize: 20,
    marginLeft: 10,
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
  input: {
    width: 85,
    height: 24,
    borderWidth: 0,
    borderColor: colors.light,
    borderBottomWidth: 1,
    marginRight: '20%',
    color: colors.light
  },
  iconRow: {
    flexDirection: 'row', // Organiza os itens na linha
    alignItems: 'center', // Alinha os itens ao centro ao longo do eixo transversal (vertical)
    marginBottom: 20
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: '5%'
  }
});

export default PrecosScreen;
