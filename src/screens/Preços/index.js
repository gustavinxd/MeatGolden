import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Divisor from '../../components/Divider';
import SubmitButton from '../../components/Buttons/SubmitButton';
import colors from '../../colors/index';
import AlertComponent from '../../components/Alert/index';
import AnimalIcon from '../../components/AnimalIcons';
import db from '../../database/index';

export default function PrecoScreen() {
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

  useEffect(() => {
    // Carregar os preços do banco de dados ao carregar a tela
    const loadPrices = async () => {
      try {
        const pricesFromDB = await getPricesFromDB();
        setPrecos(pricesFromDB);
      } catch (error) {
        console.log('Erro ao carregar preços do banco de dados:', error);
      }
    };

    loadPrices();
  }, []);

  const handleInputChange = async (grupo, index, value) => {
    // Atualizar o estado precos com os valores temporários
    const updatedPrecos = { ...precos };
    updatedPrecos[grupo][index].preco = value;
    setPrecos(updatedPrecos);

    // Atualizar o preço no banco de dados
    try {
      await db.transaction((tx) => {
        tx.executeSql(
          'INSERT OR REPLACE INTO precos (item, preco) VALUES (?, ?)',
          [precos[grupo][index].nome, value]
        );
      });

      console.log('Preço atualizado:', value);
    } catch (error) {
      console.log('Erro ao atualizar preço:', error);
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
          // onPress={''}
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
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%'
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: '5%'
  }
});
