import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';
import { useThemeContext } from '../../contexts/theme';

export default function CheckOption({ onChange, checkLabel, checked: propChecked }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  const themeColorChecked = theme === 'light' ? colors.light : colors.dark;
  const [check, setCheck] = useState(propChecked);

  useEffect(() => {
    setCheck(propChecked);
  }, [propChecked]);

  const handlePress = () => {
    const newChecked = !check;
    setCheck(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkboxBase, { borderColor: themeColor }, check && { backgroundColor: themeColor }]}
        onPress={() => {
          handlePress();
        }}
      >
        {check && (
          <FontAwesome5 name="check" size={20} color={themeColorChecked} />
        )}
      </TouchableOpacity>
      <Text style={[styles.checkLabel, { color: themeColor }]}>{checkLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  checkboxBase: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },

  checkLabel: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
  },
});
