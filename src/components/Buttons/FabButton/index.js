import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../../colors/index';

export default function FabButton({
  icon,
  onPress,
  btnColor = 'light',
  style
}) {
  const chooseColor =
    btnColor === 'red'
      ? { backgroundColor: colors.primary }
      : { backgroundColor: colors.light };

  const chooseColorIcon =
    btnColor === 'red'
      ?  colors.light 
      :  colors.primary 
      
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, chooseColor , { ...style }]}
    >
      <MaterialIcons name={icon} size={30} color={chooseColorIcon}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 40,
    elevation: 2,
  },
});
