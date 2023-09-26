import { View, Text, StyleSheet } from 'react-native';
import colors from '../../colors';

export default function OutputValue({ value, icon, outputTitle }) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.outputText}>{value}</Text>
      <Text style={styles.outputText}>{outputTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    flexDirection: 'column',
    alignItems:'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.light
  },
  outputText:{
    fontFamily: 'InriaSans_700Bold',
    fontSize: 16,
    color: colors.light
  }
});
