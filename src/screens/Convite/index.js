import React, { useState } from 'react';
import { View, Text, Share, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import colors from '../../colors/index';
import DatePicker from 'react-native-datepicker';


const Convite = ({ navigation }) => {

  
  //Cria variavel e uma função para atualizar ela
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [hora, setHora] = useState('');

  const compartilharConvite = async () => {
    try {
      const preMensagem = `
      🔥 Convite Especial do MeatGolden 🔥
      
      Olá, amante de churrasco!
      
      Você está convidado para um churrasco incrível que estamos organizando com muito carinho! 
      É o momento perfeito para saborear carnes suculentas e criar memórias inesquecíveis.
      
      E o melhor de tudo? Se você baixar o nosso aplicativo *MeatGolden*, terá acesso a calculadora de churrasco COM-PLE-TA e receitas deliciosas! 
      Baixe agora e descubra como transformar seu churrasco em uma experiência gourmet.
      
      Detalhes do Churrasco:\n
      📅 Data: ${data}\n
      🕔 Hora: ${hora}\n
      📍 Local: ${endereco}\n
      
      Estamos ansiosos para vê-lo lá! Baixe o **MeatGolden** agora e junte-se a nós para uma festa de sabores irresistíveis.
      
      Até logo!
      `;
            
      //Permite o compartilhamento do conteúdo
      await Share.share({
        message: preMensagem,
      });
    } catch (error) {
      console.error('Erro ao compartilhar convite: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style = {styles.title}>Convite</Text>
        <Text  style = {styles.subtitle}>Convide seus amigos e familiares para participar!</Text>
        <View style={styles.view}>

          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={text => setTitulo(text)}
          />
          <Text style={styles.label}>Data:</Text>
          <TextInput
            style={styles.input}
            value={data}
            onChangeText={text => setData(text)}
            keyboardType='numeric'
          />
          <Text style={styles.label}>Hora:</Text>
          <TextInput
            style={styles.input}
            value={hora}
            onChangeText={text => setHora(text)}
            
          />
          <Text style={styles.label}>Endereço:</Text>
          <TextInput
            style={styles.input}
            value={endereco}
            onChangeText={text => setEndereco(text)}
          />
          <DatePicker
          date={setData}
          value={data}
          mode="date"
          format="YYYY-MM-DD"
          minDate="2022-01-01"
          maxDate="2023-12-31"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          timeZoneOffsetInMinutes={-180} // -180 para GMT-3 (Brasília)

          onDateChange={(date) => setData(date)}>
          </DatePicker>
        </View>
      </ScrollView>
    

      <Button title="Enviar" onPress={compartilharConvite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title:{
    fontSize: 30,
    fontFamily: 'InriaSans_700Bold',
  },
  subtitle:{
    fontSize: 20,
    fontFamily: 'InriaSans_700Bold',
    marginBottom: 20, 
  },
  view:{
    flex: 1,
    backgroundColor: colors.primary,
    height: '70%',
    width: '90%',
    borderRadius: 10,
    padding: 40,
    alignSelf: 'center'

  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'InriaSans_700Bold',
    color: colors.light,
  },
  input: {
    width: '100%',
    height: 30,
    marginBottom: 20,
    paddingLeft: 10,
    borderWidth: 0, // Remove todas as bordas
    borderColor: colors.black,
    borderBottomWidth: 1,
  },
});

export default Convite;
