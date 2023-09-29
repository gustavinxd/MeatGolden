import { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen/index';
import SubmitButton from '../../components/Buttons/SubmitButton/index';
import { useProgressContext } from '../../contexts/progress';
import CustomDropdown from '../../components/CustomDropdown/index';
import Separator from '../../components/Separator/index';
import ListResults from '../../components/ListResults/index';

export default function Resultados({ navigation }) {
  const { updateProgress } = useProgressContext();

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(1);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.75);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DescriptionScreen
          title="É hora do churras!"
          subTitle="Eis aqui o resultado de sua lista de compras:"
        />
        <View style={styles.optionsSection}>
          <CustomDropdown
          hasAction
          colorSelection='light'
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="face-man-outline"
                size={30}
                color={colors.light}
              />
            }
          >
            <Separator color='light'/>
              <ListResults/>
              <ListResults/>
              <ListResults/>
          </CustomDropdown>
        </View>
        <View style={styles.bottomSection}>
          <SubmitButton
            btnTitle="Home"
            onPress={() => navigation.navigate('Menu')}
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
    marginTop: -15
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  }
});
