import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import CustomSlider from '../../components/CustomSlider/index';
import OutputValue from '../../components/OutputValue/index';
import { useProgressContext } from '../../contexts/progress';
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
      <View style={styles.content}>
        <DescriptionScreen
          title="É hora do churras!"
          subTitle="Eis aqui o resultado de sua lista de compras:"
        />
        <View style={styles.slidersSection}>
          <CustomSlider
            sliderTitle="Homens"
            icon={
              <MaterialCommunityIcons
                name="face-man-outline"
                size={30}
                color={colors.light}
              />
            }
          />
          <CustomSlider
            sliderTitle="Mulheres"
            icon={
              <MaterialCommunityIcons
                name="face-woman-outline"
                size={30}
                color={colors.light}
              />
            }
          />
          <CustomSlider
            sliderTitle="Crianças"
            icon={
              <MaterialIcons name="child-care" size={30} color={colors.light} />
            }
          />
        </View>
        <View style={styles.bottomSection}>
          <OutputValue
            icon={
              <MaterialIcons name="people-alt" size={30} color={colors.light} />
            }
            value="10"
            outputTitle="Convidados"
          />
          <SubmitButton
            btnTitle={selectedAddress || "Home"}
            onPress={() => navigation.navigate('Menu')}
          />
          <Button
            title="Abrir Mapa"
            onPress={() => setMapVisible(true)}
          />
          <MapModal
            visible={isMapVisible}
            onClose={() => setMapVisible(false)}
            onSaveLocation={(address) => setSelectedAddress(address)}
          />
        </View>
      </View>
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
    width: '85%',
    paddingTop: 50
  },
  slidersSection: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 20
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  }
});
