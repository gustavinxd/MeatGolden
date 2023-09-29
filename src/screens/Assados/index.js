import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen';
import SubmitButton from '../../components/Buttons/SubmitButton';
import CustomDropdown from '../../components/CustomDropdown';
import { useProgressContext } from '../../contexts/progress';
import CheckOption from '../../components/CheckOption';
import Separator from '../../components/Separator/index';;

export default function Assados({ navigation }) {
  const { updateProgress } = useProgressContext();

  // const [opcoesSelecionadas, setOpcoesSelecionadas] = useState({
  //   bovina: [],
  //   suina: [],
  //   frango: []
  // });

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(0.25);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.0);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DescriptionScreen
          title="Agora é os assados!"
          subTitle="Quais carnes serão servidas?"
          desc="Selecione os assados que desejar."
          colorText="red"
        />
        <View style={styles.optionsSection}>
          <CustomDropdown
            hasAction
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.primary}
              />
            }
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption checkLabel="Picanha" />
              <CheckOption checkLabel="Contra-filé" />
              <CheckOption checkLabel="Cupim" />
            </View>
          </CustomDropdown>

          <CustomDropdown
            hasAction
            selectTitle="Suína"
            icon={
              <MaterialCommunityIcons
                name="pig"
                size={30}
                color={colors.primary}
              />
            }
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption checkLabel="Linguiça" />
              <CheckOption checkLabel="Paleta" />
              <CheckOption checkLabel="Costela" />
            </View>
          </CustomDropdown>

          <CustomDropdown
            hasAction
            selectTitle="Frango"
            icon={
              <MaterialCommunityIcons
                name="food-drumstick"
                size={30}
                color={colors.primary}
              />
            }
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption checkLabel="Coxa" />
              <CheckOption checkLabel="Asa" />
              <CheckOption checkLabel="Coração" />
            </View>
          </CustomDropdown>
        </View>
        <View style={styles.bottomSection}>
          <SubmitButton
            btnColor="red"
            btnTitle="Continuar"
            onPress={() => navigation.navigate('Bebidas')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center'
  },
  content: {
    width: '85%',
    paddingTop: 50
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
