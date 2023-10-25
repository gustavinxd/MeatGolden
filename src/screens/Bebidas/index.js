import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import SelectOption from '../../components/SelectOption/index';
import { useProgressContext } from '../../contexts/progress';
import { useValueContext } from '../../contexts/values';

export default function Bebidas({ navigation }) {
  const { updateProgress } = useProgressContext();
  const { value, updateCerveja, updateRefrigerante, updateSuco, updateAgua } =
    useValueContext();

  useEffect(() => {
    updateProgress(0.5);

    return () => {
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
            selectTitle="Cerveja"
            icon="beer"
            onChange={() => updateCerveja(!value.bebidas.cerveja)}
            selected={value.bebidas.cerveja}
          />

          <SelectOption
            selectTitle="Refrigerante"
            icon="bottle-soda"
            onChange={() => updateRefrigerante(!value.bebidas.refrigerante)}
            selected={value.bebidas.refrigerante}
          />

          <SelectOption
            selectTitle="Suco"
            icon="cup"
            onChange={() => updateSuco(!value.bebidas.suco)}
            selected={value.bebidas.suco}
          />

          <SelectOption
            selectTitle="Água"
            icon="cup-water"
            onChange={() => updateAgua(!value.bebidas.agua)}
            selected={value.bebidas.agua}
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
