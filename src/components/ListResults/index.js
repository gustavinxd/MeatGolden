import { Text, View,StyleSheet } from 'react-native';
import colors from '../../colors';
import { useThemeContext } from '../../contexts/theme';

export default function ListResults({ colorText = 'light' }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  const colorSelection = colorText === 'red' ? themeColor : colors.light;

  return (
    <View style={styles.container}>
      <Text style={[styles.titleList, {color: colorSelection}]}>Assados</Text>
      <View style={styles.dataListSection}>
        <Text style={[styles.dataList, {color: colorSelection}]}>- Opção 1</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold', color: colorSelection}]}>5 kg</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold', color: colorSelection}]}>R$ 100</Text>
      </View>
      <View style={styles.dataListSection}>
        <Text style={[styles.dataList, {color: colorSelection}]}>- Opção 1</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold', color: colorSelection}]}>5 kg</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold', color: colorSelection}]}>R$ 100</Text>
      </View>
      <View style={styles.dataListSection}>
        <Text style={[styles.dataList, {color: colorSelection}]}>- Opção 1</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold', color: colorSelection}]}>5 kg</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold', color: colorSelection}]}>R$ 100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        // borderWidth: 1
    },
    titleList:{
        fontFamily: 'InriaSans_700Bold',
        fontSize: 20,
        marginBottom: 5
        
    },
    dataList:{
        fontFamily: 'InriaSans_400Regular',
        fontSize: 16,
    },
    dataListSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10
    }
})