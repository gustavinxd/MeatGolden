import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import CustomDropdown from '../../components/CustomDropdown';
import { useProgressContext } from '../../contexts/progress';
import Separator from '../../components/Separator';
import CheckOption from '../../components/CheckOption';
import { useValueContext } from '../../contexts/values'; // Mantenha esta importação
import { useThemeContext } from '../../contexts/theme'; // Mantenha esta importação

export default function Adicionais({ navigation }) {
  const { updateProgress } = useProgressContext();
  const { value, updateAdicionais } = useValueContext();
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.dark;
  const themeColorIcon = theme === 'light' ? colors.primary : colors.light;

  const [checkedItems, setCheckedItems] = useState(value.adicionais);

  const handleCheck = (item, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [item]: isChecked }));
    updateAdicionais(item, isChecked);
  };

  useEffect(() => {
    updateProgress(0.75);

    return () => {
      updateProgress(0.5);
    };
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: themeColor }]}>
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
              <CheckOption
                checkLabel="Pão Francês"
                onChange={() =>
                  handleCheck('paofrances', !checkedItems.paofrances)
                }
                checked={checkedItems.paofrances}
              />
              <CheckOption
                checkLabel="Farofa"
                onChange={() =>
                  handleCheck('farofa', !checkedItems.farofa)
                }
                checked={checkedItems.farofa}
              />
              <CheckOption
                checkLabel="Arroz"
                onChange={() =>
                  handleCheck('arroz', !checkedItems.arroz)
                }
                checked={checkedItems.arroz}
              />
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
              <CheckOption
                checkLabel="Gelo"
                onChange={() => handleCheck('gelo', !checkedItems.gelo)}
                checked={checkedItems.gelo}
              />
              <CheckOption
                checkLabel="Carvão"
                onChange={() => handleCheck('carvao', !checkedItems.carvao)}
                checked={checkedItems.carvao}
              />
              <CheckOption
                checkLabel="Guardanapo"
                onChange={() =>
                  handleCheck('guardanapo', !checkedItems.guardanapo)
                }
                checked={checkedItems.guardanapo}
              />
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
