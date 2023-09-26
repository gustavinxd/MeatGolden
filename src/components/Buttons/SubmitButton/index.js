import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../colors/index';

export default function SubmitButton({
  btnTitle,
  onPress,
  btnColor = 'light'
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnContainer,
        btnColor === 'red'
          ? { backgroundColor: colors.primary }
          : { backgroundColor: colors.light }
      ]}
    >
      <Text
        style={[
          styles.btnTitle,
          btnColor === 'red'
            ? { color: colors.light }
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
