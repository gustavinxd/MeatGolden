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
import { useValueContext } from '../../contexts/values';

export default function Adicionais({ navigation }) {
  const { updateProgress } = useProgressContext();
  const { value, updateAdicionais } = useValueContext();

  const [checkedItems, setCheckedItems] = useState(value.adicionais); // Inicializa o estado com os valores do contexto

  const handleCheck = (item, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [item]: isChecked }));
    updateAdicionais(item, isChecked); // Atualiza o contexto
  };

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(0.75);
    
    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.5);
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
          <CustomDropdown
            selectTitle="Extras"
            icon={
              <MaterialCommunityIcons
                name="plus-box"
                size={30}
                color={colors.primary}
              />
            }
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption
                checkLabel="Pão de alho"
                onChange={() =>
                  handleCheck('paodealho', !checkedItems.paodealho)
                }
                checked={checkedItems.paodealho}
              />
              <CheckOption
                checkLabel="Vinagrete"
                onChange={() =>
                  handleCheck('vinagrete', !checkedItems.vinagrete)
                }
                checked={checkedItems.vinagrete}
              />
              <CheckOption
                checkLabel="Queijo coalho"
                onChange={() =>
                  handleCheck('queijocoalho', !checkedItems.queijocoalho)
                }
                checked={checkedItems.queijocoalho}
              />
            </View>
          </CustomDropdown>

          <CustomDropdown
            selectTitle="Essências"
            icon={
              <MaterialCommunityIcons
                name="food-variant"
                size={30}
                color={colors.primary}
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
