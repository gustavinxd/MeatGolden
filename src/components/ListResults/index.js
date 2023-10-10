import { Text, View,StyleSheet } from 'react-native';
import colors from '../../colors';

export default function ListResults() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>Assados</Text>
      <View style={styles.dataListSection}>
        <Text style={styles.dataList}>- Opção 1</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold'}]}>5 kg</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold'}]}>R$ 100</Text>
      </View>
      <View style={styles.dataListSection}>
        <Text style={styles.dataList}>- Opção 1</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold'}]}>5 kg</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold'}]}>R$ 100</Text>
      </View>
      <View style={styles.dataListSection}>
        <Text style={styles.dataList}>- Opção 1</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold'}]}>5 kg</Text>
        <Text style={[styles.dataList, {fontFamily: 'InriaSans_700Bold'}]}>R$ 100</Text>
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
        color: colors.light,
        marginBottom: 5
        
    },
    dataList:{
        fontFamily: 'InriaSans_400Regular',
        fontSize: 16,
        color: colors.light
    },
    dataListSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10
    }
})