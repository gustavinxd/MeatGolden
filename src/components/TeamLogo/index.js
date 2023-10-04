import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';
import { useThemeContext } from '../../contexts/theme';

export default function TeamLogo() {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.dark : colors.light;
  return (
    <View style={styles.container}>
      <FontAwesome5 name="skull" size={22} color={themeColor} />
      <Text style={[styles.text, { color: colors.primary }]}>Pirate</Text>
      <Text style={[styles.text, { color: themeColor }]}>Devs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 20,
    fontFamily: 'InriaSans_700Bold'
  }
});
