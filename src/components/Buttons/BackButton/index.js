import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../../colors/index';
import { useThemeContext } from '../../../contexts/theme';

export default function BackButton({ navigation, route }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  
  return (
    <TouchableOpacity
      style={[
        styles.btnBack,
        {
          borderColor:
            route.name === 'Assados' || route.name === 'Adicionais'
              ? themeColor
              : colors.light
        }
      ]}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons
        name="arrow-back"
        size={25}
        color={
          route.name === 'Assados' || route.name === 'Adicionais'
            ? themeColor
            : colors.light
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  }
});
