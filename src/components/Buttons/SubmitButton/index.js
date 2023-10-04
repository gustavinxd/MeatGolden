import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../colors/index';
import { useThemeContext } from '../../../contexts/theme';

export default function SubmitButton({
  btnTitle,
  onPress,
  btnColor = 'light',
  style
}) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  const themeColorText = theme === 'light' ? colors.light : colors.dark;

  const chooseColor =
    btnColor === 'red'
      ?  themeColor
      : colors.light ;
      
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, { backgroundColor: chooseColor } , { ...style }]}
    >
      <Text
        style={[
          styles.btnTitle,
          btnColor === 'red'
            ? { color: themeColorText }
            : { color: colors.primary }
        ]}
      >
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    marginBottom: 30,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.lightGrey
  },
  btnTitle: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 16
  }
});
