import React, { useState, useEffect } from 'react';
import {  Modal, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function MapModal({ visible, onClose, onSaveLocation }) {
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
      const url = `http://api.positionstack.com/v1/forward?access_key=8a23ff14ec42bdbf51a6864435b2e58e&query=${encodeURI(searchAddress)}`;
      const response = await axios.get(url);
      console.log('Resposta da API:', response.data);

      if (response.data && response.data.data.length > 0) {
        const { latitude, longitude } = response.data.data[0];
        setFoundLocation({ latitude, longitude });
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
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
          value={searchAddress}
          onChangeText={(text) => setSearchAddress(text)}
        />
        <Button title="Buscar Endereço" onPress={handleSearchAddress} />
        <MapView
          style={styles.map}
          region={{
            latitude: selectedLocation?.latitude || 0,
            longitude: selectedLocation?.longitude || 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(event) => setSelectedLocation(event.nativeEvent.coordinate)}
        >
          {selectedLocation && (
            <Marker coordinate={selectedLocation} title="Local Selecionado" />
          )}
        </MapView>
        <Button title="Salvar Localização" onPress={handleSaveLocation} />
        <Button title="Fechar" onPress={onClose} />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  map: {
    flex: 1,
  },
});
