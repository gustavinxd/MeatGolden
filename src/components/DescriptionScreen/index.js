import { StyleSheet, Text, View } from 'react-native';
import colors from '../../colors';
import { useThemeContext } from '../../contexts/theme';

export default function DescriptionScreen({
  title,
  subTitle,
  desc,
  colorText='light'
}) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, colorText === 'red' ? {color: themeColor} : {color: colors.light}]}>{title}</Text>
      <Text style={[styles.subTitle, colorText === 'red' ? {color: themeColor} : {color: colors.light}]}>{subTitle}</Text>
      <Text style={[styles.desc, colorText === 'red' ? {color: themeColor} : {color: colors.lightGrey}]}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    marginBottom: 15
  },
  title: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 34,
    marginBottom: 20
  },
  subTitle: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 17
  },
  desc: {
    fontFamily: 'InriaSans_300Light',
    fontSize: 14
  }
});
