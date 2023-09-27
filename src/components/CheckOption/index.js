/* eslint-disable react/jsx-props-no-spreading */
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';

export default function CheckOption({ checked, onPress, checkLabel }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onPress}
      >
        {checked && (
          <FontAwesome5 name="check" size={20} color={colors.light} />
        )}
      </TouchableOpacity>
      <Text style={styles.checkLabel}>{checkLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  checkboxBase: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent'
  },
  checkboxChecked: {
    backgroundColor: colors.primary
  },
  checkLabel:{
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    color: colors.primary
  },
});
