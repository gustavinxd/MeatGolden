import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen';
import SubmitButton from '../../components/Buttons/SubmitButton';
import { useProgressContext } from '../../contexts/progress';
import CustomDropdown from '../../components/CustomDropdown';
import Separator from '../../components/Separator/index';
import ListResults from '../../components/ListResults';
import PreviewResults from '../../components/PrevviewResults';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import MapModal from '../../components/Mapa/index';

export default function Resultados({ navigation }) {
  const { updateProgress } = useProgressContext();
  const [isMapVisible, setMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(1);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.75);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={styles.content}>
          <View style={{ width: '85%', flexDirection: 'column' }}>
            <DescriptionScreen
              title="É hora do churras!"
              subTitle="Eis aqui o resultado de sua lista de compras:"
            />
            <View style={styles.optionsSection}>
              {/* Dropdown da lista de resultados de compras */}
              <CustomDropdown
                startOpen
                haveIcon={false}
                colorSelection="light"
                selectTitle="Bovina"
                topSection={<PreviewResults />}
                icon={
                  <MaterialCommunityIcons
                    name="face-man-outline"
                    size={30}
                    color={colors.light}
                  />
                }
              >
                <Separator color="light" />
                {/* Render da lista de compras */}
                <ListResults />
                <ListResults />
                <ListResults />
                <ListResults />

                {/* Section de resultados */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 25,
                    marginTop: 10
                  }}
                >
                  <View style={{ flexDirection: 'column', gap: 5 }}>
                    <Text style={styles.titleListResult}>Total:</Text>
                    <Text style={styles.dataListResult}>R$ 1000</Text>
                  </View>
                  <View style={{ flexDirection: 'column', gap: 5 }}>
                    <Text style={styles.titleListResult}>Rateio:</Text>
                    <Text style={styles.dataListResult}>R$ 200</Text>
                  </View>
                </View>

                {/* Section de salvar localização, salvar e compartilhar o churrasco */}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginTop: 10,
                    justifyContent: 'space-between'
                  }}
                >
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.titleListResult}>Local:</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                        width: 150
                      }}
                    >
                      <Text style={styles.dataListResult}>
                        {selectedAddress}
                      </Text>
                      <View style={{ alignSelf: 'flex-end' }}>
                        <ButtonIcon
                          onPress={() => {
                            setMapVisible((prevState) => !prevState)
                          }}
                          icon="map-marker-plus-outline"
                          colorButton="light"
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      gap: 15
                    }}
                  >
                    <ButtonIcon
                      icon="content-save-outline"
                      colorButton="light"
                    />
                    <ButtonIcon
                      icon="share-variant-outline"
                      colorButton="light"
                    />
                  </View>
                </View>
              </CustomDropdown>
            </View>
            <View style={styles.bottomSection}>
              <SubmitButton
                btnTitle="Home"
                onPress={() => navigation.navigate('Menu')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <MapModal
        visible={isMapVisible}
        onClose={() => setMapVisible(false)}
        onSaveLocation={(address) => {
          setSelectedAddress(address)
          setMapVisible((prevState) => !prevState)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  },
  optionsSection: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 20,
    marginTop: -10
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  },
  titleListResult: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 20,
    color: colors.light,
    marginBottom: 5
  },
  dataListResult: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    color: colors.light,
    flexWrap: 'wrap'
  }
});
