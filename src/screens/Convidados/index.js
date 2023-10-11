import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import CustomSlider from '../../components/CustomSlider/index';
import OutputValue from '../../components/OutputValue/index';
import { useProgressContext } from '../../contexts/progress';
import { useValueContext } from '../../contexts/values';

export default function Convidados({ navigation }) {
  const { updateProgress, progress } = useProgressContext();

  const { updateHomens, updateMulheres, updateCriancas, updateTotal } =
    useValueContext();

  const [convidados, setConvidados] = useState({
    homens: 0,
    mulheres: 0,
    criancas: 0,
    total: 0
  });

  const setConvidadosValue = (categoria, value) => {
    // Garanta que o valor esteja entre 0 e 50
    const newValue = Math.min(Math.max(value, 0), 50);
    setConvidados((prevState) => ({
      ...prevState,
      [categoria]: newValue
    }));
  };

  const addHomembyInput = (e) => {
    if (e === '') {
      setConvidados((prevState) => ({ ...prevState, homens: 0 }));
      updateHomens(0);
    } else {
      const newHomens = parseInt(e, 10);
      const total = newHomens + convidados.mulheres + convidados.criancas;
      if (total <= 50) {
        setConvidados((prevState) => ({ ...prevState, homens: newHomens }));
        updateHomens(newHomens);
      }
    }
  };

  const addMulherbyInput = (e) => {
    if (e === '') {
      setConvidados((prevState) => ({ ...prevState, mulheres: 0 }));
      updateMulheres(0);
    } else {
      const newMulheres = parseInt(e, 10);
      const total = convidados.homens + newMulheres + convidados.criancas;
      if (total <= 50) {
        setConvidados((prevState) => ({ ...prevState, mulheres: newMulheres }));
        updateMulheres(newMulheres);
      }
    }
  };

  const addCriancabyInput = (e) => {
    if (e === '') {
      setConvidados((prevState) => ({ ...prevState, criancas: 0 }));
      updateCriancas(0);
    } else {
      const newCriancas = parseInt(e, 10);
      const total = convidados.homens + convidados.mulheres + newCriancas;
      if (total <= 50) {
        setConvidados((prevState) => ({ ...prevState, criancas: newCriancas }));
        updateCriancas(newCriancas);
      }
    }
  };

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    if (progress !== 0) updateProgress(0);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0);
    };
  }, []);

  useEffect(() => {
    const { homens, mulheres, criancas } = convidados;
    const newTotal = homens + mulheres + criancas;

    if (newTotal > 50) {
      // Se o novo total exceder 50, ajuste os valores
      const availableSpace = 50 - (newTotal - convidados.total);
      setConvidados((prevState) => ({
        ...prevState,
        homens: Math.min(homens, availableSpace),
        mulheres: Math.min(mulheres, availableSpace),
        criancas: Math.min(criancas, availableSpace),
        total: 50
      }));
      updateHomens(Math.min(homens, availableSpace));
      updateMulheres(Math.min(mulheres, availableSpace));
      updateCriancas(Math.min(criancas, availableSpace));
      updateTotal(50);
    } else {
      setConvidados((prevState) => ({
        ...prevState,
        total: newTotal
      }));
      updateHomens(homens);
      updateMulheres(mulheres);
      updateCriancas(criancas);
      updateTotal(newTotal);
    }
  }, [convidados.homens, convidados.mulheres, convidados.criancas]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
            value={convidados.homens}
            onValueChange={(e) => {
              const newValue = parseInt(e.toFixed(), 10);
              const total =
                newValue + convidados.mulheres + convidados.criancas;
              if (total <= 50) {
                setConvidados((prevState) => ({
                  ...prevState,
                  homens: newValue
                }));
              }
            }}
            onChangeText={(e) => addHomembyInput(e)}
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
            value={convidados.mulheres}
            onValueChange={(e) => {
              const newValue = parseInt(e.toFixed(), 10);
              const total = convidados.homens + newValue + convidados.criancas;
              if (total <= 50) {
                setConvidados((prevState) => ({
                  ...prevState,
                  mulheres: newValue
                }));
              }
            }}
            onChangeText={(e) => addMulherbyInput(e)}
          />

          <CustomSlider
            sliderTitle="Crianças"
            icon={
              <MaterialIcons name="child-care" size={30} color={colors.light} />
            }
            value={convidados.criancas}
            onValueChange={(e) => {
              const newValue = parseInt(e.toFixed(), 10);
              const total = convidados.homens + convidados.mulheres + newValue;
              if (total <= 50) {
                setConvidados((prevState) => ({
                  ...prevState,
                  criancas: newValue
                }));
              }
            }}
            onChangeText={(e) => addCriancabyInput(e)}
          />
        </View>
        <View style={styles.bottomSection}>
          <OutputValue
            icon={
              <MaterialIcons name="people-alt" size={30} color={colors.light} />
            }
            value={convidados.total}
            outputTitle="Convidados"
          />
          <SubmitButton
            btnTitle="Continuar"
            onPress={() => navigation.navigate('Assados')}
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
