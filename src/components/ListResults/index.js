import { Text, View, StyleSheet } from 'react-native';
import colors from '../../colors';

export default function ListResults({ title, results }) {
  const items = results ? Object.entries(results).filter((entry) => 
    (typeof entry[1] === 'object' 
      ? Object.keys(entry[1]).filter(key => entry[1][key] > 0).length > 0 
      : entry[1] > 0)
  ) : [];

  // Função para converter gramas para quilos, se necessário, e para ajustar as unidades para bebidas e acompanhamentos
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
    
    return `${value} Pcts`;  // Acompanhamentos
  };

  // Renderiza somente se houver itens
  if (items.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>{title}</Text>
      {items.map(([itemName, value]) => (
        (typeof value === 'object' 
          ? Object.entries(value).filter(([, subValue]) => subValue > 0)
          : [[itemName, value]]
        ).map(([subItemName, itemValue]) => (
          <View key={subItemName} style={styles.dataListSection}>
            <Text style={styles.dataList}>- {subItemName}</Text>
            <Text style={[styles.dataList, { fontFamily: 'InriaSans_700Bold' }]}>
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
    color: colors.light,
    marginBottom: 5,
  },
  dataList: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    color: colors.light,
  },
  dataListSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
