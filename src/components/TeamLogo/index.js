import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';

export default function TeamLogo() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="skull" size={22} color={colors.dark} />
      <Text style={[styles.text,{color: colors.primary}]}>Pirate</Text>
      <Text style={[styles.text,{color: colors.dark}]}>Devs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text:{
    fontSize : 20,
    fontFamily: 'InriaSans_700Bold'
  }
});
