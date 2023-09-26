import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import SelectOption from '../../components/SelectOption';
import { useProgressContext } from '../../contexts/progress';

export default function Adicionais({ navigation }) {
  const { updateProgress } = useProgressContext();

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(0.75);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.50);
    };
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DescriptionScreen
          title="Ta quase lá!"
          subTitle="Esta esquecendo de algo?"
          desc="Selecione suas considerações finais."
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
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.primary}
              />
            }
          />
        </View>
        <View style={styles.bottomSection}>
          <SubmitButton
            btnTitle="Calcular!"
            onPress={() => navigation.navigate('Resultados')}
            btnColor="red"
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
    marginBottom: 20,
    marginTop: 10
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  }
});
