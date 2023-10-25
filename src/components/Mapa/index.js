import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import SubmitButton from '../Buttons/SubmitButton';
import FabButton from '../Buttons/FabButton';

export default function MapModal({ visible, onSaveLocation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchAddress, setSearchAddress] = useState('');
  const [foundLocation, setFoundLocation] = useState(null);
  const [addressLabel, setAddressLabel] = useState('');

  useEffect(() => {
    if (foundLocation) {
      const newAddressLabel = searchAddress;
      setAddressLabel(newAddressLabel);
      console.log('Atualizando localização selecionada:', foundLocation);
      setSelectedLocation(foundLocation);
    }
  }, [foundLocation]);

  const handleSearchAddress = async () => {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        searchAddress
      )}&key=AIzaSyCUfswrJow3syJzOJXhKoIaZC2ZkkDiXls`; // Substitua pela sua chave de API
      const response = await axios.get(url);
      console.log('Resposta da API:', response.data);
  
      if (response.data && response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setFoundLocation({ latitude: lat, longitude: lng });
      } else {
        console.error('Endereço não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };
  
  const handleSaveLocation = () => {
    onSaveLocation(addressLabel);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: selectedLocation?.latitude || 0,
            longitude: selectedLocation?.longitude || 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onPress={(event) => setSelectedLocation(event.nativeEvent.coordinate)}
        >
          {selectedLocation && (
            <Marker coordinate={selectedLocation} title="Local Selecionado" />
          )}
        </MapView>

        {/* Barra de busca */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o endereço"
              value={searchAddress}
              onChangeText={(text) => setSearchAddress(text)}
              onEndEditing={handleSearchAddress}
            />
            <MaterialIcons name="search" size={30} color={colors.darkGrey} />
          </View>
        </View>

        {/* Section de botões */}
        <View style={styles.buttonSection}>
          <SubmitButton
            btnTitle="Salvar Localização"
            onPress={handleSaveLocation}
            btnColor="red"
            style={{}}
          />
          <FabButton icon="my-location" btnColor="red" style={{}} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  inputSection: {
    width: '100%',
    position: 'absolute',
    top: '5%',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.primary,
    backgroundColor: colors.light,
    opacity: 0.75,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '75%'
  },
  input: {
    width: '90%',
    paddingHorizontal: 10,
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16
  },
  buttonSection: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%'
  }
});
