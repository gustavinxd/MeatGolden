import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen';
import SubmitButton from '../../components/Buttons/SubmitButton';
import SelectOption from '../../components/SelectOption';
import { useProgressContext } from '../../contexts/progress';
import CheckOption from '../../components/CheckOption';
import Separator from './../../components/Separator/index';

export default function Assados({ navigation }) {
  const { updateProgress } = useProgressContext();
  const [check, setCheck] = useState(false);

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

          <SelectOption
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.primary}
              />
            }
          >
            <Separator/>
            <View style={{gap: 10, padding: 10}}>
              <CheckOption checked={check} onPress={() => setCheck(!check)} />
              <CheckOption checked={check} onPress={() => setCheck(!check)} />
              <CheckOption checked={check} onPress={() => setCheck(!check)} />
            </View>
          </SelectOption>

          <SelectOption
            selectTitle="Suína"
            icon={
              <MaterialCommunityIcons
                name="pig"
                size={30}
                color={colors.primary}
              />
            }
          />
          
          <SelectOption
            selectTitle="Frango"
            icon={
              <FontAwesome5 name="kiwi-bird" size={30} color={colors.primary} />
            }
          />

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
