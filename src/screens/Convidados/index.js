import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ProgressBar from '../../components/ProgressBar/index';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import CustomSlider from '../../components/CustomSlider/index';
import OutputValue from '../../components/OutputValue/index';

export default function Convidados({ navigation }) {
  return (
    <View style={styles.container}>
      <ProgressBar />
      <DescriptionScreen
        title="Vamos começar!"
        subTitle="Quantos convidados teremos?"
        desc="Selecione a quantidade de convidados."
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
          btnTitle="Continuar"
          onPress={() => navigation.navigate('Assados')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20
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
