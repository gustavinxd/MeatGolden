import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import SelectOption from '../../components/SelectOption/index';
import { useProgressContext } from '../../contexts/progress';

export default function Bebidas({ navigation }) {
    const { updateProgress } = useProgressContext();

    useEffect(() => {
      // Aumente o progresso quando a tela for montada
      updateProgress(0.50);

      return () => {
        // Diminua o progresso quando a tela for desmontada (caso deseje)
        updateProgress(0.25);
      };
    }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DescriptionScreen
          title="É a vez das bebidas!"
          subTitle="O que gostariam de beber?"
          desc="Selecione as bebidas que desejar."
        />
        <View style={styles.optionsSection}>
          <SelectOption
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.light}
              />
            }
            colorSelection="light"
          />

          <SelectOption
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.light}
              />
            }
            colorSelection="light"
          />

          <SelectOption
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.light}
              />
            }
            colorSelection="light"
          />
        </View>
        <View style={styles.bottomSection}>
          <SubmitButton
            btnTitle="Continuar"
            onPress={() => navigation.navigate('Adicionais')}
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
  optionsSection: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 20,
    marginTop: 10
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  }
});
