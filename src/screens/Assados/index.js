import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import ProgressBar from '../../components/ProgressBar/index';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import SelectOption from '../../components/SelectOption/index';

export default function Assados({ navigation }) {
  return (
    <View style={styles.container}>
      <ProgressBar />
      <DescriptionScreen
        title="Agora é os assados!"
        subTitle="Quais carnes serão servidas?"
        desc="Selecione os assados que desejar."
        colorText="red"
      />
      <View style={styles.optionsSection}>
        <SelectOption
          selectTitle="Bovina"
          icon={
            <MaterialCommunityIcons
              name="cow"
              size={30}
              color={colors.primary}
            />
          }
        />
        <SelectOption
          selectTitle="Suína"
          icon={
            <MaterialCommunityIcons
              name="pig"
              size={30}
              color={colors.primary}
            />
          }
        />
        <SelectOption
          selectTitle="Frango"
          icon={<FontAwesome5 name="kiwi-bird" size={30} color={colors.primary} />}
        />
      </View>
      <View style={styles.bottomSection}>
        <SubmitButton
          btnColor="red"
          btnTitle="Continuar"
          onPress={() => navigation.navigate('Bebidas')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 20
  },
  optionsSection: {
    flexDirection: 'column',
    gap: 15,
    marginTop: 10,
    marginBottom: 20
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  }
});
