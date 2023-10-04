import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import CustomDropdown from '../../components/CustomDropdown';
import { useProgressContext } from '../../contexts/progress';
import Separator from '../../components/Separator';
import CheckOption from '../../components/CheckOption';
import { useThemeContext } from '../../contexts/theme';

export default function Adicionais({ navigation }) {
  const { updateProgress } = useProgressContext();
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.dark;
  const themeColorIcon = theme === 'light' ? colors.primary : colors.light;


  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(0.75);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.5);
    };
  }, []);

  return (
    <View style={[styles.container,{backgroundColor: themeColor}]}>
      <View style={styles.content}>
        <DescriptionScreen
          title="Ta quase lá!"
          subTitle="Esta esquecendo de algo?"
          desc="Selecione suas considerações finais."
          colorText="red"
        />
        <View style={styles.optionsSection}>
          <CustomDropdown
            selectTitle="Extras"
            icon={
              <MaterialCommunityIcons
                name="plus-box"
                size={30}
                color={themeColorIcon}
              />
            }
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption checkLabel="Pão de alho" />
              <CheckOption checkLabel="Vinagrete" />
              <CheckOption checkLabel="Queijo coalho" />
            </View>
          </CustomDropdown>

          <CustomDropdown
            selectTitle="Essências"
            icon={
              <MaterialCommunityIcons
                name="food-variant"
                size={30}
                color={themeColorIcon}
              />
            }
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption checkLabel="Gelo" />
              <CheckOption checkLabel="Carvão" />
              <CheckOption checkLabel="Guardanapo" />
            </View>
          </CustomDropdown>
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
