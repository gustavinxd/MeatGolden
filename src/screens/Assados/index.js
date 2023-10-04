import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen';
import SubmitButton from '../../components/Buttons/SubmitButton';
import CustomDropdown from '../../components/CustomDropdown';
import { useProgressContext } from '../../contexts/progress';
import CheckOption from '../../components/CheckOption';
import Separator from '../../components/Separator/index';
import { useValueContext } from '../../contexts/values';

export default function Assados({ navigation }) {
  const { updateProgress } = useProgressContext();
  const { value, updateBovina, updateSuina, updateFrango } = useValueContext();

  const [checked, setChecked] = useState({
    picanha: false,
    contra_file: false,
    cupim: false,
    linguica: false,
    paleta: false,
    costela: false,
    coxa: false,
    asa: false,
    coracao: false
  });

  const [selectedOptions, setSelectedOptions] = useState({
    bovina: [],
    suina: [],
    frango: []
  });

  useEffect(() => {
    // Aumente o progresso quando a tela for montada
    updateProgress(0.25);
    console.log(value);

    return () => {
      // Diminua o progresso quando a tela for desmontada (caso deseje)
      updateProgress(0.0);
    };
  }, []);

  // Função para atualizar as opções selecionadas nos CheckOptions
  const handleCheckOptionChange = (option, tipoCarne) => {
    setSelectedOptions((prevState) => {
      const updatedOptions = { ...prevState };
      const index = updatedOptions[tipoCarne].indexOf(option);

      if (index === -1) {
        // Se a opção não estiver selecionada, adicione-a
        updatedOptions[tipoCarne].push(option);
      } else {
        // Se a opção estiver selecionada, remova-a
        updatedOptions[tipoCarne].splice(index, 1);
      }

      // Atualize o objeto value no contexto com base nas seleções
      if (tipoCarne === 'bovina') {
        updateBovina(updatedOptions.bovina);
      } else if (tipoCarne === 'suina') {
        updateSuina(updatedOptions.suina);
      } else if (tipoCarne === 'frango') {
        updateFrango(updatedOptions.frango);
      }

      return updatedOptions;
    });
  };

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
          <CustomDropdown
            selectTitle="Bovina"
            icon={
              <MaterialCommunityIcons
                name="cow"
                size={30}
                color={colors.primary}
              />
            }
            selected={selectedOptions.bovina} // Passe o valor atual
          >
            <Separator />
            <View style={{ gap: 10, padding: 10 }}>
              <CheckOption
                checkLabel="Picanha"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    picanha: !prevState.picanha // Corrigido aqui
                  }));
                  handleCheckOptionChange('Picanha', 'bovina');
                }}
                checked={checked.picanha}
              />

              <CheckOption
                checkLabel="Contra-filé"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    contra_file: !prevState.contra_file
                  }));
                  handleCheckOptionChange('Contra-filé', 'bovina');
                }}
                checked={checked.contra_file}
              />

              <CheckOption
                checkLabel="Cupim"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    cupim: !prevState.cupim
                  }));
                  handleCheckOptionChange('Cupim', 'bovina');
                }}
                checked={checked.cupim}
              />
            </View>
          </CustomDropdown>

          <CustomDropdown
            selectTitle="Suína"
            icon={
              <MaterialCommunityIcons
                name="pig"
                size={30}
                color={colors.primary}
              />
            }
            selected={selectedOptions.suina} // Passe o valor atual
          >
            <Separator />
            <View style={styles.dropdownSection}>
              <CheckOption
                checkLabel="Linguiça"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    linguica: !prevState.linguica
                  }));
                  handleCheckOptionChange('Linguiça', 'suina');
                }}
                checked={checked.linguica}
              />
              <CheckOption
                checkLabel="Paleta"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    paleta: !prevState.paleta
                  }));
                  handleCheckOptionChange('Paleta', 'suina');
                }}
                checked={checked.paleta}
              />

              <CheckOption
                checkLabel="Costela"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    costela: !prevState.costela
                  }));
                  handleCheckOptionChange('Costela', 'suina');
                }}
                checked={checked.costela}
              />
            </View>
          </CustomDropdown>

          <CustomDropdown
            selectTitle="Frango"
            icon={
              <MaterialCommunityIcons
                name="food-drumstick"
                size={30}
                color={colors.primary}
              />
            }
            selected={selectedOptions.frango} // Passe o valor atual
          >
            <Separator />
            <View style={styles.dropdownSection}>
              <CheckOption
                checkLabel="Coxa"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    coxa: !prevState.coxa
                  }));
                  handleCheckOptionChange('Coxa', 'frango');
                }}
                checked={checked.coxa}
              />

              <CheckOption
                checkLabel="Asa"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    asa: !prevState.asa
                  }));
                  handleCheckOptionChange('Asa', 'frango');
                }}
                checked={checked.asa}
              />

              <CheckOption
                checkLabel="Coração"
                onChange={() => {
                  setChecked((prevState) => ({
                    ...prevState,
                    coracao: !prevState.coracao
                  }));
                  handleCheckOptionChange('Coração', 'frango');
                }}
                checked={checked.coracao}
              />
            </View>
          </CustomDropdown>
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
  },
  dropdownSection: {
    gap: 10,
    padding: 10,
    overflow: 'hidden'
  }
});
