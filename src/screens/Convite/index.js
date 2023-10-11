import React, { useState } from 'react';
import {
  View,
  Text,
  Share,
  TextInput,
  Platform,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../colors/index';
import SubmitButton from '../../components/Buttons/SubmitButton';
import ButtonIcon from '../../components/Buttons/ButtonIcon/index';
import MapModal from '../../components/Mapa/index';

export default function Convite() {
  // Cria variavel e uma função para atualizar ela
  const [nomeDoEvento, setnomeDoEvento] = useState('');
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [hora, setHora] = useState('');

  const formatarData = (dataNow) => {
    // Formatar a data para o formato local
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return dataNow.toLocaleDateString(undefined, options);
  };

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [isMapVisible, setMapVisible] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleDatepicker();
        setData(formatarData(currentDate)); // Formata a data antes de exibi-la no TextInput
      }
    } else {
      toggleDatepicker();
    }
  };

  const formatarHora = (input) => {
    // Remove qualquer não número da entrada
    const numeros = input.replace(/[^0-9]/g, '');
    // Adiciona os dois pontos para formatar como "HH:MM"
    if (numeros.length <= 2) {
      return numeros;
    }

    return `${numeros.slice(0, 2)}:${numeros.slice(2, 4)}`;
    // slice retorna uma nova cópia contendo os elementos ou caracteres extraídos
  };

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
      🎉 Evento: ${nomeDoEvento}\n
      📅 Data: ${data}\n
      🕔 Hora: ${hora}\n
      📍 Local: ${endereco}\n

      Estamos ansiosos para vê-lo lá! Baixe o **MeatGolden** agora e junte-se a nós para uma festa de sabores irresistíveis.
      
      Até logo!
      `;

      // Permite o compartilhamento do conteúdo
      await Share.share({
        message: preMensagem
      });
    } catch (error) {
      console.error('Erro ao compartilhar convite: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Convite</Text>
        <Text style={styles.subtitle}>
          Convide seus amigos e familiares para participar!
        </Text>
        <View style={styles.view}>
          <Icon
            name="message1"
            size={50}
            color="white"
            style={styles.iconMessage}
          />
          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            value={nomeDoEvento}
            onChangeText={(text) => setnomeDoEvento(text)}
          />
          <Text style={styles.label}>Data:</Text>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              value={date}
              onChange={onChange}
            />
          )}
          {!showPicker && (
            <Pressable onPress={toggleDatepicker}>
              <TextInput
                style={styles.input}
                value={data}
                onChangeText={setData}
                keyboardType="numeric"
                editable={false}
                onPressIn={toggleDatepicker}
              />
            </Pressable>
          )}
          <Text style={styles.label}>Hora:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={5} // Limita o comprimento do input para "HH:MM"
            value={hora}
            onChangeText={(text) => setHora(formatarHora(text))}
          />
          <Text style={styles.label}>Endereço:</Text>
          <View style={{ position: 'relative'}}>
            <TextInput
              style={styles.input}
              value={endereco}
              onChangeText={(text) => setEndereco(text)}
              editable={false} // Define o TextInput como não editável
            />
            <ButtonIcon
              onPress={() => {
                setMapVisible((prevState) => !prevState);
              }}
              icon="map-marker-plus-outline"
              colorButton="light"
              style={{position: 'absolute', right: 10, bottom: 25}}
            />
          </View>
        </View>
        <SubmitButton
          btnTitle="Enviar"
          onPress={compartilharConvite}
          style={styles.submitButton}
        />
      </ScrollView>
      <MapModal
        visible={isMapVisible}
        onClose={() => setMapVisible(false)}
        onSaveLocation={(address) => {
          setEndereco(address);
          setMapVisible((prevState) => !prevState);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
    color: colors.light
  },
  input: {
    width: '100%',
    height: 25,
    marginBottom: 20,
    paddingLeft: 10,
    paddingBottom: 2,
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    borderColor: colors.black,
    borderBottomWidth: 1,
    color: colors.light
  },
  iconMessage: {
    marginBottom: 20
  },
  viewContent: {
    flex: 1,
    backgroundColor: colors.primary,
    height: '70%',
    width: '90%',
    borderRadius: 10,
    padding: 40,
    alignSelf: 'center'
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: 30
  }
});
