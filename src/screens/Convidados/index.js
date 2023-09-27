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
  const { updateProgress } = useProgressContext();

  const [convidados, setConvidados] = useState({
    homens: 0,
    mulheres: 0,
    criancas: 0,
    total: 0
  });

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(0);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.75);
    };
  }, []);

  useEffect(() => {
    const { homens, mulheres, criancas } = convidados;
    const totalConvidados = parseInt(homens) + parseInt(mulheres) + parseInt(criancas);
    setConvidados({ ...convidados, total: totalConvidados });
    console.log(convidados);
  }, [convidados.homens || convidados.mulheres || convidados.criancas]);

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
            onValueChange={(e) =>
              setConvidados({ ...convidados, homens: parseInt(e) })
            }
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
            onValueChange={(e) =>
              setConvidados({ ...convidados, mulheres: parseInt(e) })
            }
          />

          <CustomSlider
            sliderTitle="Crianças"
            icon={
              <MaterialIcons name="child-care" size={30} color={colors.light} />
            }
            value={convidados.criancas}
            onValueChange={(e) =>
              setConvidados({ ...convidados, criancas: parseInt(e) })
            }
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
