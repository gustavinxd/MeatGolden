import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';

export default function CheckOption({ onChange, checkLabel, checked: propChecked }) {
  // Adiciona um estado local para manter o controle do status de verificação
  const [checked, setChecked] = useState(propChecked);

  // Sincronize o estado local com o prop quando ele muda
  useEffect(() => {
    setChecked(propChecked);
  }, [propChecked]);

  const handlePress = () => {
    // Atualiza o estado local quando o componente é clicado
    const newChecked = !checked;
    setChecked(newChecked);

    // Chama a função onChange passada como prop para atualizar o estado no componente pai
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={handlePress}
      >
        {checked && (
          <FontAwesome5 name="check" size={20} color={colors.light} />
        )}
      </TouchableOpacity>
      <Text style={styles.checkLabel}>{checkLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  checkboxBase: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent'
  },
  checkboxChecked: {
    backgroundColor: colors.primary
  },
  checkLabel:{
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    color: colors.primary
  },
});
