import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import CustomSlider from '../../components/CustomSlider/index';
import OutputValue from '../../components/OutputValue/index';
import { useProgressContext } from '../../contexts/progress';

export default function Convidados({ navigation }) {
  const { updateProgress, progress } = useProgressContext();

  const [convidados, setConvidados] = useState({
    homens: 0,
    mulheres: 0,
    criancas: 0,
    total: 0
  });

  const addHomembyInput = (e) => {
    if (e === '') {
      setConvidados((prevState) => ({ ...prevState, homens: 0 }));
    } else if(parseInt(e, 10) > 50) {
      setConvidados((prevState) => ({ ...prevState, homens: 50 }));
    } else{
      setConvidados((prevState) => ({ ...prevState, homens: parseInt(e, 10) }));
    }
  };

  const addMulherbyInput = (e) => {
    if (e === '') {
      setConvidados((prevState) => ({ ...prevState, mulheres: 0 }));
    } else if(parseInt(e, 10) > 50) {
      setConvidados((prevState) => ({ ...prevState, mulheres: 50 }));
    } else {
      setConvidados((prevState) => ({ ...prevState, mulheres: parseInt(e, 10) }));
    }
  };

  const addCriancabyInput = (e) => {
    if (e === '') {
      setConvidados((prevState) => ({ ...prevState, criancas: 0 }));
    } else if(parseInt(e, 10) > 50) {
      setConvidados((prevState) => ({ ...prevState, criancas: 50 }));
    } else {
      setConvidados((prevState) => ({ ...prevState, criancas: parseInt(e, 10) }));
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
    setConvidados((prevState) => ({ ...prevState, total: newTotal }));
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
              setConvidados((prevState) => ({
                ...prevState,
                homens: newValue
              }));
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
              setConvidados((prevState) => ({
                ...prevState,
                mulheres: newValue
              }));
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
              setConvidados((prevState) => ({
                ...prevState,
                criancas: newValue
              }));
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
