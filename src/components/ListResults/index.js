import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../colors';
import { useThemeContext } from '../../contexts/theme';

export default function ListResults({ title, results, colorText = 'light' }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  const colorSelection = colorText === 'red' ? themeColor : colors.light;
  const items = results
    ? Object.entries(results).filter((entry) =>
        typeof entry[1] === 'object'
          ? Object.keys(entry[1]).filter((key) => entry[1][key] > 0).length > 0
          : entry[1] > 0
      )
    : [];

  const formatValue = (value, itemName) => {
    if (title === 'Carne') {
      return value > 999 ? `${(value / 1000).toFixed(2)} kg` : `${value.toFixed(2)} g`;
    }

    if (title === 'Bebidas') {
      if (itemName === 'cerveja') {
        return `${value} Latas`;
      }
      return `${value} Garrafas`;
    }

    return `${value} Pcts`; // Acompanhamentos
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.titleList, { color: colorSelection }]}>{title}</Text>
      {items.map(([itemName, value]) => (
        (typeof value === 'object'
          ? Object.entries(value).filter(([, subValue]) => subValue > 0)
          : [[itemName, value]]
        ).map(([subItemName, itemValue]) => (
          <View key={subItemName} style={styles.dataListSection}>
            <Text style={[styles.dataList, { color: colorSelection }]}>- {subItemName}</Text>
            <Text style={[styles.dataList, { fontFamily: 'InriaSans_700Bold', color: colorSelection }]}>
              {formatValue(itemValue, subItemName)}
            </Text>
          </View>
        ))
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleList: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 20,
    marginBottom: 5,
  },
  dataList: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
  },
  dataListSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
